const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', ()=>{
    if(aboutTabs){
        aboutTabs[0].click();
    }
});


aboutTabs.forEach((tab)=>{
    tab.addEventListener("click", (e)=>{
        e.preventDefault();
        
        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c)=>{
            c.classList.remove('active');
        });
        
        const activeTab = tab.dataset.section;

        document.getElementById(tab.dataset.section).classList.add("active");

        if (activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

            const experienceList = [{
                id:1,
                date: 2025,
                project: "Project Experience",
                details: "Bihar Traval Trip Form",
                Points: "Dynamic Data Handling , Relational Database Design , Data validation & Security , User-Centric UI"

            }];

            const experienceContent = experienceList.map((ele)=>{
                return `
                    <div class="experience-box" key=${ele?.id} >
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.details}</h3>
                        <div class="detail-experience">
                            <span></span>
                            <p>${ele.project}</p>
                        </div>
                        <p>${ele.Points}</p>
                    </div>
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }

        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: 2020,
                    degree: "10th",
                    institution: "ST. SEVERIN'S HIGH SCHOOL",
                    detials: "Completed",
                },
                {
                    id: 2,
                    date: "2020-2022",
                    degree: "INTERMEDIATE",
                    institution: "S.M.D COLLEGE PUNPUN",
                    detials: "Completed",
                },
                {
                    id: 3,
                    date: "2022-2023",
                    degree: "ITI",
                    institution: "GOVERNMENT ITI DANAPUR BIHTA",
                    detials: "Completed",
                },
                {
                    id: 4,
                    date: "2023-2026",
                    degree: "BCA",
                    institution: "PATLIPUTRA UNIVERSITY",
                    detials: "Exam Completed",
                },
            ];

            const educationContent = educationList
                .map(
                    (ele) => `
                <div class="experience-box" data-id="${ele.id}">
                    <h3>${ele.date}</h3>
                    <h4>${ele.degree}</h4>
                    <div class="detail-experience">
                        <span></span>
                        <p>${ele.institution}</p>
                    </div>
                    <p>${ele.detials}</p>
                </div>
            `
                )
                .join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector('.skill-list');
            const skillList = [
            {
                id: 1,
                name: "HTML - Hyper Text Markup Language",
                icon: "assets/skills/html.png",
            },
            {
                id: 2,
                name: "CSS - Cascading Style Sheets",
                icon: "assets/skills/css.png",

            },
             {
                id: 3,
                name: "JS - JavaScript",
                icon: "assets/skills/js.png",

            },
             {
                id: 4,
                name: "React ",
                icon: "assets/skills/react.png",

            },
             {
                id: 5,
                name: "MYSQL - My Structured Query Language",
                icon: "assets/skills/mysql.png",

            }
            ];


            const skillContent = skillList.map((ele)=>{
                return `
                <div class="skill-box" key="${ele?.id}" >
                        <img src="${ele?.icon} " alt=${ele?.name} title="${ele?.name}" loading="lazy" />
                    </div>
                `;
            }).join("");

            if (skills) {   
                skills.innerHTML = skillContent;
                
            }

        }else if (activeTab === "about-me") {
            const myInfo = document.querySelector('.my-info');
            const infoList = [
                {
                    id:1,
                    key: "Name : ",
                    value: "Ravikant"
                },
                {
                    id:2,
                    key: "Country : ",
                    value: "India"
                },
                {
                    id:1,
                    key: "Industry : ",
                    value: "Software & IT"
                },
                {
                    id:1,
                    key: "Experience : ",
                    value: "Fresher"
                },
                {
                    id:1,
                    key: "Address : ",
                    value: "Kadam Kuan patna, Bihar"
                },
            ];
            const infoContent = infoList.map((ele)=>{
                return `
                    <div class="info-box key= ${ele?.id}">
                        <span> ${ele.key}</span>
                        <span> ${ele.value}</span>
                    </div>
                `;
            }).join("");

            if(myInfo){
                myInfo.innerHTML = infoContent;
            }
            
        }
    });
});



const downloadCv = document.querySelector('.btn');  

if (downloadCv) {
    downloadCv.addEventListener('click', () =>{
    window.open('Ravikant-Cv/ravikantcv.pdf','_blank');

    });
}





// .addEventListener('click',()=>{
// });





