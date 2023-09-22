const navLinks = document.querySelectorAll(".navbar #opt");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.textContent.toLowerCase();
        const targetSection = document.getElementById(sectionId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Find the "See My Resume" button in the .intro section by its ID
    const resumeButtonIntro = document.getElementById("resumeButtonIntro");

    // Find the "See My Resume" button in the .res_dwnld section by its ID
    const resumeButtonRes = document.getElementById("resumeButtonRes");

    // Add click event listeners to both buttons
    resumeButtonIntro.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor tag to navigate
        event.preventDefault();
        
        // Get the target URL from the href attribute
        const resumeUrl = resumeButtonIntro.getAttribute("href");
        
        // Navigate to the target URL
        window.location.href = resumeUrl;
    });

    resumeButtonRes.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor tag to navigate
        event.preventDefault();
        
        // Get the target URL from the href attribute
        const resumeUrl = resumeButtonRes.getAttribute("href");
        
        // Navigate to the target URL
        window.location.href = resumeUrl;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Find the "Contact Me" button by its ID
    const contactMeButton = document.getElementById("contactMeButton");

    // Find the footer by its ID
    const footer = document.getElementById("myFooter");

    // Add a click event listener to the "Contact Me" button
    contactMeButton.addEventListener("click", function () {
        // Use smooth scrolling to scroll to the footer
        footer.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all links with href starting with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Add click event listeners to each link
    anchorLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute("href").substring(1); // Get the target ID without the #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element with smooth behavior
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.querySelector('.res_dwnld');
    resumeLink.addEventListener('click', function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        
        // Programmatically trigger the download or open the file
        const resumeFile = this.getAttribute('href');
        window.location.href = resumeFile;
    });
});