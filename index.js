// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        message : 'What is your project name?',
        name : 'projectName',
    },
    {
        type : 'input',
        message : "What is your motivation for this project?",
        name : 'projectName',
    }, 
    {
        type : 'input',
        message : "Why did you build this project?",
        name : 'projectName',
    },
    {
        type : 'input',
        message : "What problem does your project aim to solve?",
        name : 'solution',
    },
    {
        type : 'input',
        message : "What did you learn from this project?",
        name : 'learn',
    },
    {
        type : 'input',
        message : "Please include instructions on installation of your project.",
        name : 'installation',
    },
    {
        type : 'input',
        message : "Provide instructions and examples of use.",
        name : 'instructions',
    },
    {
        type : 'input',
        message : "Please include a screen shot link of your final project.",
        name : 'screenshotLink',
    },
    {
        type : 'input',
        message : "List your GitHub profile user name for contribution.",
        name : 'gitHubUserName',
    },
    {
        type : 'list',
        message : "Please select your license.",
        name : 'license',
        choices : ['MIT', 'Apache 2.0','GPL 3.0', 'BSD 2-Clause','BSD 3-Clause', 'BSD 4-Clause'],
    },
    {
        type : 'input',
        message : "Please enter the text for your badge.",
        name : 'badge',
    },
    {
        type : 'input',
        message : "Add your project features.",
        name : 'features',
    },
    {
        type : 'input',
        message : "Please add your email for contribution.",
        name : 'contributorInfo',
    }
];
inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// # <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     (need exclamation point here)[alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
//Link EX: My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// (need exclamation point here)[badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();