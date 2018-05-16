using System.Collections.Concurrent;
using Autofac;
using Microsoft.EntityFrameworkCore;
using VIN.Members.Domain.Entities.EFConfiguration;

namespace VIN.Members.Domain.IntegrationTests
{
    public class Bootstrap
    {
        private static ConcurrentDictionary<string,IContainer> dict = new ConcurrentDictionary<string, IContainer>();

        private static IContainer Configure()
        {
            var builder = new Autofac.ContainerBuilder();

            var assembly = typeof(Entities.Member).Assembly;
            builder.RegisterAssemblyModules(assembly);
            
            var connection = @"Server=tcp:127.0.0.1,1401;Database=VIN;User Id=sa;Password=App8456$";
            var optionsBuilder = new DbContextOptionsBuilder<MemberContext>().UseSqlServer(connection);
            
            builder.RegisterInstance(optionsBuilder.Options).As<DbContextOptions<MemberContext>>();

            return builder.Build();
        }

        public static ILifetimeScope Container()
        {
            var container = dict.GetOrAdd("container", Configure());

            return container.BeginLifetimeScope();
        }
    }

}
