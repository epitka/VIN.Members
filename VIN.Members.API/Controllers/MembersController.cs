using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using VIN.Members.API.Extensions;
using VIN.Members.API.Infrastructure;
using VIN.Members.Domain.Entities;
using VIN.Members.API.Model;
using VIN.Members.API.Requests;
using VIN.Members.API.Requests.Commands;
using VIN.Members.API.Requests.Queries;
using VIN.Members.Domain.Commands;
using VIN.Members.Domain.ValueObjects;
using VIN.Members.Domain.Infrastructure;

namespace VIN.Members.API.Controllers
{
    [Route("api/[controller]")]
    public class MembersController : Controller
    {
        private readonly IMediator _mediator;

        public MembersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        //GET api/members?query
        [HttpGet]
        public async Task<PagedResult<Model.MemberInfo>> Query([FromQuery]string userName, [FromQuery]string firstName, [FromQuery]string lastName,
                                         [FromQuery]string email, [FromQuery]string phone,
                                         [FromQuery]DateTime? dateOfBirth,
                                         [FromQuery]string sortBy, [FromQuery]bool isDescending,
                                         [FromQuery]int pageSize, [FromQuery]int pageNumber)
        {
            if (pageSize <= 0) pageSize = 10;
            if (pageNumber <= 0) pageNumber = 1;
            
            var paging = new PagingInfo(pageSize, pageNumber);

            var query = new GetMemberList.Query()
            {
                UserName = userName,
                FirstName = firstName,
                LastName = lastName,
                Email = email,
                Phone = phone,
                DateOfBirth = dateOfBirth,
                PagingInfo = paging
            };

            if (string.IsNullOrEmpty(sortBy))
            {
                sortBy = MemberField.UserName.QueryParameter;
            }

            var field = Enumeration.GetAll<MemberField>().First(x => x.QueryParameter.ToLower() == sortBy.ToLower());
            
            query.Sort.Add(field,
                        isDescending ? SortDirection.Desc : SortDirection.Asc);

            var result = await _mediator.Send(query).ConfigureAwait(false);
            
            var toReturn = new PagedResult<MemberInfo>()
            {
                CurrentPage = result.CurrentPage,
                PageSize = result.PageSize,
                PageCount = result.PageCount,
                RowCount = result.RowCount,
                Data = result.Data.Select(x => x.ToMemberInfo())
            };

            return toReturn;

        }

        // GET api/members/5
        [HttpGet("{id}")]
        public async Task<MemberInfo> Get(Guid id)
        {
            //TODO: check for arguments or validate query

            var query = new GetMember.Query { MemberId = id };

            var result = await _mediator.Send(query).ConfigureAwait(false);

            return result.ToMemberInfo();

        }

        // POST api/members
        [HttpPost]
        public async Task<MemberInfo> Create([FromBody]CreateMemberCommand request)
        {
            //TODO: validate MemberInfo

            var phoneNumber = request.Phone;
            Phone phone = null;

            if (phoneNumber.HasValue)
            {
                phone = new Phone(phoneNumber.Value);
            }

            var command = new CreateMember.Command(new UserName(request.UserName),
                                                    new Name(request.FirstName, request.LastName),
                                                    new DateOfBirth(request.DateOfBirth),
                                                    new Email(request.Email), phone);

            var result = await _mediator.Send(command).ConfigureAwait(false);

            return result.ToMemberInfo();
        }

        // POST api/members/5
        [HttpPost("{id}")]
        public async Task<MemberInfo> Update([FromBody]UpdateMemberCommand request)
        {
            //TODO: validate MemberInfo

            var phoneNumber = request.Phone;
            Phone phone = null;

            if (phoneNumber.HasValue)
            {
                phone = new Phone(phoneNumber.Value);
            }

            var command = new CreateMember.Command(new UserName(request.UserName),
                new Name(request.FirstName, request.LastName),
                new DateOfBirth(request.DateOfBirth),
                new Email(request.Email), phone);

            var result = await _mediator.Send(command).ConfigureAwait(false);

            return result.ToMemberInfo();
        }

        // DELETE api/members/5
        [HttpDelete("{id}")]
        public async Task Delete(Guid id)
        {
            var command = new DeleteMember.Command(id);

           await _mediator.Send(command).ConfigureAwait(false);
        }



    }
}
