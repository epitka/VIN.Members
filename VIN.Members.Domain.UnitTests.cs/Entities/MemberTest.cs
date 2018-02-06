using System;
using System.Security.Cryptography.X509Certificates;
using Shouldly;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.ValueObjects;
using Xunit;

namespace VIN.Members.Domain.UnitTests.Entities
{
    public class MemberTest
    {
        public class Ctor
        {
            [Fact]
            public void With_Required_Only()
            {
                
                var userName = new UserName("test");
                var name = new Name("first","last");
                var email = new Email("test@test.com");
                var dob = new DateOfBirth(new DateTime(1972,10,26));

                var sut = new Member(userName,name,email,dob);

                sut.UserName.ShouldBe(userName);
                sut.Email.ShouldBe(email);
                sut.Phone.ShouldBe(null);
                sut.Name.FirstName.ShouldBe("first");
                sut.Name.LastName.ShouldBe("last");

                DateTime dt = dob;

                sut.DateOfBirth.ShouldBe(dt);    
            }
            
            [Fact]
            public void With_Phone()
            {
                var userName = new UserName("test");
                var name = new Name("first", "last");
                var email = new Email("test@test.com");
                var dob = new DateOfBirth(new DateTime(1972, 10, 26));
                var phone = new Phone(214, 613, 5757);

                var sut = new Member(userName, name, email, dob, phone);

                sut.UserName.ShouldBe(userName);
                sut.Email.ShouldBe(email);
                sut.Phone.ShouldBe(phone);
                sut.Name.FirstName.ShouldBe("first");
                sut.Name.LastName.ShouldBe("last");
                sut.Phone.ShouldBe(phone);
                DateTime dt = dob;

                sut.DateOfBirth.ShouldBe(dt);

                //sut.DateOfBirth.ShouldBe(dt);
            }


        }

        public class SetName
        {
            [Fact]
            public void With_Valid_Name()
            {
                var member = MemberTest.GetMemberForUpdate();

                var newName = new Name("newFirst", "newLast");

                member.SetName(newName);

                member.Name.ShouldBe(newName);

            }
        }

        private static Member GetMemberForUpdate()
        {
            var userName = new UserName("test");
            var name = new Name("first", "last");
            var email = new Email("test@test.com");
            var dob = new DateOfBirth(new DateTime(1972, 10, 26));

            return new Member(userName, name, email, dob);
        }
    }
}
