using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DB
{
    public class Holiday
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Name { get; set; }
        public int CreatedByUser { get; set; }
    }
}
