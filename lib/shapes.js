class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;

        if(text.length > 3) {
            throw new Error('Text can only be 3 or less characters');
        };
    } 
}








module.exports = {Shape, Circle, Triangle, Square}