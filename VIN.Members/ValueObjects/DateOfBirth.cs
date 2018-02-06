using System;
using System.Collections.Generic;
using System.Text;
using VIN.Members.Domain.Infrastructure;

namespace VIN.Members.Domain.ValueObjects
{
    public class DateOfBirth
    {
        private readonly DateTime _value;
        public DateOfBirth(DateTime value)
        {
            EnsureValid(value);

            _value = value;
        }

        private static void EnsureValid(DateTime value)
        {
            //maybe check that dob is not in the future, or that it is at least 18 years old
            //that it is not too old, etc.
        }

        public static implicit operator DateTime(DateOfBirth dob)
        {
            return dob._value;
        }

        public static implicit operator DateOfBirth(DateTime value)
        {
            return new DateOfBirth(value);
        }

        public override string ToString()
        {
            return _value.ToShortDateString();
        }
    }
}
