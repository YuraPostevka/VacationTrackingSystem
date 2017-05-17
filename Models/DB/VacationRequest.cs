using Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DB
{
    public class VacationRequest
    {
        [Key]
        public int Id { get; set; }
        public VacationType Type { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Status Status { get; set; }
        public string ApprovedBy { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }
       
        public int UserId { get; set; }
    }
}
