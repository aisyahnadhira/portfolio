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
            "Successfully developed nearly 80% of the UI for the 'Job' feature on Mereka.io, using Angular and ensuring it was responsive, allowing clients and experts to post and apply for jobs seamlessly.",
            "Enhanced the finance page by cleaning up a disorganized transaction interface and ensuring it synchronized correctly with Stripe data, improving accuracy and user experience.",
            "Consistently completed tasks assigned in ClickUp within the sprint points, ensuring deadlines were always met without exceeding allocated points.",
            "Actively participated in daily development stand-ups, providing progress updates and collaborating with project management and the development team to resolve any issues.",
            "Contributed to bi-weekly sprint planning meetings, helping to outline clear priorities and deliverables.",
            "Delivered tasks on time, consistently finishing within the two-week sprint period as assigned.",
            "Implemented designs from Figma into the project, ensuring UI/UX consistency and alignment with project requirements.",
            "Took initiative in addressing UI issues across different sections, including handling urgent hotfixes, ensuring that all fixes were completed within the same day for quick resolutions."
        ]
    },
    {
        date: 'Mar 2024 - Present',
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
