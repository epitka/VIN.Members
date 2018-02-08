using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.CompilerServices;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;

namespace VIN.Members.API.IntegrationTests
{
    public class ScenarioBase
    {

        public TestServer CreateServer()
        {
            var webHostBuilder = WebHost.CreateDefaultBuilder();
            webHostBuilder.UseContentRoot(Directory.GetCurrentDirectory());

            webHostBuilder.UseStartup<VIN.Members.API.Startup>();

            webHostBuilder.ConfigureAppConfiguration((builderContext, config) =>
            {
                config.AddJsonFile("settings.json");
            });

            TestServer toReturn = null;
            try
            {
                toReturn = new TestServer(webHostBuilder);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return toReturn;
        }

        public static class Get
        {
            public static string Members = "api/members";

            public static string Member(int id)
            {
                return $"api/members/{id}";
            }
        }

        public static class Put
        {
            public static string CreateMember = "api/members";
            public static string DeleteMembers = "members/";
        }
    }
}
