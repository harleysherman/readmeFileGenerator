// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateReadme = require('./utils/generateMarkdown');

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
        message : "Please enter the text for your badge. (languages only)",
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
        name : 'contributorInfoEmail',
    },
    {
        type : 'input',
        message : "Include test cases for your project.",
        name : 'testCases',
    }
];

// TODO: Create a function to initialize app
function init() {
    //prompt for questions in terminal, then write readme, then print to console. If none of that works, print error.
    inquirer.prompt(questions)
    .then((response) => fs.writeFile ('readme.md', generateReadme(response)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));

    // Promise syntax long way
    //const tryThis = new Promise((reject, resolve) => {
    //     if(yes) {
    //         resolve('yes');
    //     } else {
    //         reject('no')
    //     }
    // })
}

// Function call to initialize app
init();
