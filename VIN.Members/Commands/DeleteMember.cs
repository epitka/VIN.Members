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
            private readonly MemberContext _context;

            public Handler(MemberContext context)
            {
                _context = context;
            }

            protected override async Task HandleCore(Command cmd)
            {
                var member = await _context.FindAsync<Member>(cmd.MemberId).ConfigureAwait(false);

                _context.Remove(member);

                await _context.SaveChangesAsync().ConfigureAwait(false);

                // use mediator here to notify other parts of application (within domain, not other microservices) of the change
            }
        }
    }
}
