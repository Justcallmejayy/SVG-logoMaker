class Shape {
  constructor() {
    this.shapeColor = "";
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}'/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill='${this.shapeColor}'/>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="100" fill='${this.shapeColor}'/>`;
  }
}

class Text {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  setText(text) {
    this.text = text;
  }
  render() {
    return `<text x="65" y="100" class="text" fill="${this.textColor}">${this.text}</text>`;
  }
}

function logo(text, textColor, shape, shapeColor) {
  let newShape;
  let newText = new Text();
  switch (shape) {
    case "Triangle":
      newShape = new Triangle();
      break;
    case "Square":
      newShape = new Square();
      break;
    case "Circle":
      newShape = new Circle();
      break;
  }
  newShape.setColor(shapeColor);
  newText.setTextColor(textColor);
  newText.setText(text);
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <style>
        .text { font: bold 48px monospace; }
    </style>
   <p> hi </p>
    <g transform="translate(0, 0)">
    ${newShape.render()}
        ${newText.render()}
    </g>
</svg>`;
}

module.exports = { Circle, Square, Triangle, logo, Text };
