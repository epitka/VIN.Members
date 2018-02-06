using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using VIN.Members.API.Model;
using VIN.Members.Domain.Entities;

namespace VIN.Members.API.Extensions
{
    public static class MemberExtensions
    {
        //NOTE: using dynamic as return value as JSON returned can be viewed as a contract
        //We could also define a strongly typed DTO as well
        //Also AutoMapper could be used to map instnce of the entity into dto
        //but since this is just a throw way project using extension method
        public static MemberInfo ToMemberInfo(this Member member)
        {
            var dto = new MemberInfo
            {
                MemberId = member.Id,
                UserName = member.UserName,
                FirstName = member.Name.FirstName,
                LastName = member.Name.LastName,
                DateOfBirth = member.DateOfBirth,
                Phone = member.Phone,
                Email = member.Email
            };
            
            return dto;

        }


    }
}
