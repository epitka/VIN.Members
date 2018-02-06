using System;
using System.Collections.Generic;
using System.Text;
using VIN.Members.Domain.Infrastructure;
using VIN.Members.Domain.Infrastructure.Execeptions;

namespace VIN.Members.Domain.ValueObjects
{
    public class Name:ValueObject
    {
        //EF requires this
        protected Name()
        {

        }

        private string _firstName;
        private string _lastName;

        public Name(string firstName, string lastName)
        {
            EnsureFirstNameValid(firstName);
            EnsureLastNameValid(lastName);

            _firstName = firstName;
            _lastName = lastName;
        }

        private static void EnsureFirstNameValid(string firstName)
        {
            if (string.IsNullOrWhiteSpace(firstName))
            {
                throw new MemberDomainException("First name is required.");
            }

            if (firstName.Length < 2 || firstName.Length > 100)
            {
                throw new MemberDomainException("First name must be between 2 and 100 characters");
            }
        }

        private static void EnsureLastNameValid(string lastName)
        {
            if (string.IsNullOrWhiteSpace(lastName))
            {
                throw new MemberDomainException("Last name is required.");
            }
            if (lastName.Length < 2 || lastName.Length > 100)
            {
                throw new MemberDomainException("Last name must be between 2 and 100 characters");

            }
        }

        public override string ToString()
        {
            return FirstName + " " + LastName;
        }

        public string FirstName => _firstName;
        public string LastName => _lastName;

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return _firstName;
            yield return _lastName;
        }
    }
}
