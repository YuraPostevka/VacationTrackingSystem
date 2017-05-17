using Models.DB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL.Interfaces
{
    public interface IUserManager
    {
        void Update(User user);
        User GetById(int? id);
        User GetByEmail(string email, string password);
        User GetByEmail(string email);
        List<User> GetAll();
        User Insert(User user);
        string GetEmail(int? Id);
        bool EmailIsExist(string email);
        void Delete(int? id);
        User Find(string email, string passwrod);
        void UpdateRole(int userId,string role);
    }
}
