const {Circle, Square, Triangle} = require("./shapes")
//importing Shapes from the shapes.js

describe('Circle', () => {
  it('should be a correctly rendered circle', () => {
    const shape = new Circle();
    var color=('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
  })
})
