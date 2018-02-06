using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.Infrastructure.Execeptions;

namespace VIN.Members.Domain.ValueObjects
{
    public class Email 
    {
        private readonly string _value;

        public Email(string email)
        {
            EnsureValid(email);

            _value = email;
        }

        private void EnsureValid(string email)
        {
            
            if (String.IsNullOrEmpty(email))
            {
                throw new MemberDomainException("Email cannot be empty or null");
            }

            if (email.Length > 75)
            {
                throw new MemberDomainException("Email cannot be longer than 75 characters.");
            }

            var isEmail = Regex.IsMatch(email, @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z", RegexOptions.IgnoreCase);

            if (!isEmail)
            {
                throw new MemberDomainException("Email format is invalid.");
            }
        }

        public static implicit operator string(Email email)
        {
            return email._value;
        }

        public static implicit operator Email(string email)
        {
            return new Email(email);
        }


        public override string ToString()
        {
            return _value;
        }

     
    }
}
