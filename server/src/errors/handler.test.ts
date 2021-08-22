import * as handler from "./handler"
// @ponicode
describe("handler.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            handler.default(true, false, true, 254)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            handler.default({ inner: [false, true, false, false, false, false] }, "GET", true, 135)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            handler.default(false, true, false, 159)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            handler.default({ inner: [true, true, true, false, false, true] }, "PUT", false, 135)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            handler.default("error", "POST", 429, 250)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            handler.default(-Infinity, -Infinity, -Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
