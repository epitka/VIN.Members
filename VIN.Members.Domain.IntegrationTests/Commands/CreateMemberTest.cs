using System;
using System.Threading.Tasks;
using Shouldly;
using VIN.Members.Domain.Commands;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.Infrastructure.Execeptions;
using VIN.Members.Domain.ValueObjects;
using Xunit;
using Xunit.Abstractions;

namespace VIN.Members.Domain.IntegrationTests.Commands
{
    public class CreateMemberTest
    {
        public class Handler : HandlerTest
        {
            public Handler(ITestOutputHelper output) : base(output)
            {
            }

            [Fact]
            public async Task Can_Create_When_Phone_Is_Null()
            {
                var ug = Guid.NewGuid().ToString().Substring(0, 12); //just to get by until database clean up is set up

                var userName = new UserName(ug);
                var name = new Name("First", "Last");
                var email = new Email("test@test.com");
               
                var dob = new DateOfBirth(new DateTime(1972, 10, 26));

                var cmd = new CreateMember.Command(userName, name, dob, email, null);

                var member = await _mediator.Send(cmd).ConfigureAwait(false);
                
                var sut = await _memberContext.FindAsync<Member>(member.Id).ConfigureAwait(false);

                sut.Id.ShouldBe(member.Id);
                sut.UserName.ShouldBe(userName);
                sut.Name.ShouldBe(name);

                DateTime dt = sut.DateOfBirth;
                sut.DateOfBirth.ShouldBe(dt);

                sut.Email.ShouldBe(email);
            }

            [Fact]
            public async Task Can_Create_When_Phone_Is_NotNull()
            {
                var ug = Guid.NewGuid().ToString().Substring(0, 12); //just to get by until database clean up is set up

                var userName = new UserName(ug);
                var name = new Name("First", "Last");
                var email = new Email("test@test.com");
                var phone = new Phone(469, 628, 2125);
                var dob = new DateOfBirth(new DateTime(1972, 10, 26));

                var cmd = new CreateMember.Command(userName, name, dob, email, phone);

                var member = await _mediator.Send(cmd).ConfigureAwait(false);

                var sut = await _memberContext.FindAsync<Member>(member.Id).ConfigureAwait(false);

                sut.Id.ShouldBe(member.Id);
                sut.UserName.ShouldBe(userName);
                sut.Name.ShouldBe(name);

                DateTime dt = sut.DateOfBirth;
                sut.DateOfBirth.ShouldBe(dt);

                sut.Phone.ShouldBe(phone);

                sut.Email.ShouldBe(email);

            }

            [Fact]
            public async Task Throws_When_Duplicate_UserName()
            {
                var ug = Guid.NewGuid().ToString().Substring(0, 12); //just to get by until database clean up is set up

                var userName = new UserName(ug);
                var name = new Name("First", "Last");
                var email = new Email("test@test.com");
                // var phone = new Phone(972, 390, 7316);
                var dob = new DateOfBirth(new DateTime(1972, 10, 26));

                var cmd = new CreateMember.Command(userName, name, dob, email, null);

                await _mediator.Send(cmd).ConfigureAwait(false);

                //now try to create user with same user name

               var ex = await Assert.ThrowsAsync<DomainValidationException>(() => _mediator.Send(cmd))
                            .ConfigureAwait(false);

                _output.WriteLine(ex.Message);

            }


        }
    }
}
