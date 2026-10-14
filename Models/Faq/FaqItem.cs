namespace PersonalWebsite.Models.Faq;

public class FaqItem
{
    public required string Question { get; init; }

    // Raw HTML, rendered with Html.Raw. Only put trusted, developer-written content here.
    public required string AnswerHtml { get; init; }
}
