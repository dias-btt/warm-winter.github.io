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


document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
