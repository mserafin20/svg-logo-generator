const Shape = require('./shapes')

describe("Shape", () => {
    describe("render",() => {
        it('Should return an instance of the shape class', () => {
            const expected = "";
            const shape = new Shape.Shape();
            expect(shape.render()).toEqual(expected)
        })
    })
})