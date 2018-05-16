using System;
using System.Collections.Generic;
using System.Text;
using Remotion.Linq.Clauses.Expressions;
using Shouldly;
using VIN.Members.Domain.ValueObjects;
using Xunit;

namespace VIN.Members.Domain.UnitTests.cs.ValueObjects
{
    //NOTE: this is just testing one positive test scenario. This needs many more tests

    public class PhoneTest
    {
        public class Ctor
        {
            [Fact]
            public void With_Valid_Param()
            {
                var sut = new Phone(123, 456, 7890);

                sut.AreaCode.ShouldBe("123");
                sut.Prefix.ShouldBe("456");
                sut.LineNumber.ShouldBe("7890");

                string sutValue = sut;
                sutValue.ShouldBe("1234567890");


            }
        }

        public class Formated
        {
            [Fact]
            public void Returns_Correctly_Formated()
            {
                var sut = new Phone(123, 456, 7890);

                sut.Formated().ShouldBe("(123) 456-7890");
            }
        }
    }
}

