using Microsoft.AspNetCore.Mvc;

namespace PersonalWebsite.Controllers;

public class BlogController : Controller
{
    public IActionResult Index() => View();
}
