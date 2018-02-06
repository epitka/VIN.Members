using System;
using System.Collections.Generic;
using System.Text;
using Shouldly;
using VIN.Members.Domain.ValueObjects;
using Xunit;

namespace VIN.Members.Domain.UnitTests.cs.ValueObjects
{
    public class EmailTest
    {
        public class Ctor
        {
            [Fact]
            public void With_Valid_Args()
            {
                string sut = new Email("test@test.com");

               sut.ShouldBe("test@test.com");
            }
        }
    }
}
