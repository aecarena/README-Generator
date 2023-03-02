// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

function getLicenseBadge(answerLicense){
  switch(answerLicense){
      case "mit":
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
          break;
  }
}
function getLicense(answerLicense){
  switch(answerLicense){
      case "mit":
          return '[Read MIT License](https://opensource.org/licenses/MIT)';
          break;
  }
}
function getLicenseBadge(answerLicense1){
  switch(answerLicense1){
      case "ISC":
          return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
          break;
  }
}
function getLicense(answerLicense1){
  switch(answerLicense1){
      case "ISC":
          return '[Read ISC License](https://opensource.org/licenses/ISC)';
          break;
  }
}
function getLicenseBadge(answerLicense2){
  switch(answerLicense2){
      case "NONE":
          return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
          break;
  }
}




async function runQuery(){
  inquirer.prompt(questions)
  .then((answers) =>{
      console.log(answers)
      var text = ""
      text = `#${answers.title} ${getLicenseBadge()}

  
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)
- [Github](#github)
- [License](#license)


## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.tests}

## Questions
${answers.questions}

## Github
${answers.github}


## License
${getLicense()}

`


console.log(text)

fs.writeFile("./README2.md", text, "utf-8",(err) => {})




})
.catch((error) =>
console.log(error)
)}

runQuery();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;