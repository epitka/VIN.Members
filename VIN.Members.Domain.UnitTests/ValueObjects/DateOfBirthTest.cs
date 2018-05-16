using System;
using System.Collections.Generic;
using System.Text;
using Shouldly;
using VIN.Members.Domain.ValueObjects;
using Xunit;

namespace VIN.Members.Domain.UnitTests.cs.ValueObjects
{
   public class DateOfBirthTest
    {
        public class Ctor
        {
            [Fact]
            public void With_Valid_Args()
            {

                var dob = new DateTime(1972, 10, 26);
                var sut = new DateOfBirth(dob);

                DateTime sutValue = sut;

                sutValue.ShouldBe(dob);
            }
        }
    }
}
