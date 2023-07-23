const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle, logo, Text } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter logo text up to three characters",
  },
  {
    type: "input",
    name: "color",
    message: "Enter a text color keyword (OR a hexadecimal number)",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword for shape color (OR a hexadecimal number)",
  },
];
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { text, color, shape, shapeColor } = answers;
    const svg = logo(text, color, shape, shapeColor);
    console.log(svg);
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });
}
init();
