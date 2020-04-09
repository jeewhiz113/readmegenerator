function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

<img src = "">

`;
}

module.exports = generateMarkdown;
