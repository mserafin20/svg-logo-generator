const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<polygon points= "150, 18 244, 182 56, 182" fill="red" />`;
            const triangle = new Shape.Triangle();
            triangle.setShapeColor("red")
            expect(triangle.render()).toEqual(expected)
        })
    })
})