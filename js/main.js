
// =====================================
// 01. MOBILE NAVIGATION
// =====================================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


// =====================================
// 02. CLOSE MENU AFTER CLICK
// =====================================

if (navbar) {

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

        });

    });

}


// =====================================
// 03. SCROLL REVEAL ANIMATION
// =====================================

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// =====================================
// 04. BACK TO TOP BUTTON
// =====================================

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =====================================
// 05. CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const subject = document.getElementById("subject").value;

        const message = document.getElementById("message").value;


        const emailSubject = encodeURIComponent(subject);

        const emailMessage = encodeURIComponent(

            "Name: " + name +

            "\nEmail: " + email +

            "\n\nMessage: " + message

        );


        const mailLink =

            "mailto:hello@mariana-design.com" +

            "?subject=" + emailSubject +

            "&body=" + emailMessage;


        document.getElementById("formMessage").textContent =

            "Opening your email application...";


        window.location.href = mailLink;

    });

}


// =====================================
// 06. SECTION SCROLL REVEAL
// =====================================

const sections = document.querySelectorAll(".section");


const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("section-visible");

                sectionObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.12

    }

);


sections.forEach(function (section) {

    sectionObserver.observe(section);

});


// =====================================
// 07. PROCESS ITEM ANIMATION
// =====================================

const processItems = document.querySelectorAll(".process-item");


const processObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry, index) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                processObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.2

    }

);


processItems.forEach(function (item) {

    processObserver.observe(item);

});
