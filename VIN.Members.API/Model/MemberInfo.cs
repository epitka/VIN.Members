using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VIN.Members.API.Model
{
    public class MemberInfo
    {
        public Guid MemberId { get; set; }
        public string UserName { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public DateTime DateOfBirth { get; set; }
    }
}
