using Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
    public interface IUnitOfWork
    {
        IGenericRepository<User> UserRepo { get; }
        IGenericRepository<Role> RoleRepo { get; }
        IGenericRepository<Holiday> HolidayRepo { get; }
        IGenericRepository<VacationRequest> VacationRequestRepo { get; }

        void Dispose();

        int Save();
    }
}
