using System;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.Entities.EFConfiguration;

namespace VIN.Members.API.Requests.Queries
{
    public class GetMember
    {
        public class Query : IRequest<Member>
        {
            
            public Guid MemberId { get; set; }
        }

        public class Handler : AsyncRequestHandler<Query, Member>
        {
            private readonly MemberContext _context;

            public Handler(MemberContext context)
            {
                _context = context;
            }

            protected override Task<Member> HandleCore(Query request)
            {
                return _context.Members
                            .SingleOrDefaultAsync(x=>x.Id== request.MemberId);
            }
        }
    }
}
