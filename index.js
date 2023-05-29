const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');


function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters of your choosing: "
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter a keyword for a color or a hexidecimal number to determine the color of your text: "
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose a shape from the list: ",
            choices: ['Square', 'Triangle', 'Circle'],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter a keyword or hexidecimal number to determine the color of your shape: "
        },
    ])

    .then(function (results) {
        let shapeOption = results.shape;
        let svgWrap;
        let shape;
        switch (shapeOption) {
            case "Triangle":
                shape = new Triangle()
                break;
            case "Circle":
                shape = new Circle()
                break;
             case "Square":
                shape = new Square()
                break;
            default:
                console.log('default');
                break;
        }
    })
}

init();