﻿using BAL.Interfaces;
using BAL.Managers;
using DAL;
using DAL.Interfaces;
using Newtonsoft.Json;
using SimpleInjector;
using SimpleInjector.Integration.Web;
using SimpleInjector.Integration.Web.Mvc;
using SimpleInjector.Integration.WebApi;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace VacationTracking
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            InjectorContainer();
            AreaRegistration.RegisterAllAreas();

            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings
             .ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            GlobalConfiguration.Configuration.Formatters
             .Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);
        }

        private void InjectorContainer()
        {
            try
            {
                var container = new Container();
                container.Options.DefaultScopedLifestyle = new WebRequestLifestyle();
                container.Register<IUnitOfWork, UnitOfWork>(Lifestyle.Scoped);
                container.Register<IUserManager, UserManager>();
                container.Register<IVacationRequestManager, VacationRequestManager>();
                container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
                GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
                DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(container));
            }
            catch (Exception ex)
            {

            }
        }
    }
}
