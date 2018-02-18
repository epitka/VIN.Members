using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MediatR;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.Entities.EFConfiguration;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.ValueObjects;

namespace VIN.Members.Domain.Commands
{
    public class DeleteMember
    {
        public class Command : IRequest
        {
            public Command(Guid memberId)
            {
                Guard.NotNull(memberId, nameof(memberId));

                MemberId = memberId;
            }

            public Guid MemberId { get; }

        }

        public class Handler : AsyncRequestHandler<Command>
        {
            private MemberContext _context;

            public Handler(MemberContext context)
            {
                _context = context;
            }

            protected async override Task HandleCore(Command cmd)
            {
                try
                {
                   var member = await _context.FindAsync<Member>(cmd.MemberId);
                          
                    //TODO: need to figure out why check for just member != null
                    //crashes the whole app !!!
                    if (member?.Id != null)
                    {
                         _context.Remove(member);

                         await _context.SaveChangesAsync();
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }

                // use mediator here to notify other parts of application (within domain, not other microservices) of the change
            }
        }
    }
}
