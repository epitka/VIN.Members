using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using VIN.Members.Domain.AutofacConfig;
using VIN.Members.Domain.Entities.EFConfiguration;

namespace VIN.Members.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                    .AddControllersAsServices();//Injecting Controllers themselves thru DI
                            //For further info see: http://docs.autofac.org/en/latest/integration/aspnetcore.html#controllers-as-services

            AddSwaggerGen(services);

            var connection = Configuration["ConnectionString"];

           // services.AddDbContext<MemberContext>(options => options.UseSqlServer(connection),ServiceLifetime.Scoped);

            services.AddEntityFrameworkSqlServer()
                .AddDbContext<MemberContext>(options =>
                    {
                        options.UseSqlServer(Configuration["ConnectionString"]
                            //,sqlServerOptionsAction: sqlOptions =>
                            //{
                            //    sqlOptions.MigrationsAssembly(typeof(Startup).GetTypeInfo().Assembly.GetName().Name);
                            //    sqlOptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                            //}
                            );
                    },
                    ServiceLifetime.Scoped  //Showing explicitly that the DbContext is shared across the HTTP request scope (graph of objects started in the HTTP request)
                );


            var container = new ContainerBuilder();
            container.Populate(services);


            container.RegisterModule(new MediatorModule());
            container.RegisterAssemblyModules(typeof(VIN.Members.Domain.Entities.Member).Assembly,
                                              typeof(Startup).Assembly);


            return new AutofacServiceProvider(container.Build());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
        }

        private void AddSwaggerGen(IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.DescribeAllEnumsAsStrings();
                options.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                {
                    Title = "VIN Members HTTP API",
                    Version = "v1",
                    Description = "Members Service HTTP API",
                    TermsOfService = "Terms Of Service"
                });
            });
        }
    }
}
