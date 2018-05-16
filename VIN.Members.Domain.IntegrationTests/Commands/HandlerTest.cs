using Autofac;
using MediatR;
using VIN.Members.Domain.Entities.EFConfiguration;
using Xunit.Abstractions;

namespace VIN.Members.Domain.IntegrationTests.Commands
{
    public abstract class HandlerTest
    {
        protected readonly ITestOutputHelper _output;

        protected Autofac.ILifetimeScope _container;

        protected IMediator _mediator;
        protected MemberContext _memberContext;

        protected HandlerTest(ITestOutputHelper output)
        {
            _output = output;
            _container = Bootstrap.Container();
            Bootstrap.Container();

            _memberContext = _container.Resolve<MemberContext>();

            _mediator = _container.Resolve<IMediator>();
        }

    }
}
