using Models.DB;
using Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL.Interfaces
{
    public interface IVacationRequestManager
    {
        List<VacationRequestDTO> GetAll(int userId);
        void Add(VacationRequest item);
        void Update(VacationRequest item, int userId);
    }
}
