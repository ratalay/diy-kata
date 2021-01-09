const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
 it("returns yes for true, no for false", () => {
   expect(booleanToWord(true)).toBe('Yes')
   expect(booleanToWord(false)).toBe('No')
   
 })
})