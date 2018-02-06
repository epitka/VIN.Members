using System;
using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using VIN.Members.Domain.Commands;
using VIN.Members.Domain.Entities;
using VIN.Members.Domain.ValueObjects;
using Xunit;
using Xunit.Abstractions;

namespace VIN.Members.Domain.IntegrationTests.Commands
{
    public class DeleteMemberTest
    {
        public class Handler : HandlerTest
        {
            public Handler(ITestOutputHelper output) : base(output)
            {
            }


            [Fact]
            public async Task Can_Delete()
            {
                var ug = Guid.NewGuid().ToString().Substring(0, 12); //just to get by until database clean up is set up

                var userName = new UserName(ug);
                var name = new Name("First", "Last");
                var email = new Email("test@test.com");
                var phone = new Phone(469, 628, 2125);
                var dob = new DateOfBirth(new DateTime(1972, 10, 26));

                var cmd = new CreateMember.Command(userName, name, dob, email, phone);

                var member = await _mediator.Send(cmd).ConfigureAwait(false);

                member = await _memberContext.FindAsync<Member>(member.Id).ConfigureAwait(false);

                var deleteCmd = new DeleteMember.Command(member.Id);

                await _mediator.Send(deleteCmd).ConfigureAwait(false);

                //assert it is still in db
               var sut1 = await _memberContext.FindAsync<Member>(member.Id).ConfigureAwait(false);

                sut1.ShouldNotBe(null);

                //assert it is not found, query filter applied
                var sut = _memberContext.Members.FirstOrDefault(x => x.Id == member.Id);

                sut.ShouldBe(null);


            }
        }
    }
}
