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
      console.log(maths.sum(numOne, numTwo));
      break;
    case 'Apache 2.0':
      console.log(maths.difference(numOne, numTwo));
      break;
    case 'GPL 3.0':
      console.log(maths.product(numOne, numTwo));
      break;
    case 'BSD 2-Clause':
      console.log(maths.quotient(numOne, numTwo));
      break;
    case 'BSD 3-Clause':
      console.log(maths.quotient(numOne, numTwo));
      break;
    case 'BSD 4-Clause':
      console.log(maths.quotient(numOne, numTwo));
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
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
