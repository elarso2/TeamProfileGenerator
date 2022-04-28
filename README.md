# Team Profile Generator

[![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://mit-license.org/)

## Description

The goal of this assignment was to create a backend program which prompts a user to input data about their team members in order to create member cards which will depict information regarding each member of the team. Information requested includes member names, emails, titles, employee ID's, and their GitHub profiles. Once the information has been received, the program will create cards to display on the website. A minimum of four tests will also be run in order to confirm the JavaScript code is properly functioning.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that asks for user input
WHEN I am prompted for team members and their information
THEN a HTML file is generated to display a team roster with specific information displayed for each team member based on their role on the team
WHEN I click on a team members email or GitHub link
THEN I am directed to their GitHub profile or to being writing an email to the member
WHEN I am prompted to add a team member
THEN I am given the option to designate them a manager, engineer, or intern
WHEN I select a role for a team member
THEN I enter their name, ID, and email, along with their office number for a manager, their GitHub username for an engineer, or the school for an intern
WHEN I am done entering information for a team member
THEN I am prompted to start a new team member or end the program
WHEN I finish building my team
THEN I exit the application and the HTML is generated
```

## Usage

This program is intended to be used by team leaders to create a roster for their project team with contact information for each team member.

## Installation

Upon forking this repository and cloning it, users must be certain to install inquirer and jest.

## Testing

Four tests are performed in the backend in order to confirm this program is functioning properly. These tests include:

## License

MIT License

Copyright (c) 2022 Elizabeth Larson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
