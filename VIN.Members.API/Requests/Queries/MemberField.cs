using System;
using System.Linq.Expressions;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.Infrastructure;

namespace VIN.Members.API.Requests.Queries
{
   public class MemberField: Enumeration{

        public MemberField() { }

        public static readonly MemberField UserName = new MemberField(0, "User Name", "userName", x => x.UserName);
        public static readonly MemberField FirstName = new MemberField(1,"First Name", "firstName", x => x.Name.FirstName);
        public static readonly MemberField LastName = new MemberField(2, "Last Name", "lastName", x => x.Name.LastName);
        public static readonly MemberField DateOfBirth = new MemberField(2, "Date Of Birth", "dateOfBirth", x => x.DateOfBirth);
        public static readonly MemberField Phone = new MemberField(3, "Phone", "phone", x => x.Phone);
        public static readonly MemberField Email = new MemberField(0, "Email", "email", x => x.Email);
        

        public string QueryParameter => _queryParameter;
        private Expression<Func<Member, object>> _propertyExpression;
        private string _queryParameter;

        public MemberField(int value, string displayName, string queryParameter, Expression<Func<Member, object>> propertyExpression) : base(value, displayName)
        {
            _queryParameter = queryParameter;
            _propertyExpression = propertyExpression;
        }

        public Expression<Func<Member, object>> PropertyExpression => _propertyExpression;
        
    }

    //public enum MemberField
    //{
    //    None,
    //    UserName,
    //    FirstName,
    //    LastName,
    //    Email,
    //    Phone,
    //    DateOfBirth
    //}
}
