const {Circle, Square, Triangle} = require("./shapes")
//importing Shapes from the shapes.js

//Test suite for Circle class
describe('Circle', () => {
  it('should be a properly rendered circle', () => {
    const shape = new Circle(); //create new Circle instance
    let color=('green')  
    shape.setColor(color);  // set color
    expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${color}'/>`);// Expect the rendered Circle to match the expected SVG string
  });
});

// Test suite for Triangle class
describe('Triangle', () => {
  it('should be a properly rendered triangle', () => {
    const shape = new Triangle(); // create new Triangle instance
    let color = ('blue');
    shape.setColor(color); // set color
    expect(shape.render()).toEqual(`<polygon height='100%' width='100%' points='5, 190 300, 190 150, 5' fill='${color}'/>`)// Expect the rendered Triangle to match the expected SVG string
  });
});

// Test suite for Square class
describe('Square', () => {
  it('should be a correctly properly square', () => {
    const shape = new Square(); // create new Square instance
    let color = ('orange');
    shape.setColor(color); // set color
    expect(shape.render()).toEqual(`<rect x='50' height='200' width='200' fill='${color}'/>`) // Expect the rendered Square to match the expected SVG string
  });
});