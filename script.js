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
        date: 'May 2024 - Jul 2025',
        company: 'Mereka - Kuala Lumpur, Malaysia',
        position: 'Front End Developer',
        tasks: [
            'Developed <strong>80% of the Job Feature UI</strong> on Mereka.io using Angular, covering end-to-end flow from job posting to contract tracking.',
            'Optimized Retool dashboards (Expert, Hub, Job, etc.) → <strong>reduced load time from 3 minutes to 10 seconds</strong> by implementing server-side pagination.',
            'Migrated Hub & Expert pages to <strong>server-side rendering</strong>, boosting performance and user experience.',
            'Integrated <strong>Stripe payments</strong> into contract workflows (job poster ↔ job seeker), ensuring secure salary transactions.',
            'Improved finance page syncing with <strong>Stripe data</strong>, raising data accuracy and reliability.',
            'Implemented UI enhancements with <strong>shared components</strong>, custom dialogs, and <strong>Lottie animations</strong> for a polished experience.',
            'Collaborated in <strong>Agile sprints</strong>, consistently delivering tasks on time in ClickUp, with <strong>multiple hotfixes delivered same-day</strong> (recognized by peers for reliability).'
        ]
    },
    {
        date: 'Mar 2024 - Dec 2024',
        company: 'MSIB Alumni Space - Jakarta, Indonesia',
        position: 'Staf Mentoring Mahasiswa',
        tasks: [
            'Coordinated <strong>7-day MSIB sharing sessions</strong>, ensuring smooth execution and participant engagement.',
            'Mentored students on CVs, applications, and mock interviews → <strong>one mentee secured a job at a multinational company</strong>.',
            'Produced weekly Instagram content with MSIB tips, <strong>achieving 1,000+ likes per post</strong> in collaboration with the Director of Mentoring.',
            'Served as a committee member for private mentoring, collaborating in a <strong>team of 3</strong> to deliver tailored guidance.'
        ]
    },
    {
        date: 'Aug 2023 - Dec 2023',
        company: 'BPJS Ketenagakerjaan - Jakarta, Indonesia',
        position: 'Junior Programmer',
        tasks: [
            'Developed <strong>Smile Mobile</strong> (employee app) using Flutter & Dart, implementing encode/decode processes and ensuring responsive UI.',
            'Collaborated on <strong>Smile Mobile & JKN Mobile testing</strong>, improving app functionality and performance before release.',
            'Built a <strong>MediaWiki-based documentation system</strong> for all BPJS apps, working in a 3-person dev team (2 developers, 1 designer).',
            'Conducted <strong>pre-testing & troubleshooting</strong> to prepare internal apps for penetration testing.',
            'Applied <strong>clean code principles</strong> in Flutter, ensuring maintainable and efficient code.',
            'Reported progress <strong>biweekly to PM</strong> and assisted with finance & tax-related data management.'
        ]
    },
    {
        date: 'Feb 2023 - Aug 2023',
        company: 'PT Berani Tumbuh - Malang, Indonesia',
        position: 'Wordpress Developer',
        tasks: [
            'Designed and implemented <strong>2 new website layouts</strong>, improving usability and design consistency.',
            'Enhanced <strong>SEO performance</strong>, increasing website discoverability on search engines.',
            'Delivered technical support & troubleshooting for layout and SEO issues, ensuring <strong>smooth website operations</strong>.'
        ]
    },
    {
        date: 'Feb 2023 - Jun 2023',
        company: 'Studi Independent Kampus Merdeka X Ruangguru - Jakarta, Indonesia',
        position: 'Asisten Mentor',
        tasks: [
            'Mentored <strong>5 mentees</strong> through coding challenges, assignments, and projects.',
            'Delivered <strong>weekly mentoring sessions</strong>, providing technical guidance and feedback.',
            'Built strong mentor–mentee relationships, offering moral support to improve confidence and learning outcomes.',
            'Reported mentee progress and mentoring activities consistently via the <strong>Ruangguru platform</strong>.'
        ]
    },
    {
        date: 'Feb 2023 - Jun 2023',
        company: 'Studi Independent Kampus Merdeka X Ruangguru - Jakarta, Indonesia',
        position: 'Frontend Engineering',
        tasks: [
            'Completed <strong>intensive training in frontend development</strong> (HTML, CSS, DOM, JavaScript, Git, React).',
            'Built a <strong>responsive Student Portal website</strong> using React, accessible on all devices.',
            'Achieved <strong>Grade A in every assessment</strong>, demonstrating strong mastery of frontend engineering concepts.'
        ]
    },
    {
        date: 'Dec 2022 - Mar 2023',
        company: 'PT. Cilsy Fiolution Indonesia - Bandung, Indonesia',
        position: 'Wordpress Developer',
        tasks: [
            'Designed and developed <strong>4 website layouts</strong> with user-friendly interfaces.',
            'Optimized site performance, achieving a <strong>100/100 score on Google PageSpeed</strong> across all devices.',
            'Delivered tailored WordPress solutions to meet <strong>client business goals</strong>.'
        ]
    },
    {
        date: 'May 2022 - Nov 2022',
        company: 'cmlabs.co - Malang, Indonesia',
        position: 'Wordpress Developer',
        tasks: [
            'Created <strong>10 website layouts</strong> in WordPress, collaborating with the design team for pixel-perfect slicing.',
            'Migrated <strong>12 websites</strong> to a new hosting service and optimized performance to <strong>100/100 PageSpeed score</strong> across devices.',
            'Implemented <strong>SEO keyword adjustments</strong>, improving site visibility and discoverability.',
            'Contributed in <strong>Agile sprints</strong>, collaborating with cross-functional teams to deliver high-quality websites.'
        ]
    },
    {
        date: 'May 2022 - Jul 2022',
        company: 'Inventor Class - Bandung, Indonesia',
        position: 'Website Programmer',
        tasks: [
            'Designed and developed an <strong>LMS (Learning Management System)</strong> using Laravel, PHP, and MySQL, based on self-made Figma designs.',
            'Implemented slicing from Figma to <strong>functional web pages with responsive UI</strong>.',
            'Built features to <strong>track student progress</strong> and ensure a smooth learning experience.',
            'Collaborated in <strong>Kanban-based project management</strong> and participated in weekly sprints.'
        ]
    },
    {
        date: 'Sep 2021 - Jul 2022',
        company: 'Industry Learning Center - Bandung, Indonesia',
        position: 'Website Developer',
        tasks: [
            'Developed <strong>multiple websites</strong> using WordPress, focusing on responsive design and user-friendly interfaces.',
            'Designed layouts independently with <strong>Canva</strong>, turning them into functional WordPress websites.',
            'Maintained blogs by <strong>publishing 2 articles per week</strong>, ensuring fresh and relevant content.',
            'Strengthened expertise in <strong>CMS management and web development</strong>.'
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

// Jobs Feature UI slider
(function initJobsSlider() {
    const slider = document.getElementById('jobs-slider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let current = 0;

    function showSlide(index) {
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === index);
        });
    }

    function next() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prev() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    // Optional: keyboard navigation
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });

    // Initialize
    showSlide(current);
})();