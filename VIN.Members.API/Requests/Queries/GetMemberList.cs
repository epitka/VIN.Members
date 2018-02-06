using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using VIN.Members.API.Extensions;
using VIN.Members.API.Infrastructure;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.Entities.EFConfiguration;

namespace VIN.Members.API.Requests.Queries
{
    public class GetMemberList
    {
        public class Query : IRequest<PagedResult<Member>>
        {
            public Query()
            {
                Sort = new Dictionary<MemberField, SortDirection>();
                Fiter = new Dictionary<MemberField, object>();

            }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public DateTime? DateOfBirth { get; set; }

            public PagingInfo PagingInfo { get; set; }

            public Dictionary<MemberField, SortDirection> Sort { get; }
            public Dictionary<MemberField, object> Fiter { get; }

        }

        public class Handler : AsyncRequestHandler<Query, PagedResult<Member>>
        {
            private readonly MemberContext _context;

            public Handler(MemberContext context)
            {
                _context = context;
            }

            private Dictionary<MemberField, Expression<Func<Member, object>>> fieldToSortExpression
                            = new Dictionary<MemberField, Expression<Func<Member, object>>>()
            {
                {MemberField.FirstName, x => x.Name.FirstName},
                {MemberField.LastName, x => x.Name.LastName},
                {MemberField.DateOfBirth, x => x.DateOfBirth},
                {MemberField.Phone, x => x.Phone},
                {MemberField.Email, x => x.Email },
                {MemberField.UserName, x=>x.UserName }
            };

            protected override async Task<PagedResult<Member>> HandleCore(Query query)
            {
                var q = _context.Members.AsQueryable();

                q.AsNoTracking();

                if (string.IsNullOrWhiteSpace(query.FirstName) == false)
                {
                    q = q.Where(x => x.Name.FirstName == query.FirstName);
                }

                if (string.IsNullOrWhiteSpace(query.LastName) == false)
                {
                    q = q.Where(x => x.Name.LastName == query.LastName);
                }

                if (query.DateOfBirth.HasValue)
                {
                    q = q.Where(x => x.DateOfBirth == query.DateOfBirth);
                }

                if (string.IsNullOrWhiteSpace(query.Email) == false)
                {
                    q = q.Where(x => x.Email == query.Email);
                }

                if (string.IsNullOrWhiteSpace(query.Phone) == false)
                {
                    q = q.Where(x => x.Phone == query.Phone);
                }

                // sort
                foreach (var item in query.Sort)
                {
                    var field = item.Key;
                    var isAscending = item.Value==SortDirection.Asc;
                    var expression = fieldToSortExpression[field];
                    
                    q = q.OrderBy(expression, isAscending);
                }

                //paging
                var pagingInfo = query.PagingInfo ?? new PagingInfo(10, 1);

                var result = await q.ToPagedList(pagingInfo)
                                    .ConfigureAwait(false);

                return result;

            }
        }
    }


}
