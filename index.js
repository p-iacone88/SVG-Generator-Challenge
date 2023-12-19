const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');

class SVG {
  constructor() {
    this.textElement = ''
    this.shaeElement = ''
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>` 
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render()
  }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter 1 to 3 characters for your logo: '
  },
  {
    type: 'input',
    name: 'shape',
    message: 'What color do you want your logo background to be?: ', 
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shape-color',
    message: 'What color do you want your logo background to be?: ' 
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'Please enter the color you would like for your logo text: ' 
  }
];

