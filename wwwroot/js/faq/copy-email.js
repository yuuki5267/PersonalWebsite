(function () {
    var button = document.querySelector("[data-copy-text]");
    if (!button) {
        return;
    }

    var label = button.querySelector(".copy-label");
    var originalLabel = label.textContent;
    var resetTimer;

    function showFeedback(text, copied) {
        label.textContent = text;
        button.classList.toggle("copied", copied);
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
            label.textContent = originalLabel;
            button.classList.remove("copied");
        }, 2000);
    }

    // Fallback for non-secure contexts (e.g. http on a LAN address) where navigator.clipboard is unavailable.
    function legacyCopy(text) {
        var temp = document.createElement("textarea");
        temp.value = text;
        temp.setAttribute("readonly", "");
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        var ok = false;
        try {
            ok = document.execCommand("copy");
        } catch (e) {
            ok = false;
        }
        document.body.removeChild(temp);
        return ok;
    }

    button.addEventListener("click", function () {
        var text = button.getAttribute("data-copy-text");

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(
                function () { showFeedback("Copied!", true); },
                function () {
                    var ok = legacyCopy(text);
                    showFeedback(ok ? "Copied!" : "Copy failed", ok);
                }
            );
        } else {
            var ok = legacyCopy(text);
            showFeedback(ok ? "Copied!" : "Copy failed", ok);
        }
    });
})();
