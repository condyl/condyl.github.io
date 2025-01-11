const linkedin = "https://www.linkedin.com/in/connor-bernard/"
const github = "https://www.github.com/condyl";
const email = "mailto:connorbbrocku@gmail.com";
const resume = "https://www.connorbernard.com/Connor_Bernard_Resume.pdf";
const back = "https://connorbernard.com";

const commands = [
    "help",
    "aboutme",
    "experience",
    "noncs",
    "projects",
    "linkedin",
    "github",
    "resume",
    "email",
    "clear"
];

const help = [
    '<li>Press <kbd>Tab</kbd> to auto complete commands, and use <i class="fa-solid fa-arrow-up"></i> and <i class="fa-solid fa-arrow-down"></i> to see previous commands.</li>',
    "<br>",
    '<li>aboutme      - Learn a bit about me <i class="fa-solid fa-user-tie"></i></li>',
    '<li>experience   - Check out my computer science related work history <i class="fa-solid fa-briefcase"></i></li>',
    '<li>projects     - Check out my recent projects <i class="fa-solid fa-bars-progress"></i></li>',
    '<li>noncs        - Look at my non-computer science related work history <i class="fa-solid fa-shop"></i></li>',
    '<li>linkedin     - Check out my LinkedIn <i class="fa-brands fa-linkedin"></i></li>',
    '<li>github       - Check out my GitHub profile <i class="fa-brands fa-github"></i></li>',
    '<li>resume       - Look at my resume <i class="fa-solid fa-file"></i></li>',
    '<li>email        - Send me an email <i class="fa-solid fa-envelope"></i></li>',
    '<li>clear        - Clear the terminal <i class="fa-solid fa-trash"></i></li>',
    '<li>back         - Go back to the normal portfolio <i class="fa-solid fa-arrow-left"></i></li>',
]

const aboutme = [
    "Hi!  I'm Connor!  I am currently a 2nd-year student at Brock University in St Catherines, Ontario studying Computer Science.  During the past Winter semester, I have been a software developer intern at Caribou Contests, where I made a new math puzzle game.  I am currently working as a Research Assistant at Brock University under Prof. Wolf and Prof. Nishat.  My main CS interests are web development, computer vision, and artificial intelligence.  I am currently looking for Spring/Summer 2025 co-ops/internships."
]

const experience = [
    '<li>Sun Life - Software Engineer Intern - Sept. 2024 to Dec. 2024</li>',
    "<li>&bull; Developed internal tools using Java and AEM, utilized by 50+ developers, resulting in 10 hours saved weekly.</li>",
    "<li>&bull; Engineered 36+ JUnit test cases, leading to 98% code coverage and cutting production defects by 30%.</li>",
    "<li>&bull; Won 1st place in Sun Life’s Elevate Cloud Tech Hackathon by creating a GenAI chat bot using Amazon Q and AWS, competing against 240 participants globally.</li>",
    "<li>&bull; Improved documentation for internal tools and processes, boosting onboarding efficiency for new hires by 25%.</li>",
    '<br>',
    '<br>',
    '<li>Brock University - Research Assistant - Apr. 2024 to Dec. 2024</li>',
    "<li>&bull; Collaborated with Prof. Wolf and Prof. Nishat to develop a <a href='https://cariboutests.com/games/knots'><u>web interface</u> <i class='fa-solid fa-link'></i></a> for Prof. Wolf's 'TurboKnots' program.</li>",
    "<br>",
    "<br>",
    `<li>Caribou Contests - Full Stack Developer Intern - Jan. 2024 to Apr. 2024</li>`,
    `<li>&bull; Led the development of Caribou Contest’s first 3D game <a href="https://cariboutests.com/games/packing.php">'<u>Packing</u>'<i class="fa-solid fa-link"></i></a> using using JavaScript \& Three.js, which generated 35000+ plays to date</li>`,
    `<li>&bull; Contributed to a multilingual chat bot, used by 5000+ users monthly, that can detect over 200 intents using the Google DialogFlow API connected to a PHP backend and a React frontend app.</li>`,
    `<li>&bull; Optimized SQL queries, resulting in an 87% reduction in load times for critical features, improving user experience and increasing overall site performance.</li>`,
    `<li>&bull; Developed data visualization webpages tracking school board purchases, directly contributing to a $30,000+ revenue increase from one school board through targeted sales of full school board passes.</li>`,
    `<li>&bull; Collaborated with other developers using Git & GitHub to perform code reviews and issue tracking.</li>`,
    "<br>"
]

const noncs = [
    "<br>",
    `<li>Fortinos Supermarkets - Front End Assistant - Aug. 2019 to present`,
    `<li>&bull; Consistently provided personalised assistance, resolved customer issues promptly, and cultivated positive relationships, resulting in a significant increase in customer satisfaction and 97 positive reviews in 2022.</li>`,
    `<li>&bull; Implemented clear communication channels, optimised task assignments, and provided ongoing support to staff, resulting in improved operational efficiency and a heightened customer experience.</li>`,
    `<li>&bull; Strategically scheduled and coordinated staff breaks to optimise coverage and minimise disruptions, promoting a supportive work environment and enabling employees to recharge and maintain productivity.</li>`,
    `<li>&bull; Mentored and coached new hires, providing ongoing guidance and support to facilitate their transition into the front-end team, resulting in reduced training time and improved overall employee performance.</li>`,
    "<br>",
    `<li>Ford Motor Company - Summer Student - June 2023 to Aug. 2023</li>`,
    `<li>&bull; Consistently met daily production targets by efficiently and accurately installing car parts, contributing to the timely completion of vehicles and ensuring smooth operations on the assembly line.</li>`,
    `<li>&bull; Demonstrated exceptional attention to detail and adherence to safety protocols, contributing to a zero-accident record during my time there.</li>`,
    `<li>&bull; Consistently demonstrated a strong work ethic and a commitment to teamwork, fostering a positive and collaborative work environment among fellow assembly plant employees.</li>`,
    "<br>"
]

const projects = [
    "<br>",
    `<li><a href="https://github.com/condyl/ai-resume-builder" target="__blank"><u>AI Resume Builder</u> <i class="fa-solid fa-link"></i></a></li>`,
    `<li>&bull; Developed a full-stack resume builder using React, Next.js, and Tailwind CSS for a responsive frontend.</li>`,
    `<li>&bull; Built the backend with Node.js and Express, creating robust APIs and handling server-side logic.</li>`,
    `<li>&bull; Integrated OpenAI GPT models to enhance resumes, improving clarity, grammar, and formatting.</li>`,
    `<li>&bull; Implemented authentication and resume saving features using Supabase, supporting Google and GitHub login.</li>`,
    "<br>",
    `<li><a href="https://github.com/condyl/course-scheduler" target="__blank"><u>University Course Scheduler</u> <i class="fa-solid fa-link"></i></a></li>`,
    `<li>&bull; Led the development of an open-source automated course schedule creator using React and Express.js.</li>`,
    `<li>&bull; Reduced timetable generation time by 80% via conflict filtering, dynamic constraints, and optimized validation.</li>`,
    `<li>&bull; Utilized by 600+ students to generate 4,300+ schedules, simplifying course planning before registration.</li>`,
    "<br>",
    `<li><a href="https://github.com/condyl/valorant-discord-bot" target="__blank"><u>Valorant Discord Bot</u> <i class="fa-solid fa-link"></i></a></li>`,
    `<li>&bull; Launched a Discord bot built with JavaScript and MongoDB for real-time Valorant player and match statistics.</li>`,
    `<li>&bull; Maintained 99.8% uptime to ensure consistent service across all servers.</li>`,
    `<li>&bull; Reached 15,000+ users and 75+ servers at peak, handling over 30,000+ commands run monthly.</li>`,
    "<br>",
    `<li><a href="https://github.com/condyl/terminal-portfolio" target="__blank"><u>Terminal Portfolio</u> <i class="fa-solid fa-link"></i> </a> - This Website!</li>`,
    `<li>&bull; Created a personal portfolio resembling a terminal using HTML, CSS, and vanilla JavaScript.</li>`,
    `<li>&bull; Deployed the site using Vercel for seamless and efficient hosting.</li>`,
    "<br>"
];

export {
    linkedin,
    github,
    email,
    commands,
    experience,
    noncs,
    projects,
    aboutme,
    help,
    resume,
    back
};
