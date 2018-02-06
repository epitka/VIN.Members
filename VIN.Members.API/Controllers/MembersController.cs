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
        public async Task<PagedResult<Model.MemberInfo>> Query([FromBody]string firstName, [FromBody]string lastName,
                                         [FromBody]string email, [FromBody]string phone,
                                         [FromBody]DateTime? dateOfBirth,
                                         [FromBody]string sortBy, [FromBody]bool isAscending,
                                         [FromBody]int pageSize, [FromBody]int pageNumber)
        {

            var paging = new PagingInfo(pageSize, pageNumber);

            var query = new GetMemberList.Query()
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email,
                Phone = phone,
                DateOfBirth = dateOfBirth,
                PagingInfo = paging
            };

            query.Sort.Add((MemberField)Enum.Parse(typeof(MemberField), sortBy),
                isAscending ? SortDirection.Asc : SortDirection.Desc);

            var result = await _mediator.Send(query).ConfigureAwait(false);

            var toReturn = new PagedResult<MemberInfo>()
            {
                CurrentPage = result.CurrentPage,
                PageSize = result.PageSize,
                PageCount = result.PageCount,
                RowCount = result.PageCount,
                Data = result.Data.Select(x => x.ToMemberInfo())
            };

            return toReturn;

        }

        // GET api/members/5
        [HttpGet("{id}")]
        public async Task<MemberInfo> Get([FromQuery]Guid id)
        {
            //TODO: check for arguments or validate query

            var query = new GetMember.Query { MemberId = id };

            var result = await _mediator.Send(query).ConfigureAwait(false);

            return result.ToMemberInfo();

        }

        // POST api/members
        [HttpPost("{id}")]
        public async Task<MemberInfo> Post( [FromBody]CreateMemberCommand request)
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
        
        // POST api/members
        [HttpPost]
        public async Task<MemberInfo> Post([FromBody]UpdateMemberCommand request)
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

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public Task Delete(Guid id)
        //{
        //    var command = new DeleteMember.Command(id);

        //    _mediator.Send(command).ConfigureAwait(false);
        //}



    }
}
