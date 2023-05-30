const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<circle cx="50" cy="50" r="40" fill:"red" />`;
            const circle = new Shape.Circle();
            // circle.setShapeColor("red")
            expect(circle.render()).toEqual(expected)
        })
    })
})


