//Main Shape class
class Shape {
  constructor() {
    this.color = ''
  }
  setColor(color) {
    this.color=(color);
  }
}

//Subclass Circle extending Shape class

class Circle extends Shape {
  render() {
    return `<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill="${this.color}'>` 
  }
}

//Subclass Triangle extending Shape class

class Triangle extends Shape {
  render() {
    return `<polygon height='100%' width='100%' points='5, 190 300, 190 150, 5' fill='${this.color}'>`
  }
}

//Subclass Square extending Shape class

class Square extends Shape {
  render() {
    return `<rect x='50' height='200' width='200' fill='${this.color}'>`
  }
}

module.exports = {Circle, Triangle, Square}