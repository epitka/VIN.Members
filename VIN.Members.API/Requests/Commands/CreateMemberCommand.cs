using System;

namespace VIN.Members.API.Requests.Commands
{
    public class CreateMemberCommand
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public int? Phone { get; set; }
    }

    public class CreateMemberCommandValidator
    {

    }
}
