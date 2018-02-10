using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace VIN.WebApp.Controllers
{
    public class ConfigurationController : Controller
    {

        private readonly IHostingEnvironment _env;
        private readonly IOptionsSnapshot<AppSettings> _settings;

        public ConfigurationController(IHostingEnvironment env, IOptionsSnapshot<AppSettings> settings)
        {
            _env = env;
            _settings = settings;
        }
        public IActionResult Settings()
        {
            return Json(_settings.Value);
        }
    }
}

