// Dictionary that stores the full license name as a key and the license shorthand as a value
const licenseDictionary = {
  "No License" : "",
  "Academic Free License v3.0" : "afl-3.0",
  "Apache license 2.0" : "apache-2.0",
  "Artistic license 2.0" : "artistic-2.0",
  "Boost Software License 1.0" : "bsl-1.0",
  "BSD 2-clause 'Simplified' license" :	"bsd-2-clause",
  "BSD 3-clause 'New' or 'Revised' license" : "bsd-3-clause",
  "BSD 3-clause Clear license" : "bsd-3-clause-clear",
  "Creative Commons license family" : "cc",
  "Creative Commons Zero v1.0 Universal" : "cc0-1.0",
  "Creative Commons Attribution 4.0" : "cc-by-4.0",
  "Creative Commons Attribution Share Alike 4.0" : "cc-by-sa-4.0",
  "Do What The F*ck You Want To Public License" : "wtfpl",
  "Educational Community License v2.0" : "ecl-2.0",
  "Eclipse Public License 1.0" : "epl-1.0",
  "Eclipse Public License 2.0" : "epl-2.0",
  "European Union Public License 1.1" :	"eupl-1.1",
  "GNU Affero General Public License v3.0" : "agpl-3.0",
  "GNU General Public License family" : "gpl",
  "GNU General Public License v2.0" : "gpl-2.0",
  "GNU General Public License v3.0" : "gpl-3.0",
  "GNU Lesser General Public License family" : "lgpl",
  "GNU Lesser General Public License v2.1" : "lgpl-2.1",
  "GNU Lesser General Public License v3.0" : "lgpl-3.0",
  "ISC" : "isc",
  "LaTeX Project Public License v1.3c" : "lppl-1.3c",
  "Microsoft Public License" : "ms-pl",
  "MIT" : "mit",
  "Mozilla Public License 2.0": "mpl-2.0",
  "Open Software License 3.0" : "osl-3.0",
  "PostgreSQL License" : "postgresql",
  "SIL Open Font License 1.1" : "ofl-1.1",
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
  return `[![License](https://img.shields.io/badge/license-${license}-green)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "") {
    return "";
  }
  return `https://opensource.org/licenses/${license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let shorthand = licenseDictionary.license;
  if(shorthand == "") {
    return "\n";
  }
  let markdown = generateMarkdown("License")
  let badge = renderLicenseBadge(shorthand);
  let link = renderLicenseLink(shorthand);
  return `
  ${markdown}
  ${badge}
  License Link: ${link}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data}`;
}

module.exports = generateMarkdown.js;
