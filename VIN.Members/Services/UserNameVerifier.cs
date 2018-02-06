using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VIN.Members.Domain.Entities.EFConfiguration;
using VIN.Members.Domain.ValueObjects;

namespace VIN.Members.Domain.Services
{
    public interface IUserNameVerifier
    {
        Task<bool> IsUnique(UserName userName);
    }

    public class UserNameVerifier: IUserNameVerifier
    {
        private readonly MemberContext _context;

        public UserNameVerifier(MemberContext context)
        {
            _context = context;
        }

        public async Task<bool> IsUnique(UserName userName)
        {
            var members= await _context.Members
                .Where(x => x.UserName == userName)
                .ToListAsync()
                .ConfigureAwait(false);

            return members.Any() == false;
        }
    }
}
