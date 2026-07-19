using Microsoft.AspNetCore.Mvc;

namespace PersonalWebsite.Controllers;

public class GamingController : Controller
{
    public IActionResult Index() => View();
}
