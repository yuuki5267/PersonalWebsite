using Microsoft.AspNetCore.Mvc;

namespace PersonalWebsite.Controllers;

public class FaqController : Controller
{
    public IActionResult Index()
    {
        return View("IndexFaq");
    }
}
