//Main Shape class
class Shape {
  constructor() {
    this.color = ''
  }
  setColor(color) {
    this.color=(color);
  }
}

//Subclass circle extending shape class

class Circle extends Shape {
  render() {
    return `<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill="${this.color}'>` 
  }
}