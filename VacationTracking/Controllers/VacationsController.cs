using BAL.Interfaces;
using Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;

namespace VacationTracking.Controllers
{
    [Authorize]
    [RoutePrefix("api/Vacations")]
    public class VacationsController : ApiController
    {
        public IVacationRequestManager _vacationManager;
        public VacationsController(IVacationRequestManager vacationManager)
        {
            _vacationManager = vacationManager;
        }

        [HttpGet]
        [Route("GetAll")]
        public IHttpActionResult GetAll()
        {
            int userId = Convert.ToInt32(User.Identity.GetUserId());
            var vacations = _vacationManager.GetAll(userId);

           
            return Ok(vacations);
        }

        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreatVacationRequest([FromBody]VacationRequest request)
        {
            request.UserId = Convert.ToInt32(User.Identity.GetUserId());
            _vacationManager.Add(request);
            return Ok();
        }
    }
}
