using System;
using System.Threading.Tasks;
using Shouldly;
using VIN.Members.Domain.Commands;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.ValueObjects;
using Xunit;
using Xunit.Abstractions;

namespace VIN.Members.Domain.IntegrationTests.Commands
{
    public class UpdateMemberTest
    {
        public class Handler : HandlerTest
        {
            public Handler(ITestOutputHelper output) : base(output)
            {
            }

            [Fact]
            public async Task Can_Update()
            {
                var member = await GetMember().ConfigureAwait(false);

                var ug = Guid.NewGuid().ToString().Substring(0, 12); //just to get by until database clean up is set up

                var userName = new UserName(ug);

                var name = new Name("UpdateFirst", "UpdateLast");
                var email = new Email("update@test.com");
                var phone = new Phone(972, 398, 8412);
                var dob = new DateOfBirth(new DateTime(1974, 10, 26));

                var command = new UpdateMember.Command(member.Id, userName, name, dob, email, phone);

                await _mediator.Send(command).ConfigureAwait(false);

                var sut = await _memberContext.FindAsync<Member>(member.Id).ConfigureAwait(false);

                sut.Id.ShouldBe(member.Id);
                sut.UserName.ShouldBe(userName);
                sut.Name.ShouldBe(name);

                DateTime dt = sut.DateOfBirth;
                sut.DateOfBirth.ShouldBe(dt);

                sut.Email.ShouldBe(email);
            }


            private async Task<Member> GetMember()
            {
                var ug = Guid.NewGuid().ToString().Substring(0, 12); //just to get by until database clean up is set up

                var userName = new UserName(ug);
                var name = new Name("First", "Last");
                var email = new Email("test@test.com");
                var phone = new Phone(972, 390, 7316);
                var dob = new DateOfBirth(new DateTime(1972, 10, 26));

                var cmd = new CreateMember.Command(userName, name, dob, email, phone);

                _memberContext.BeginTransaction();
                var member = await _mediator.Send(cmd);

                await _memberContext.CommitTransactionAsync();

                var toReturn = await _memberContext.FindAsync<Member>(member.Id).ConfigureAwait(false);

                return toReturn;
            }


        }




    }
}
