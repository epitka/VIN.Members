using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Shouldly;
using VIN.Members.Domain.Infrastructure.Execeptions;
using VIN.Members.Domain.ValueObjects;
using Xunit;

namespace VIN.Members.Domain.UnitTests.cs.ValueObjects
{
   public class UserNameTest
    {

        [Fact]
        public void CanConstruct_With_Valid_Params()
        {
            var sut = new UserName("test");

            sut.Value.ShouldBeSameAs("test");
        }

        [Fact]
        public void Throws_If_less_than_4_chars()
        {
            var val = string.Join("", Enumerable.Range(0, 2).ToArray());
            Assert.Throws<MemberDomainException>(() => new UserName(val));
        }

        [Fact]
        public void Throws_If_more_than_12_chars()
        {
            var val = string.Join("", Enumerable.Range(0, 13).ToArray());
            Assert.Throws<MemberDomainException>(() => new UserName(val));
        }
    }
}
