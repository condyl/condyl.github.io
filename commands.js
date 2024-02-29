const linkedin = "https://www.linkedin.com/in/connor-bernard/"
const github = "https://www.github.com/condyl";
const email = "mailto:connorbbrocku@gmail.com";
const resume = "https://drive.google.com/drive/folders/1oMk7rSnh0zGLh5Ctn3uV_Itk1NlV95ul?usp=sharing";

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
]

const aboutme = [
    "Hi!  I'm Connor!  I am currently a 2nd-year student at Brock University in St Catherines, Ontario studying Computer Science.  For the past couple months, I have been a Full Stack Developer Intern at Caribou Contests, where I have been the lead developer of a new puzzle-game that will be added to the site very soon.  My main CS interests are web development, computer vision, and artificial intelligence.  I am currently looking for a Fall 2024 co-op/internship."
]

const experience = [
    "<br>",
    `<li>Caribou Contests - Full Stack Developer Intern - Jan. 2024 to Apr. 2024</li>`,
    `<li>&bull; Led the development of Caribou Contest’s first 3D game '<strike>REDACTED</strike>', created using JavaScript & Three.js.</li>`,
    `<li>&bull; Contributed to a multilingual chat bot, used by 5000+ users monthly, that can detect over 200 intents using the Google DialogFlow API connected to a PHP backend and a React frontend app.</li>`,
    `<li>&bull; Implemented performance enhancements that led to an impressive 87% reduction in load times for critical features such as login and student dashboard settings.</li>`,
    `<li>&bull; Created and updated documentation for various projects and processes to facilitate knowledge transfer and collaboration among team members.</li>`,
    `<li>&bull; Collaborated with other developers using Git & GitHub to perform code reviews and issue tracking.</li>`,
    `<li>&bull; Designed and rigorously tested production-ready code to ensure reliability and performance.</li>`,
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
    `<li><a href="https://github.com/condyl/terminal-portfolio" target="__blank"><u>Terminal Portfolio</u> <i class="fa-solid fa-link"></i> </a> - This Website!</li>`,
    `<li>&bull; Created a personal portfolio resembling a terminal using HTML, CSS, and vanilla JavaScript.</li>`,
    `<li>&bull; Deployed the site using Vercel for seamless and efficient hosting.</li>`,
    "<br>",
    `<li><a href="https://github.com/condyl/wordle-solver" target="__blank"><u>Wordle Solver</u> <i class="fa-solid fa-link"></i></a></li>`,
    `<li>&bull; Leveraged Python to create an efficient algorithm that significantly reduces guessing iterations and improves overall gameplay.</li>`,
    `<li>&bull; Achieved rapid word identification by strategically narrowing down possible answers using a combination of evaluation maps and word count analysis.</li>`,
    `<li>&bull; Developed an intelligent guessing strategy that adapts dynamically based on previous outcomes, leading to precise word predictions.</li>`,
    "<br>",
    `<li><a href="https://github.com/condyl/recipe-discord-bot" target="__blank"><u>Resume Discord Bot</u> <i class="fa-solid fa-link"></i> </a></li>`,
    `<li>&bull; Developed a custom Discord bot using Java to increase user experience and activity in an online community.</li>`,
    `<li>&bull; Leveraged the Java Discord API (JDA) to create a seamless integration with the Discord platform, enabling real-time interactions and responses.</li>`,
    `<li>&bull; Implemented REST APIs to retrieve recipe data from external sources, providing users with a diverse selection of culinary options.</li>`,
    "<br>",
    `<li><a href="https://github.com/condyl/led-strip" target="__blank"><u>Website Controlled LED RGB Strip</u> <i class="fa-solid fa-link"></i> </a></li>`,
    `<li>&bull; Designed and developed a dynamic RGB LED strip control system using Python, JavaScript, HTML, CSS, Flask, and the Neopixel library.</li>`,
    `<li>&bull; Utilised Raspberry Pi as the hardware platform for hosting the web application and controlling the LED strip.</li>`,
    `<li>&bull; Implemented a responsive web interface with HTML and CSS, allowing users to control the colour and lighting effects of the RGB strip through any web browser on any device.</li>`,
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
    resume
};