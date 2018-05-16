using System;
using System.Collections.Generic;
using System.Text;
using Shouldly;
using VIN.Members.Domain.ValueObjects;
using Xunit;

namespace VIN.Members.Domain.UnitTests.cs.ValueObjects
{
    //NOTE: just a smoke test, needs all test for valid, invalid args etc.

    public class NameTest
    {
        public class Ctor
        {

            [Fact]
            public void With_Valid_Args()
            {
                var sut = new Name("first", "last");

                sut.FirstName.ShouldBe("first");
                sut.LastName.ShouldBe("last");
            }

        }
    }
}
