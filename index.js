// Inquirer imported dynamically to avoid errors
let inquirer;

import('inquirer')
  .then(module => {
    inquirer = module.default;
//modules imported
    const fs = require('fs/promises');
    const { Circle, Triangle, Square } = require('./lib/shapes');
// SVG class to create and render SVG elements
    class SVG {
      constructor() {
// Initialize text and shape elements
        this.textElement = '';
        this.shapeElement = '';
      }
// Combine text and shape elements into SVG string
      render() {
        return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='300' height='200'>${this.shapeElement}${this.textElement}</svg>`;
      }
    
      setTextElement(text, color) {
// Set text element with specified text and color
        this.textElement = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>`;
      }
    
      setShapeElement(shape) {
// Set shape element using the provided shape object
        this.shapeElement = shape.render();
      }
    }
// Define questions for user input in an array of objects
    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter 1 to 3 characters for your logo: ',
        validate: function (value) {
          const valid = value.length > 0 && value.length < 4;
          return valid || 'Please enter at least 1 character and no more than 3';
        },
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape: ',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for the text: ',
      },
    ];
// Function to write data to a file
    async function writeToFile(fileName, data) {
      console.log(`Writing [${data}] to file [${fileName}]`);
      try {
        await fs.writeFile(fileName, data);
        console.log('Congratulations, you have generated a logo.svg!');
      } catch (err) {
        console.error(err);
      }
    }
// Main initialization function        
    async function init() {
      console.log('Starting initialization');
      const svg_file = 'logo.svg';
    
      try {
// Collect user input using Inquirer
        const answers = await inquirer.prompt(questions);
// Log user choices    
        console.log(`Your logo characters are: ${answers.text}`);
        console.log(`You chose ${answers.shape} as the shape type`);
        console.log(`You chose ${answers.shapeColor} for the color of the shape`);
        console.log(`You chose ${answers.textColor} as the font color`);
// Map user's shape choice to corresponding class
        const shapeTypes = {
          'square': Square,
          'circle': Circle,
          'triangle': Triangle,
        };
    
        const selectedShapeType = answers.shape.toLowerCase();
        const ShapeClass = shapeTypes[selectedShapeType];
    
        if (ShapeClass) {
// Create selected shape and set color          
          const userShape = new ShapeClass();
          console.log(`User selected ${selectedShapeType.charAt(0).toUpperCase() + selectedShapeType.slice(1)} shape`);
          userShape.setColor(answers.shapeColor);
// Create the SVG object, set elements, and render it
          const svg = new SVG();
          svg.setTextElement(answers.text, answers.textColor);
          svg.setShapeElement(userShape);
    
          const svgString = svg.render();
// Write SVG string to file    
          console.log(`Displaying shape:\n\n${svgString}`);
          console.log('Shape generation complete!');
          console.log('Writing shape to file...');
    
          await writeToFile(svg_file, svgString);
        } else {
          console.log('Invalid shape!');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
// Start application    
    init();
  })
  .catch(error => {
    console.error('Failed to import inquirer:', error); //display error if inquirer fails to import properly
  });
