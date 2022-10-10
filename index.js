// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's name?",
    "Enter a project description.",
    "Enter installation instructions.",
    "Enter usage instructions.",
    "Enter contribution guidelines.",
    "Enter testing instructions."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let license = generateMarkdown.renderLicenseSection(data[5]);
    fs.writeFile(`${fileName}.txt`,
    `#${fileName}
    
    ##Description
    
    ${data[1]}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ##Installation
    
    ${data[2]}
    
    ##Usage
    
    ${data[3]}
    
    ##Credits
    
    ${data[4]}
    
    ##License
    
    ${license}
    
    ## How to Contribute

    ${data[5]}

    ## Tests

    ${data[6]}`,
    (err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                input: "input",
                name: "name",
                message: questions[0],
            },
            {
                input: "input",
                name: "description",
                message: questions[1],
            },
            {
                input: "input",
                name: "install",
                message: questions[2],
            },
            {
                input: "input",
                name: "usage",
                message: questions[3],
            },
            {
                input: "input",
                name: "contribution",
                message: questions[4],
            },
            {
                input: "input",
                name: "testing",
                message: questions[5],
            },
        ])
        .then((answers) => {
            writeToFile(answers[0], answers);
        })
}

// Function call to initialize app
init();
