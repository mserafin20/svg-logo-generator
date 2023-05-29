const inquirer = require('inquirer');
const fs = require('fs');


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
}

init();