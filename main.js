import {
    linkedin,
    github,
    resume,
    email,
    help,
    aboutme,
    commands,
    projects,
    experience,
    noncs,
    back
} from "./commands.js";

const container = document.querySelector(".container");
const input = document.getElementById("prompt");

let previousCommands = [];
let index = 1;

window.addEventListener("keydown", enterHandler);
window.addEventListener("keydown", upArrowHandler);
window.addEventListener("keydown", downArrowHandler);
window.addEventListener("keydown", tabHandler);


function enterHandler(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const command = input.value;
        previousCommands.push(command);
        if (command.toLowerCase() === "clear") {
            previousCommands.push(command);
            runCommand(command, null);
            input.value = "";
            scrollToCurrentInput;
            return;
        }

        const newDiv = document.createElement("div");
        newDiv.classList.add("output");
        newDiv.innerHTML = `
        <div class="flexbox">
            <span class="green nospace">guest</span>
            <span class="light-dark nospace">@</span>
            <span class="purple nospace">connorbernard.com</span>
            <span class="light-dark nospace">:$~</span>
            <span class="space"> ${command}</span>
        </div>
        <div class="cmd-line"></div>
        `;
        const newOutput = newDiv.querySelector(".cmd-line");
        runCommand(command, newOutput);
        container.insertBefore(newDiv, container.lastElementChild);
        input.value = "";
        scrollToCurrentInput();
    }
}

function upArrowHandler(event) {
    if (event.key === "ArrowUp" && previousCommands.length !== 0) {
        event.preventDefault();
        input.value = previousCommands[previousCommands.length - index];
        if (!(index + 1 > previousCommands.length)) {
            index++;
        }
    }
}

function downArrowHandler(event) {
    if (event.key === "ArrowDown" && previousCommands.length !== 0) {
        event.preventDefault();
        input.value = previousCommands[previousCommands.length - index];
        if (index - 1 !== 0) {
            index--;
        }
    }
}

function tabHandler(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      const incompleteWord = input.value.toLowerCase();
      const match = commands.filter((command) =>
        command.startsWith(incompleteWord),
      );
      if (match.length > 0) {
        input.value = match[0];
      }
    }
  }

function runCommand(command, output) {
    switch (command.toLowerCase()) {
        case "help":
            newText(help, output);
            break;
        case "aboutme":
            newText(aboutme, output);
            break;
        case "experience":
            newText(experience, output);
            break;
        case "noncs":
            newText(noncs, output);
            break;
        case "projects":
            newText(projects, output);
            break;
        case "linkedin":
            newText("Opening LinkedIn...", output);
            newLink(linkedin);
            break;
        case "github":
            newText("Opening GitHub...", output);
            newLink(back);
            break;
        case "back":
            newText("Going back to main site...", output);
            newLink(back);
            break;
        case "resume":
            newText("Opening resume...", output);
            newLink(resume);
            break;
        case "email":
            newText(`Opening mailto: <a href="${email}">connorbbrocku@gmail.com</a>...`, output);
            break;
        case "clear":
            clearContent();
            break;
        case "":
            newText("", output);
            break;
        default:
            newText(`${command} : The term '${command}' is not recognized as the name of a cmdlet, function, script file, or operable program. Type 'help' to see the list of available commands.`, output);
            break;
    }
}

function newText(text, output) {
    if (typeof text === "string") {
        output.innerHTML = text;
        return;
    }
    for (let x of text) {
        output.innerHTML += x;
    }
}

function newLink(link) {
    scrollToCurrentInput();
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function clearContent() {
    const contentList = container.querySelectorAll(".output");
    contentList.forEach((element) => {
        element.remove();
    });
    scrollToCurrentInput();
}

function scrollToCurrentInput() {
    window.scrollTo(0, document.body.offsetHeight);
    input.focus();
}
