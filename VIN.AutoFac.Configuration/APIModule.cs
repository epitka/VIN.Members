using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;
using VIN.Members.Domain.Entities.EFConfiguration;

namespace VIN.Members.API.AutofacConfig
{
    public class ApplicationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            // finally register our custom code (individually, or via assembly scanning)
            // - requests & handlers as transient, i.e. InstancePerDependency()
            // - pre/post-processors as scoped/per-request, i.e. InstancePerLifetimeScope()
            // - behaviors as transient, i.e. InstancePerDependency()
            builder.RegisterAssemblyTypes(typeof(Startup).Assembly)
                        .AsImplementedInterfaces()
                        .InstancePerLifetimeScope(); // via assembly scan

           // builder.RegisterType<MemberContext>().AsSelf().InstancePerLifetimeScope();          // or individually
        }
    }
}
