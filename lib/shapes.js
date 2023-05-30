class Shape {
    constructor() {
        this.text = "", this.textColor = "", this.shapeColor = ""
    } 
    setText(text) {
        this.text = text
    }
    setTextColor(textColor) {
        this.textColor = textColor
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
        return "";
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="215,5 320,210 130,210" fill:"${this.shapeColor}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill:"${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" fill:"${this.shapeColor}" />`
    }
}


module.exports = { Shape, Circle, Triangle, Square }