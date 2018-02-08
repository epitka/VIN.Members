using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.TestHost;
using Xunit;

namespace VIN.Members.API.IntegrationTests
{
    public class MembersScenarios : ScenarioBase, IDisposable
    {
        private TestServer _server;

        public MembersScenarios()
        {
            _server = CreateServer();
        }

        [Fact]
        public async Task Get_Members()
        {

            var response = await _server.CreateClient()
                .GetAsync(Get.Members);

            response.EnsureSuccessStatusCode();

        }

        //[Fact]
        //public async Task Get_Member()
        //{

        //    //TODO: get member by id
        //   // response.EnsureSuccessStatusCode();

        //}


        public void Dispose()
        {
            _server?.Dispose();
        }
    }
}