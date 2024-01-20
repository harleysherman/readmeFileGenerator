// TODO: Create a function that returns a license badge based on which license is passed in

const { error } = require("console");

// If there is a bad text enter by the user, return an badge image
function renderLicenseBadge(badge) {
  if (badge) {
    let selectedBadge;
    selectedBadge = `https://img.shields.io/badge/${badge}-langauge-green`;
    return selectedBadge;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink (license) {
  let selectedLicense;
  switch (license) {
    case 'MIT':
      console.log("This project uses the MIT License.");
      // https://img.shields.io/badge/any_text-you_like-blue
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
      //add mit license link
      break;
    case 'Apache 2.0':
      console.log("This project uses the Apache 2.0 License.");
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
      break;
    case 'GPL 3.0':
      console.log("This project uses the GPL 3.0 License.");
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
      break;
    case 'BSD 2-Clause':
      console.log("This project uses the BSD 2-Clause License.");
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
      break;
    case 'BSD 3-Clause':
      console.log("This project uses the BSD 3-Clause License.");
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
      break;
    case 'BSD 4-Clause':
      console.log("This project uses the BSD 4-Clause License.");
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
      break;
    default:
      console.log('License selected is none.');
      selectedLicense = `https://img.shields.io/badge/${license}-license-blue`;
  }
  return selectedLicense;
}

// TODO: Create a function that returns the GitHub contribute section of README
// returns git hub profile link
function renderGitHubLink (gitHubUserName) {
  let selectedGitHubUserName;
  selectedGitHubUserName = `https://gihub.com/${gitHubUserName}`;
  return selectedGitHubUserName;
}

// TODO: Create a function to generate markdown for README
//returning a template literal for readme.md
const generateReadme = ({projectName, motivation, buildReason, solution, learn, installation, useCases, screenshotLink, credit, license, badge, features, gitHubUserName, contributorInfoEmail, testCases}) => 
`# <${projectName}>

## Badges for License

![${license}](${renderLicenseLink (license)})

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

[screenshot](./images/${screenshotLink})

## Credits

${credit}

## License

![${license}](${renderLicenseLink (license)})

This project is covered by ${license}. You can find the license [Here](./LICENSE).

## Questions

Here are different ways to contact me:
[${gitHubUserName}](https://www.github.com/${gitHubUserName})

[${contributorInfoEmail}](mailto:${contributorInfoEmail})
---

## Badges for Languages

![${badge}](${renderLicenseBadge(badge)})

## Features

${features}

## How to Contribute

[${gitHubUserName}](${renderGitHubLink (gitHubUserName)})

## Tests

${testCases}`;

module.exports = generateReadme; //modularization