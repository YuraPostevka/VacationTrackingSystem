using BAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Interfaces;

namespace BAL.Managers
{
    public class HolidayManager : BaseManager, IHolidayManager
    {
        public HolidayManager(IUnitOfWork uOW) : base(uOW)
        {
        }
    }
}
