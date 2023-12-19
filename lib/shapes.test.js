const {Circle, Square, Triangle} = require("./shapes")
//importing Shapes from the shapes.js

describe('Circle', () => {
  it('should be a properly rendered circle', () => {
    const shape = new Circle();
    let color=('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${color}'/>`);
  });
});

describe('Triangle', () => {
  it('should be a properly rendered triangle', () => {
    const shape = new Triangle();
    let color = ('blue');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height='100%' width='100%' points='5, 190 300, 190 150, 5' fill='${color}'/>`)
  });
});

describe('Square', () => {
  it('should be a correctly properly square', () => {
    const shape = new Square();
    let color = ('orange');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x='50' height='200' width='200' fill='${color}'/>`)
  });
});