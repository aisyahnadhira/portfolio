function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var buttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.getElementsByClassName("tab-button")[0].click();

document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('.internal');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('This application is used internally');
        });
    });
});

function openTab(tabName, element) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    
    document.getElementById(tabName).style.display = 'block';

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    element.classList.add('active');
}

// skill
const skillsData = [
    { name: 'JavaScript', img: 'logo/javascript.png' },
    { name: 'PHP', img: 'logo/php.png' },
    { name: 'TypeScript', img: 'logo/typescript.png' },
    { name: 'Dart', img: 'logo/dart.png' },
    { name: 'Angular', img: 'logo/angular.png' },
    { name: 'Laravel', img: 'logo/laravel.png' },
    { name: 'ReactJS', img: 'logo/reactjs.png' },
    { name: 'Next.js', img: 'logo/nextjs.png' },
    { name: 'Nuxt.js', img: 'logo/nuxtjs.png' },
    { name: 'Flutter', img: 'logo/flutter.png' },
    { name: 'MySQL', img: 'logo/mysql.png' },
    { name: 'Python', img: 'logo/python.png' },
    { name: 'WordPress', img: 'logo/wordpress.png' },
    { name: 'ClickUp', img: 'logo/clickup.png' },
    { name: 'Figma', img: 'logo/figma.png' },
    { name: 'Canva', img: 'logo/canva.png' },
    { name: 'Jira', img: 'logo/jira.png' },
    { name: 'Trello', img: 'logo/trello.png' },
    { name: 'Retool', img: 'logo/retool.png' },
    { name: 'Firebase', img: 'logo/firebase.png' },
    { name: 'Stripe', img: 'logo/stripe.png' }
];

const skillsGrid = document.getElementById('skills-grid');

skillsData.forEach(skill => {
    const card = document.createElement('div');
    card.classList.add('skill-card');

    const img = document.createElement('img');
    img.src = skill.img;
    img.alt = `${skill.name} Logo`;

    const p = document.createElement('p');
    p.textContent = skill.name;

    card.appendChild(img);
    card.appendChild(p);
    skillsGrid.appendChild(card);
});

// experience
const experiences = [
    {
        date: 'May 2024 - Present',
        company: 'Mereka - Kuala Lumpur, Malaysia',
        position: 'Front End Developer',
        tasks: [
          "Actively joined daily stand-ups and sprint planning sessions to share progress, discuss blockers, and align priorities with the dev team and Project Manager.",
          "Often handled debugging based on issues reported by QA and worked closely with the Project Manager to make sure problems were fixed quickly and effectively.",
          "Turned Figma designs into working UI with accurate implementation, keeping the look and feel consistent across the project.",
          "Built around 80% of the UI for the Job feature on Mereka.io using Angular, covering pages like proposal submission to contract, and made sure everything was responsive.",
          "Migrated several pages (Hub & Expert) from client-side rendering to server-side rendering to improve speed and performance.",
          "Cleaned up and improved the finance page, syncing it properly with Stripe data to boost accuracy and user experience.",
          "Made UI improvements using shared components, custom dialogs, and Lottie animations for a more polished interface.",
          "Built custom Retool pages to manage data like Expert, Hub, Expertise, Experience, and Job, complete with dashboards and filtered views.",
          "Created API functions using server-side logic to fetch and display data in Retool efficiently via REST API.",
          "Double-checked Retool data against actual Stripe transactions to ensure everything matched and was accurate.",
          "Always completed tasks on time in ClickUp, staying within sprint timelines and point allocations.",
          "Took initiative to fix UI issues across different sections, including urgent hotfixes, and made sure they were resolved the same day.",
          "Used Git and GitHub for version control and collaborative development throughout the project lifecycle.",
        "Utilized Cursor AI to assist in writing, understanding, and optimizing code, increasing development efficiency and accuracy."
        ]
    },
    {
        date: 'Mar 2024 - Dec 2024',
        company: 'MSIB Alumni Space - Indonesia',
        position: 'Staf Mentoring Mahasiswa',
        tasks: [
            "Coordinated MSIB sessions, offering guidance on CV improvement, interview preparation, and program insights.",
            "Managed a full 7-day schedule as an operator for MSIB sharing sessions, ensuring smooth execution.",
            "As a committee member in private mentoring, worked with a team of 3, where one mentee secured a position at a multinational company.",
            "Mentored students through the MSIB process by reviewing CVs, improving applications, and conducting mock interviews.",
            "Created Instagram content every Friday, attracting over 1000 likes per post, sharing MSIB tips in collaboration with the Director of Mentoring."
        ]
    },
    {
        date: 'Feb 2023 - Jun 2023',
        company: 'Studi Independent Kampus Merdeka X Ruangguru - DKI Jakarta',
        position: 'Frontend Engineering',
        tasks: [
            'Learn and develop general competencies in software development techniques, with a focus on front-end development.',
            'Increase understanding of software engineering and apply it in available exercises.',
            'Learn how to use Git to manage project versions and deploy them in task submissions.',
            'Deepen knowledge and skills in the JavaScript programming language.',
            'Use HTML, CSS, and DOM to design and build responsive and attractive user interfaces.',
            'Complete exercises and final projects that involve using React technology.',
            'Create a student portal website using React and ensure responsiveness for every device.',
            'Achieve an A grade in every aspect of the assessment in each chapter of the material studied.'
        ]
    },
    {
        date: 'Feb 2023 - Jun 2023',
        company: 'Studi Independent Kampus Merdeka X Ruangguru - DKI Jakarta',
        position: 'Asisten Mentor',
        tasks: [
            'Assisting mentees in solving problems and overcoming difficulties that arise during the learning process.',
            'Providing regular mentoring sessions, including discussions and reviews of exercises, assignments, and other tasks.',
            'Building a good relationship with mentees and providing moral support to help them achieve their learning goals.',
            'Reporting on mentoring activities carried out through the Ruangguru platform.'
        ]
    },
    {
        date: 'Dec 2022 - Mar 2023',
        company: 'PT. Cilsy Fiolution Indonesia - Bandung, West Java',
        position: 'Wordpress Developer',
        tasks: [
            'Designed and built an LMS (Learning Management System) website using the Laravel platform and MySQL database, based on my own designs using Figma.',
            'Sliced designs from Figma and implemented them into the website.',
            'Developed an online learning system emphasizing user experience and student progress tracking.',
            'Demonstrated proficiency in web programming using the PHP programming language and MySQL database.',
            'Collaborated with project management to discuss tasks using a Kanban board.',
            'Participated in weekly sprints to manage project tasks and milestones.'
        ]
    },
    {
        date: 'May 2022 - Nov 2022',
        company: 'cmlabs.co - Malang, East Java',
        position: 'Wordpress Developer',
        tasks: [
            'Created 10 website layouts using Wordpress, based on designs provided by the design team.',
            'Sliced designs and implemented changes in appearance on each website page as needed.',
            'Managed the migration of 12 websites to a new hosting service and optimized website performance to achieve a score of 100 on every device.',
            'Demonstrated expertise in website development using Wordpress, proficiency in design tools, and knowledge of the latest web technologies.',
            'Performed keyword adjustments for SEO requirements.',
            'Participated in weekly sprints to manage project tasks and milestones.'
        ]
    },
    {
        date: 'May 2022 - Jul 2022',
        company: 'Inventor Class - Bandung, West Java',
        position: 'Website Programmer',
        tasks: [
            'Designed and built an LMS (Learning Management System) website using the Laravel platform and MySQL database, based on my own designs using Figma.',
            'Sliced designs from Figma and implemented them into the website.',
            'Developed an online learning system emphasizing user experience and student progress tracking.',
            'Demonstrated proficiency in web programming using the PHP programming language and MySQL database.',
            'Collaborated with project management to discuss tasks using a Kanban board.',
            'Participated in weekly sprints to manage project tasks and milestones.'
        ]
    },
    {
        date: 'Sep 2021 - Jul 2022',
        company: 'Industry Learning Center - Bandung, West Java',
        position: 'Website Developer',
        tasks: [
            'Developed websites using the Wordpress platform with a focus on responsive design and user-friendly interfaces based on my own designs using Canva.',
            'Maintained the latest content on the blog by publishing two articles every week.',
            'Improved skills in website development and CMS usage.'
        ]
    }
];



const experienceContainer = document.getElementById('experience-container');

experiences.forEach(experience => {
    const experienceElement = document.createElement('div');
    experienceElement.classList.add('box');
    
    experienceElement.innerHTML = `
        <i class="fas fa-briefcase"></i>
        <span>${experience.date}</span>
        <h3>${experience.company}</h3>
        <h4>${experience.position}</h4>
        <ul>
            ${experience.tasks.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `;
    
    experienceContainer.appendChild(experienceElement);
});

// Fungsi copy to clipboard untuk kontak
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
        showCopyNotification();
    });
}

function showCopyNotification() {
    let notif = document.createElement('div');
    notif.className = 'copy-notification';
    notif.innerText = 'Copied!';
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 1200);
}

// Reveal Animation (Scroll Effect)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 60) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth Scroll for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lazy Load Images
const lazyImages = document.querySelectorAll('img');
lazyImages.forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// Aksesibilitas: Keyboard navigation untuk tab
const allTabButtons = document.querySelectorAll('.tab-button');
allTabButtons.forEach((btn, idx) => {
    btn.setAttribute('tabindex', '0');
    btn.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            allTabButtons[(idx + 1) % allTabButtons.length].focus();
        } else if (e.key === 'ArrowLeft') {
            allTabButtons[(idx - 1 + allTabButtons.length) % allTabButtons.length].focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            btn.click();
        }
    });
});