describe('test', () => {
    test('test', () => {
        const goodPassword = "acbdjgf13839!!!";
        const tooShort = "short1!";
        const noNum = "passwordword!!";
        const noSpecial = "passwordword1111";
        const whiteSpace = "hello world1!";


        expect(passwordValidation(goodPassword)).toBe(true);
// expect(passwordValidation(goodPassword)).to.be.true();
        expect(passwordValidation(tooShort).errors[0]).to.be.instanceof(Error);
        expect(passwordValidation(noNum).errors[0]).to.be.instanceof(Error);
        expect(passwordValidation(noSpecial).errors[0]).to.be.instanceof(Error);
        expect(passwordValidation(whiteSpace).errors[0]).to.be.instanceof(Error);

    });
});