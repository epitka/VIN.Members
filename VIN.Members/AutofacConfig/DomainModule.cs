using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using VIN.Members.Domain.Entities.EFConfiguration;

namespace VIN.Members.Domain.AutofacConfig
{
    public class DomainModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            // finally register our custom code (individually, or via assembly scanning)
            // - requests & handlers as transient, i.e. InstancePerDependency()
            // - pre/post-processors as scoped/per-request, i.e. InstancePerLifetimeScope()
            // - behaviors as transient, i.e. InstancePerDependency()
            builder.RegisterAssemblyTypes(typeof(MemberContext).Assembly).AsImplementedInterfaces(); // via assembly scan

            builder.RegisterType<MemberContext>().AsSelf().InstancePerLifetimeScope();          // or individually
        }
    }
}

