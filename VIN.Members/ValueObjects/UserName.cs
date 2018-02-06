using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Query.ExpressionTranslators.Internal;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.Infrastructure.Execeptions;

namespace VIN.Members.Domain.ValueObjects
{
    public class UserName : ValueObject
    {
        private string _value;

        public UserName(string username)
        {
            if (String.IsNullOrWhiteSpace(username))
            {
                throw new MemberDomainException("User name is required.");
            }

            if (username.Length < 4 || username.Length > 12)
            {
                throw new MemberDomainException("User name must be between 4 and 12 characters long");
            }

            _value = username;
        }

        public string Value => _value;

        public static implicit operator string(UserName userName)
        {
            return userName._value;
        }

        public static implicit operator UserName(string userName)
        {
            return new UserName(userName);
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return _value;
        }

        public override string ToString()
        {
            return _value;
        }
    }
}
