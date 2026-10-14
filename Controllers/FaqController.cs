using Microsoft.AspNetCore.Mvc;
using PersonalWebsite.Models.Faq;

namespace PersonalWebsite.Controllers;

public class FaqController : Controller
{
    public IActionResult Index()
    {
        return View("IndexFaq", FaqData.All);
    }
}
