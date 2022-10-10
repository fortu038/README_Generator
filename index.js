// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    "What is your project's name?", // 0
    "Enter a project description.", // 1
    "Enter installation instructions.", // 2
    "Enter usage instructions.", // 3
    "Enter any credits.", // 4
    "Enter your license.", // 5
    "Enter contribution guidelines.", // 6
    "Enter testing instructions." // 7
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data.license);
    let licenseText = generateMarkdown.renderLicenseSection(data.license);
    fs.writeFile(`${fileName}-readme.md`,
    `# ${fileName}
    
    ## Description
    
    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.install}
    
    ## Usage
    
    ${data.usage}
    
    ##Credits
    
    ${data.credits}  
    ${licenseText}
    ## How to Contribute

    ${data.contribute}

    ## Tests

    ${data.tests}`,
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
                name: "credits",
                message: questions[4],
            },
            {
                type: "list",
                name: "license",
                message: questions[5],
                choices: [
                    "No License",
                    "Academic Free License v3.0",
                    "Apache license 2.0",
                    "Artistic license 2.0",
                    "Boost Software License 1.0",
                    "BSD 2-clause 'Simplified' license",
                    "BSD 3-clause 'New' or 'Revised' license",
                    "BSD 3-clause Clear license",
                    "Creative Commons license family",
                    "Creative Commons Zero v1.0 Universal",
                    "Creative Commons Attribution 4.0",
                    "Creative Commons Attribution Share Alike 4.0",
                    "Do What The F*ck You Want To Public License",
                    "Educational Community License v2.0",
                    "Eclipse Public License 1.0",
                    "Eclipse Public License 2.0",
                    "European Union Public License 1.1",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License family",
                    "GNU General Public License v2.0",
                    "GNU General Public License v3.0",
                    "GNU Lesser General Public License family",
                    "GNU Lesser General Public License v2.1",
                    "GNU Lesser General Public License v3.0",
                    "ISC",
                    "LaTeX Project Public License v1.3c",
                    "Microsoft Public License",
                    "MIT",
                    "Mozilla Public License 2.0",
                    "Open Software License 3.0",
                    "PostgreSQL License",
                    "SIL Open Font License 1.1",
                    "University of Illinois/NCSA Open Source License",
                    "The Unlicense",
                    "zLib License"
                ]
            },
            {
                input: "input",
                name: "contribute",
                message: questions[6],
            },
            {
                input: "input",
                name: "tests",
                message: questions[7],
            },
        ])
        .then((answers) => {
            console.log(answers);
            writeToFile(answers.name, answers);
        })
}

// Function call to initialize app
init();
