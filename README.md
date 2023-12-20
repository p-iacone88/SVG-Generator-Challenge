# SVG Generator

## Description

This Node.js command-line application is a practical tool for quick and easy SVG logo creation. This project provides a readily available, DIY solution for generating logos. Building this application pushed me to master new skills and concepts while practicing a practical application for Object-Based-Programming. I delved deeper into object oriented programming (OOP), Node.js, Jest for running the unit tests, Inquirer for collecting input from the user, explored the details of SVG file creation, and gained valuable experience in building a user-friendly command-line interface. The process also highlighted the importance of modularity and code organization, as I structured the application for clean and maintainable code.

Through this command line application the user can choose up to 3 characters for the logo text, choose one of three shapes, choose a background color for the shape, as well as choose the font color for the logo text. A logo.svg file will be created in the same directory which the user can open in a browser before incorporating into a webpage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthroug-video)
- [Sample SVGs](#sample-svgs)
- [Testing](#testing)
- [Testing Video](#testing-video)
- [Credits](#credits)

## Installation

1. Clone this repository

```bash
git clone https://github.com/p-iacone88/svg-logo-maker.git
```

2. Navigate to project directory

```bash
cd svg-logo-maker
```

3. Install dependencies

```bash
npm install
```

## Usage

1. Run the application

```bash
node index.js
```

2. Follow the prompts to:

- Enter the text for your logo (at least 1 character and no more than 3)
- Select the shape of the logo
- Select the background color of your shape
- Select the font color for your logo

3. The application will generate a log.svg file in the same directory

4. Open logo.svg in a browser to view your custom logo!

## Walkthrough Video

https://drive.google.com/file/d/1IAwdGeNST51Lqpu55Y8Y7zyuHu9mnZLM/view

## Sample SVGs

![Screenshot 2023-12-20 at 5 34 22 PM](https://github.com/p-iacone88/SVG-Generator-Challenge/assets/50248763/f3cd7460-a2f9-4793-a30e-8a6084123088)

![Screenshot 2023-12-20 at 5 34 30 PM](https://github.com/p-iacone88/SVG-Generator-Challenge/assets/50248763/12152cbd-a5ec-430b-afbc-8aa225af3112)

![Screenshot 2023-12-20 at 5 34 38 PM](https://github.com/p-iacone88/SVG-Generator-Challenge/assets/50248763/88368043-a2b9-40d0-9ed6-f8e966b39bd8)

## Testing

Run unit tests using Jest:

```bash
npm test
```

## Testing Video

https://drive.google.com/file/d/177pdorjdLFmrO-EAo9dWIANO3rhAYEj-/view

## Credits

Project inspired by the edX Full-Stack Web Development Boot Camp.
Personal tutoring provided by Alexis San Javier and Dru Sanchez.

SVG resources:

- W3Schools SVG Tutorial : https://www.w3schools.com/graphics/svg_intro.asp
- MDN Web Docs SVG Tutorial: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
