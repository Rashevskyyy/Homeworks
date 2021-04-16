var {
        tickets,
        getPostsByAuthor,
        complexFunction,
        cache
} = require('./script')

describe('Dragone', function() {
    it('should be defined', function() {
        expect(tickets).toBeDefined();    
    });
    it('should be function', function(){
        expect(typeof tickets).toBe('function');
    });
    test.each([
        [[25, 25, 50], `Yes`],
        [[25, 50, 100], `No`],
        [[`25`, `25`, `50`, `100`], `Yes`],
        [[`25`, `50`, `100`], `No`],
    ])(`testing %s with expected result %s`, function (arg1, result) {
        expect(tickets(arg1)).toBe(result)
    });
    test.each([
        [[25, 25, 50], `No`],
        [[25, 50, 100], `Yes`],
        [[`25`, `25`, `50`, `100`], `No`],
        [[`25`, `50`, `100`], `Yes`],
    ])(`testing %s with expected result %s`, function (arg1, result) {
        expect(tickets(arg1)).not.toBe(result)
    });
});
describe("complexFunction", function () {
    it("should be defined ", function () {
        expect(complexFunction).toBeDefined();
    });
    it("should be function", function () {
        expect(typeof complexFunction).toBe("function");
    });
    it("should be without arguments", function () {
        expect(complexFunction()).toBe(NaN);
    });
    it("should be only with one string argument", function () {
        expect(complexFunction("heh")).toBe("hehundefined");
    });
    it("should be only with one number argument", function () {
        expect(complexFunction(1)).toBe(NaN);
    });
    it("should be only with one number argument", function () {
        expect(complexFunction(1)).toBe(NaN);
    });
    it("should be  with one number argument and with second string argument", function () {
        expect(complexFunction(1, "da")).toBe("1da");
    });
    it("should be  with one string argument and with second number argument", function () {
        expect(complexFunction("da", 1)).toBe("da1");
    });
});
describe('cache', function () {
    it('should be defined ', function () {
        expect(cache).toBeDefined()
    });
    it('should be function', function () {
        expect(typeof cache).toBe('function');
    });
    it('return function', function () {
        expect(typeof cache()).toBe('function');
    });
    it('if arguments in cache', function () {
        var complexFunction = jest.fn()
        var func = cache(complexFunction)
        func('1', 2)
        func('1', 2)
        func('1', 2)
        func('1', 2)
        expect(complexFunction).toBeCalledTimes(1);
    });
    it('if diffrent arguments', function () {
        var complexFunction = jest.fn()
        var func = cache(complexFunction)
        func('1', 2)
        func('1', 2)
        func('1', 3)
        func('1', 2)
        expect(complexFunction).toBeCalledTimes(2);
    });
});

