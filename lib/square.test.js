const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<rect x="50" y="20" width="150" height="150" fill:"red" />`;
            const square = new Shape.Square();
            // square.setShapeColor("red")
            expect(square.render()).toEqual(expected)
        })
    })
})