const inquirer = require('inquirer');
const fs = require('fs');

// Questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions for running tests for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project:',
    choices: [
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'Mozilla Public License 2.0',
      'Unlicense'
    ]
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please provide your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:'
  },
];

// Function to generate the README file
function generateREADME(answers) {
  return `
# ${answers.title}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license}.

## Questions
If you have any questions about this project, please feel free to contact me via [GitHub](https://github.com/${answers.githubUsername}) or [email](mailto:${answers.email}).
  `;
}

// Function to prompt the user with the questions and generate the README file
inquirer
  .prompt(questions)
  .then(answers => {
    const README = generateREADME(answers);
    fs.writeFile('README.md', README, err => {
      if (err) {
        console.log(err);
      } else {
        console.log('README.md successfully created!');
      }
    });
  })
  .catch(error => {
    console.log(error);
  });
