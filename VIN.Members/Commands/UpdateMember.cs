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
    public class UpdateMember
    {
        public class Command : IRequest<Member>
        {
            public Command(Guid memberId, UserName userName, Name name, DateOfBirth dateOfBirth,
                Email email, Phone phone)
            {
                Guard.NotNull(memberId, nameof(memberId));
                Guard.NotNull(userName, nameof(userName));
                Guard.NotNull(name, nameof(name));
                Guard.NotNull(email, nameof(email));
                Guard.NotNull(dateOfBirth, nameof(dateOfBirth));

                MemberId = memberId;
                UserName = userName;
                Name = name;
                DateOfBirth = dateOfBirth;
                Email = email;
                Phone = phone;
            }

            public Guid MemberId { get; }
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
                var member = await _context.FindAsync<Member>(cmd.MemberId).ConfigureAwait(false);

                await member.SetUserName(cmd.UserName, _userNameVerifier).ConfigureAwait(false);

                member.SetContactInfo(cmd.Email, cmd.Phone);
                member.SetName(cmd.Name);
                member.SetDateOfBirth(cmd.DateOfBirth);

                _context.Update(member);

                //NOTE: we could use mediator here to notify other parts of application
                //(within domain, not other microservices) 
                // of the changes that we collected in entities 

                await _context.SaveChangesAsync().ConfigureAwait(false);

                //after changes have been committed we could put integration events into event bus 
                //to notify other microservices of changes.
                
                return member;
            }
        }
    }
}
