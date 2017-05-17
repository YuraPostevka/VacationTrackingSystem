using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VacationTracking.Controllers
{
    [RoutePrefix("api/Home")]
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        //[HttpGet]
        //[Route("GetDates/{year}/{month}")]
        //public string GetDates(int year, int month)
        //{
        //    var dates = new List<DateTime>();

        //    for (var date = new DateTime(year, month, 1); date.Month == month; date = date.AddDays(1))
        //    {
        //        dates.Add(date);
        //    }

        //    return JsonConvert.SerializeObject(dates);
        //}
    }
}
