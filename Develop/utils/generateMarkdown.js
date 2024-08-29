function renderLicenseBadge(license) {
  if (license) {
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license) {
    return `## License
Licensed under the ${license} license.`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title} 
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contact Me](#contact-me)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Requirements
${data.requirements} 
## Usage
${data.usage}
## Contact Me
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.github}](https://github.com/${data.github})
`;
}

export default generateMarkdown;