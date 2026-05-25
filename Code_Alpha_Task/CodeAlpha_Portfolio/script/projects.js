const projectList = [
    {
        id: 1,
        number: "01",
        Title: "Fullstack Bihar Trip Travel Form",
        description:
            "I recently developed a dynamic and responsive Travel Form Web Application designed for tourists and visitors planing a trip to Bihar. This project focused on building a seamless bridge between front-end user interaction and back-end data management.",
        techStack: ["PHP", "MySQL"],
        image: "./assets/projects/project1.png",
        liveLink: "#",
        githubLink: "https://github.com/ravistar2004/Bihar-Visit-Trip.git",
    },
    {
        id: 2,
        number: "02",
        Title: "UI Clone (Mobile Login Page)",
        description:
            "Developed a fully responsive mobile login page inspired by the instagram user interface. Build using HTML CSS, ensuring a clean and modern design layout. Implement CSS Flexbox and Media Queries to ensure device compatibility ",
        techStack: ["HTML", "CSS"],
        image: "./assets/projects/project2.png",
        liveLink: "https://raviloginpage.netlify.app/",
        githubLink: "https://github.com/ravistar2004/login-page.git",
    },
];

const projects = document.querySelector(".projects");
let currentIndex = 0;

const renderProject = (index) => {
    if (!projects || !projectList.length) return;

    const projectContent = projectList[index];
    const previousDisabled = index === 0;
    const nextDisabled = index === projectList.length - 1;

    projects.innerHTML = `
        <div class="project-info">
            <h3>${projectContent.number}</h3>
            <h4>${projectContent.Title}</h4>
            <p>${projectContent.description}</p>
            <div class="tech-stack">
                ${projectContent.techStack
                    .map((tech) => `<span>${tech}</span>`)
                    .join(",")}
            </div>
            <hr/>
            <div class="links">
                <a href="${projectContent.liveLink}" aria-label="View project" target="_blank" rel="noopener noreferrer">
                    <i class="bx bx-link-external"></i>
                </a>
                <a href="${projectContent.githubLink}" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i class="bx bxl-github"></i>
                </a>
            </div>
        </div>
        <div class="carousel">
            <img src="${projectContent.image}" alt="${projectContent.Title}" loading="lazy">
            <div class="arrows">
                <a href="#" id="previous" class="${previousDisabled ? "disabled-btn" : ""}" aria-label="Previous">
                    <i class="bx bx-chevron-left"></i>
                </a>
                <a href="#" id="next" class="${nextDisabled ? "disabled-btn" : ""}" aria-label="Next">
                    <i class="bx bx-chevron-right"></i>
                </a>
            </div>
        </div>
    `;
};

projects?.addEventListener("click", (e) => {
    const previousBtn = e.target.closest("#previous");
    const nextBtn = e.target.closest("#next");

    if (previousBtn && currentIndex > 0) {
        e.preventDefault();
        currentIndex--;
        renderProject(currentIndex);
    }

    if (nextBtn && currentIndex < projectList.length - 1) {
        e.preventDefault();
        currentIndex++;
        renderProject(currentIndex);
    }
});

renderProject(currentIndex);
