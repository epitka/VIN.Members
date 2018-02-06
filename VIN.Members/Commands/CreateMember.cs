using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.Entities.EFConfiguration;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.Infrastructure.Execeptions;
using VIN.Members.Domain.Services;
using VIN.Members.Domain.ValueObjects;

namespace VIN.Members.Domain.Commands
{
    public class CreateMember
    {
        public class Command : IRequest<Member>
        {
            public Command(UserName userName, Name name, DateOfBirth dateOfBirth,
                Email email, Phone phone = null)
            {
                Guard.NotNull(userName, nameof(userName));
                Guard.NotNull(name, nameof(name));
                Guard.NotNull(email, nameof(email));
                Guard.NotNull(dateOfBirth, nameof(dateOfBirth));

                UserName = userName;
                Name = name;
                DateOfBirth = dateOfBirth;
                Email = email;
                Phone = phone;
            }

            public UserName UserName { get; }
            public Name Name { get; }
            public DateOfBirth DateOfBirth { get; }
            public Email Email { get; }
            public Phone Phone { get; }
        }

        public class Handler : AsyncRequestHandler<Command, Member>
        {
            private readonly MemberContext _context;
            private readonly IUserNameVerifier _userNameVerifier;

            public Handler(MemberContext context, IUserNameVerifier userNameVerifier)
            {
                _context = context;
                _userNameVerifier = userNameVerifier;
            }

            protected override async Task<Member> HandleCore(Command cmd)
            {
                //check if user name is unique

                var isUnique = await _userNameVerifier.IsUnique(new UserName(cmd.UserName))
                                                     .ConfigureAwait(false);

                if (isUnique == false)
                {
                    
                    throw new DomainValidationException($"Username {cmd.UserName} already exists");
                }

                var member = new Member(cmd.UserName, cmd.Name, cmd.Email, cmd.DateOfBirth, cmd.Phone);

                _context.Add(member);

                await _context.SaveChangesAsync().ConfigureAwait(false);

                return member;
            }
        }
    }
}