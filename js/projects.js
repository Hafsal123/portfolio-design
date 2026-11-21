
// =====================================
// 01. PROJECT FILTER SYSTEM
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll("[data-category]");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedFilter = button.dataset.filter;


        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class to selected button

        button.classList.add("active");


        // Filter projects

        projectCards.forEach(function (card) {

            const categories = card.dataset.category.split(" ");

            if (

                selectedFilter === "all" ||

                categories.includes(selectedFilter)

            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


// =====================================
// 02. PROJECT DATABASE
// =====================================

const projectData = {

    velvet: {

        title: "VELVET STUDIO",

        category: "BRANDING & WEB DESIGN",

        description: "A luxury branding experience designed for modern fashion.",

        client: "Velvet Studio",

        role: "Branding & UI/UX Designer",

        challenge: "Creating a strong visual identity that communicates luxury, elegance and individuality.",

        solution: "A sophisticated digital experience using editorial typography, rich burgundy tones and minimal layouts.",

        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"

    },


    aurora: {

        title: "AURORA SHOP",

        category: "E-COMMERCE DESIGN",

        description: "A modern online shopping experience for a fashion brand.",

        client: "Aurora Shop",

        role: "UI/UX Designer",

        challenge: "Making the shopping experience simple, attractive and easy to navigate.",

        solution: "A clean e-commerce interface with product-focused layouts and intuitive navigation.",

        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200"

    },


    mindspace: {

        title: "MINDSPACE",

        category: "LANDING PAGE DESIGN",

        description: "A minimal landing page designed for a modern interior brand.",

        client: "Mindspace",

        role: "Web Designer",

        challenge: "Presenting a brand's creative vision through a memorable landing page.",

        solution: "A visually balanced design combining elegant typography, spacious layouts and strong imagery.",

        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"

    },


    atelier: {

        title: "ATELIER",

        category: "BRANDING",

        description: "A contemporary visual identity for a creative fashion studio.",

        client: "Atelier",

        role: "Brand Designer",

        challenge: "Building a recognizable visual identity for a new creative brand.",

        solution: "A refined branding system with typography, colors and consistent visual elements.",

        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"

    },


    studio: {

        title: "STUDIO SPACE",

        category: "UI/UX DESIGN",

        description: "A modern workspace website concept.",

        client: "Studio Space",

        role: "UI/UX Designer",

        challenge: "Creating an accessible and easy-to-use digital workspace experience.",

        solution: "A structured interface with clear navigation and responsive layouts.",

        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"

    },


    flora: {

        title: "FLORA",

        category: "WEB DESIGN",

        description: "A fresh and elegant website concept for a floral brand.",

        client: "Flora",

        role: "Web Designer",

        challenge: "Creating a website that reflects the natural beauty of the brand.",

        solution: "A soft visual direction with beautiful imagery and minimal typography.",

        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200"

    }

};


// =====================================
// 03. LOAD PROJECT DETAILS
// =====================================

const projectTitle = document.getElementById("projectTitle");

const projectCategory = document.getElementById("projectCategory");

const projectDescription = document.getElementById("projectDescription");

const projectClient = document.getElementById("projectClient");

const projectRole = document.getElementById("projectRole");

const projectChallenge = document.getElementById("projectChallenge");

const projectSolution = document.getElementById("projectSolution");

const projectImage = document.getElementById("projectImage");


if (projectTitle) {

    const urlParameters = new URLSearchParams(window.location.search);

    const projectId = urlParameters.get("id");

    const selectedProject = projectData[projectId];


    if (selectedProject) {

        projectTitle.textContent = selectedProject.title;

        projectCategory.textContent = selectedProject.category;

        projectDescription.textContent = selectedProject.description;

        projectClient.textContent = selectedProject.client;

        projectRole.textContent = selectedProject.role;

        projectChallenge.textContent = selectedProject.challenge;

        projectSolution.textContent = selectedProject.solution;

        projectImage.src = selectedProject.image;

        document.title = selectedProject.title + " | Mariana";

    } else {

        projectTitle.textContent = "PROJECT NOT FOUND";

        projectDescription.textContent =

            "The requested project does not exist.";

    }

}
