using DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models.DB;
using DAL.Repositories;
using System.Data.Entity.Validation;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private MainContext context;

        #region Private Repositories

        private IGenericRepository<User> userRepo;
        private IGenericRepository<Role> roleRepo;
        private IGenericRepository<VacationRequest> vacationRequestRepo;
        private IGenericRepository<Holiday> holidayRepo;


        #endregion Private Repositories

        public UnitOfWork()
        {
            context = new MainContext();

            userRepo = new GenericRepository<User>(context);
            roleRepo = new GenericRepository<Role>(context);
            vacationRequestRepo = new GenericRepository<VacationRequest>(context);
            holidayRepo = new GenericRepository<Holiday>(context);
        }

        #region Repositories Getters

        public IGenericRepository<User> UserRepo
        {
            get
            {
                if (userRepo == null) userRepo = new GenericRepository<User>(context);
                return userRepo;
            }
        }

        public IGenericRepository<Role> RoleRepo
        {
            get
            {
                if (roleRepo == null) roleRepo = new GenericRepository<Role>(context);
                return roleRepo;
            }
        }

        public IGenericRepository<Holiday> HolidayRepo
        {
            get
            {
                if (holidayRepo == null) holidayRepo = new GenericRepository<Holiday>(context);
                return holidayRepo;
            }
        }

        public IGenericRepository<VacationRequest> VacationRequestRepo
        {
            get
            {
                if (vacationRequestRepo == null) vacationRequestRepo = new GenericRepository<VacationRequest>(context);
                return vacationRequestRepo;
            }
        }

        #endregion Repositories Getters

        public void UpdateContext()
        {
            context = new MainContext();
        }

        public int Save()
        {
            try
            {
                return context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                return 0;
            }
        }

        #region Dispose

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        #endregion Dispose
    }
}
