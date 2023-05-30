const Shape = require("./shapes")


describe("Shape", () => {
    describe("render", () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const expected = `<polygon points="215,5 320,210 130,210" fill:"red" />`;
            const triangle = new Shape.Triangle();
            triangle.setShapeColor("red")
            expect(triangle.render()).toEqual(expected)
        })
    })
})