﻿using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL.Managers
{
    public class BaseManager
    {
        protected IUnitOfWork uOW;
        public BaseManager(IUnitOfWork uOW)
        {
            this.uOW = uOW;
        }
    }
}
