// TODO: Create a function that returns a license badge based on which license is passed in

const { error } = require("console");

// If there is a bad text enter by the user, return an badge image
function renderLicenseBadge(badge) {
  if (badge) {
    badge = `https://img.shields.io/badge/badge_${badge}`;
    return badge;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink (license) {
  switch (license) {
    case 'MIT':
      console.log("This project uses the MIT License.");
      //license = (https://img.shields.io/badge/${license});
      break;
    case 'Apache 2.0':
      console.log("This project uses the Apache 2.0 License.");
      break;
    case 'GPL 3.0':
      console.log("This project uses the GPL 3.0 License.");
      break;
    case 'BSD 2-Clause':
      console.log("This project uses the BSD 2-Clause License.");
      break;
    case 'BSD 3-Clause':
      console.log("This project uses the BSD 3-Clause License.");
      break;
    case 'BSD 4-Clause':
      console.log("This project uses the BSD 4-Clause License.");
      break;
    default:
      console.log('Check your maths!');
  }
}


// TODO: Create a function that returns the GitHub contribute section of README
// If there is no license, return an empty string
function renderGitHubLink (gitHubUserName) {
  gitHubUserName = `https://gihub.com/${gitHubUserName}`;
  return gitHubUserName;
}

// TODO: Create a function to generate markdown for README
//returning a template literal in index.js generateMarkdown
const generateReadme = ({projectName, motivation, buildReason, solution, learn, installation, useCases, screenshotLink, credit, license, badge, features, gitHubUserName, contributorInfoEmail, testCases}) => `# <${projectName}>

## Description

A short description explaining the what, why, and how of your project:

- Motivation: ${motivation}
- Reason for build: ${buildReason}
- Solution: ${solution}
- What I learned: ${learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${useCases}

[screenshot](./assest/images/${screenshotLink})


## Credits

${credit}

## License

![${license}](${renderLicenseLink (license)})


The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
Link EX: My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

## Questions

![${gitHubUserName}](https://www.github.com/${gitHubUserName})
![${contributorInfoEmail}](mailto:${contributorInfoEmail})
---

## Badges

![${badge}](${renderLicenseBadge(badge)})

## Features

${features}

## How to Contribute

![${gitHubUserName}](${renderGitHubLink (gitHubUserName)})

## Tests

${testCases}`;

module.exports = generateReadme; //modularization