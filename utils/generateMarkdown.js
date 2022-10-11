// Dictionary that stores the full license name as a key and the license shorthand as a value
const licenseDictionary = {
  "No License" : "N/A",
  "Academic Free License v3.0" : "afl%203.0",
  "Apache license 2.0" : "apache%202.0",
  "Artistic license 2.0" : "artistic%202.0",
  "Boost Software License 1.0" : "bsl%201.0",
  "BSD 2-clause 'Simplified' license" :	"bsd%202%20clause",
  "BSD 3-clause 'New' or 'Revised' license" : "bsd%203%20clause",
  "BSD 3-clause Clear license" : "bsd%203%20clause%20clear",
  "Creative Commons license family" : "cc",
  "Creative Commons Zero v1.0 Universal" : "cc0%201.0",
  "Creative Commons Attribution 4.0" : "cc%20by%204.0",
  "Creative Commons Attribution Share Alike 4.0" : "cc%20by%20sa%204.0",
  "Do What The F*ck You Want To Public License" : "wtfpl",
  "Educational Community License v2.0" : "ecl%202.0",
  "Eclipse Public License 1.0" : "epl%201.0",
  "Eclipse Public License 2.0" : "epl%202.0",
  "European Union Public License 1.1" : "eupl%201.1",
  "GNU Affero General Public License v3.0" : "agpl%203.0",
  "GNU General Public License family" : "gpl",
  "GNU General Public License v2.0" : "gpl%202.0",
  "GNU General Public License v3.0" : "gpl%203.0",
  "GNU Lesser General Public License family" : "lgpl",
  "GNU Lesser General Public License v2.1" : "lgpl%202.1",
  "GNU Lesser General Public License v3.0" : "lgpl%203.0",
  "ISC" : "isc",
  "LaTeX Project Public License v1.3c" : "lppl%201.3c",
  "Microsoft Public License" : "ms%20pl",
  "MIT" : "mit",
  "Mozilla Public License 2.0": "mpl%202.0",
  "Open Software License 3.0" : "osl%203.0",
  "PostgreSQL License" : "postgresql",
  "SIL Open Font License 1.1" : "ofl%201.1",
  "University of Illinois/NCSA Open Source License" : "ncsa",
  "The Unlicense" : "unlicense",
  "zLib License" : "zlib",
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "") {
    return "";
  }
  let badge = licenseDictionary[license];
  if(badge == "N/A") {
      return "";
  }
  return `![License](https://img.shields.io/badge/license-${badge}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "") {
    return "";
  }
  let link = licenseDictionary[license];
  if(link == "N/A") {
      return "";
  }
  return `https://opensource.org/licenses/${link}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let shorthand = licenseDictionary.license;
  if(shorthand == "N/A") {
    return "\n";
  }
  let markdown = generateMarkdown("License");
  let link = renderLicenseLink(shorthand);
  return `
${markdown}
License Link: ${link}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data}`;
}

module.exports = generateMarkdown.js;
