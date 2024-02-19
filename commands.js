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
    "<br>"
]

const noncs = [
    "<br>",
    `<li>Fortinos Supermarkets - Front End Assistant - Aug. 2019 to present`,
    `<li>Ford Motor Company - Summer Student - June 2023 to Aug. 2023</li>`,
    "<br>"
]

const projects = [
    "<br>",
    `<li><a href="https://github.com/condyl/terminal-site" target="__blank"><u>Terminal Portfolio</u> <i class="fa-solid fa-link"></i> </a> - This Website!</li>`,
    `<li><a href="https://github.com/condyl/wordle-solver" target="__blank"><u>Wordle Solver</u> <i class="fa-solid fa-link"></i></a> - Automatically solve Wordle puzzles!</li>`,
    `<li><a href="https://github.com/condyl/recipe-discord-bot" target="__blank"><u>Resume Discord Bot</u> <i class="fa-solid fa-link"></i> </a> - Get step-by-step recipe instructions!</li>`,
    `<li><a href="https://github.com/condyl/led-strip" target="__blank"><u>Website Controlled LED RGB Strip</u> <i class="fa-solid fa-link"></i> </a> - Control your lights on any device with a web browser!</li>`,
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