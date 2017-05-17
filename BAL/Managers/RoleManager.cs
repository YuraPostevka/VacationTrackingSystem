using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Interfaces;
using BAL.Interfaces;
using Models.DB;

namespace BAL.Managers
{
    public class RoleManager : BaseManager, IRoleManager
    {
        public RoleManager(IUnitOfWork uOW) : base(uOW)
        {
        }

        public List<Role> GetAll()
        {
            return uOW.RoleRepo.All.ToList();
        }
    }
}
