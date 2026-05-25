const toggle = document.getElementById("menu-toggle");
let scrollPosition = 0;

const lockScroll = () => {
    scrollPosition = window.scrollY;
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
    document.body.style.top = `-${scrollPosition}px`;
};

const unlockScroll = () => {
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
};

if (toggle) {
    toggle.addEventListener("change", () => {
        if (toggle.checked) lockScroll();
        else unlockScroll();
    });
}

//words in array form
 
const words =[
    "Youtuber",
    "Creator",
    "Developer",
    "Sketch Artist",
    "Fresher"
   
];

//access typingTest using getELementById

const typingText = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let newWordDelay = 1000;

const type = () => {
    if (!typingText) return;

    const currentWord = words[wordIndex];
    if(!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 700);
        }
        else {
            setTimeout(type, typingDelay);
        }
    }
    else { 
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if(charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type,600);
        }
        else {
            setTimeout(type, erasingDelay);
        }
    }
}


const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");
const menuToggle = document.getElementById("menu-toggle");


const showTab = (tabName) => {
    const target = tabName || "home";

    navlinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.tab === target);
    });

    tabs.forEach((tab) => {
        tab.classList.toggle("active", tab.id === target);
    });

    if (menuToggle) menuToggle.checked = false;
    unlockScroll();

    

    if (tabName === "services") {
        renderServices();
    }
};

/** Icon name → Boxicons class (auto-detect) */
const ICON_MAP = {
    code: "bx-code-alt",
    database: "bx-data",
    "video-camera": "bx-video",
    "paint-brush": "bx-palette",
    browser: "bx-globe",
    laptop: "bx-laptop",
    "arrow-down": "bx-down-arrow-alt",
    "arrow-down-right": "bx-up-arrow-alt",
};

const toBoxIcon = (icon) => {
    const name = String(icon || "")
        .trim()
        .toLowerCase()
        .replace(/^(bx|ph)[\s-]+/i, "")
        .replace(/\s+/g, "-");

    const iconClass = ICON_MAP[name] || `bx-${name}`;
    return `bx ${iconClass}`;
};

const serviceList = [
    {
        id: 1,
        icon: "code",
        text: "Website Development",
        para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React and Tailwind.",
    },
    {
        id: 2,
        icon: "database",
        text: "Database Administration",
        para: "Designing, structuring, and optimizing relational databases using SQL. Capable of handling complex queries and managing data flow efficiently.",
    },
    {
        id: 3,
        icon: "video-camera",
        text: "Digital Content Creation ",
        para: "Creating, editing, and optimizing high-retention video content and vlogs. Experienced in digital growth tools and audio-visual post-production.",
    },
    {
        id: 4,
        icon: "paint-brush",
        text: "Sketching & Visual Arts",
        para: "Creating detailed sketches, portraits, and custom illustrations. Bringing artistic concepts to life with precise tool handling and creative vision.",
    },
    {
        id: 5,
        icon: "browser",
        text: "UI/UX Design",
        para: "Crafting interactive and high-performance user interfaces using React. Focusing on reusable components and pixel-perfect responsive layouts",
    },
    {
        id: 6,
        icon: "laptop",
        text: "Software Development",
        para: "Developing core software logic and solving complex problems using C++. Strong foundation on Object-Oriented Programming(OOPs)",
    },
];

let servicesRendered = false;

const renderServices = () => {
    if (servicesRendered) return;

    const serviceContainers = document.querySelectorAll(".service-list");
    if (!serviceContainers.length) return;

    const html = serviceList
        .map(
            (item) => `
        <div class="box" data-id="${item.id}">
            <div class="head-icons">
                <i class="${toBoxIcon(item.icon)}"></i>
                <span>
                    <i class="${toBoxIcon("arrow-down")}"></i>
                </span>
            </div>
            <h3>${item.text}</h3>
            <span class="spacer"></span>
            <p>${item.para}</p>
        </div>
    `
        )
        .join("");

    serviceContainers.forEach((el) => {
        el.innerHTML = html;
    });

    servicesRendered = true;
};

navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        showTab(link.dataset.tab);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    showTab("home");

    if (words?.length && typingText) type();
});


















