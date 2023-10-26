// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    writeToFile("generated-readme.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
