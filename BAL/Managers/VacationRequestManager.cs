using BAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Interfaces;
using Models.DB;
using Models.Enums;
using Models.DTO;

namespace BAL.Managers
{
    public class VacationRequestManager : BaseManager, IVacationRequestManager
    {
        public VacationRequestManager(IUnitOfWork uOW) : base(uOW)
        {
        }

        public void Add(VacationRequest item)
        {
            item.Status = Models.Enums.Status.InQueue;
            uOW.VacationRequestRepo.Insert(item);
            uOW.Save();
        }

        public List<VacationRequestDTO> GetAll(int userId)
        {
            List<VacationRequestDTO> result = new List<VacationRequestDTO>();
            var list = uOW.VacationRequestRepo.All.Where(i => i.User.Id == userId).ToList();
            foreach (var item in list)
            {
                var dto = new VacationRequestDTO()
                {
                    Id = item.Id,
                    ApprovedBy = item.ApprovedBy,
                    Status = item.Status.ToString(),
                    EndDate = item.EndDate,
                    StartDate = item.StartDate,
                    Type = item.Type.ToString(),
                    User = item.User,
                    UserId = item.UserId
                };

                result.Add(dto);

            }
            return result;
        }

        public void Update(VacationRequest item, int userId)
        {
            //throw new NotImplementedException();
        }
    }
}
