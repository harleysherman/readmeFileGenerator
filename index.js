// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

const generateReadme = ({projectName, buildReason, solution, learn, installation, useCases, screenshotLink, credit, license, badge, features, gitHubUserName}) =>
`# <${projectName}>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- Motivation: ${motivation}
- Reason for build: ${buildReason}
- Solution: ${solution}
- What I learned: ${learn}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${useCases}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

md
(need exclamation point here)[alt text](./assest/images/${screenshotLink})


## Credits

${credit}

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${generateMarkdown.renderLicenseLink (license)}


The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
Link EX: My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

(need exclamation point here)[badmath](${generateMarkdown.renderLicenseBadge(badge)})

## Features

${features}

## How to Contribute

[Contributor Covenant]mailto:${generateMarkdown.renderGitHubLink (gitHubUserName) }`;

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
        name : 'motivation',
    }, 
    {
        type : 'input',
        message : "Why did you build this project?",
        name : 'buildReason',
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
        message : "Provide instructions to your project.",
        name : 'instructions',
    },
    {
        type : 'input',
        message : "Provide use cases for your project.",
        name : 'useCases',
    },
    {
        type : 'input',
        message : "Please include a screen shot file name of your final project.",
        name : 'screenshotLink',
    },
    {
        type : 'input',
        message : "List your credit for help on this project",
        name : 'credit',
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
        choices : ['MIT', 'Apache 2.0','GPL 3.0', 'BSD 2-Clause','BSD 3-Clause', 'BSD 4-Clause', 'None'],
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
    },
    {
        type : 'input',
        message : "Include test cases for your project.",
        name : 'testCases',
    }
];

// TODO: Create a function to initialize app
function init() {
    //prompt for questions in terminal
    inquirer.prompt(questions)

    // TODO: Create a function to write README file
    console.log(response);
    //next line has an error for some reason :)
    .then((response) => writeFile('readme.md', generateReadme(response)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
