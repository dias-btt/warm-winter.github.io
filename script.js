document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("click", () => {
            const answer = item.querySelector(".answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
            item.classList.toggle("active"); // Add or remove "active" class
        });
    });
});

document.addEventListener("click", function(event) {
    const checkbox = document.getElementById("menu-toggle");

    // Check if the click event occurred outside of the checkbox and its container
    if (event.target !== checkbox && !checkbox.contains(event.target)) {
        checkbox.checked = false; // Uncheck the checkbox
    }
});


document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
