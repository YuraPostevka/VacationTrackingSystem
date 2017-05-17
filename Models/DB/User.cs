using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DB
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(4)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(4)]
        public string LastName { get; set; }

        [DataType(DataType.Password)]
        [MinLength(4)]
        public string Password { get; set; }
        public int RemaindDays { get; set; }
        public int YearsOfService { get; set; }

        [ForeignKey("RoleId")]
        public virtual Role Role { get; set; }
        public int RoleId { get; set; }

        public virtual List<VacationRequest> VacationRequests { get; set; }

        public User()
        {
            VacationRequests = new List<VacationRequest>();
        }
    }
}
