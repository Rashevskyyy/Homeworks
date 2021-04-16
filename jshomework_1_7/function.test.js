var {
    day,
    getDistance,
    getString,
    pseudoSplit,
    wordConvertToNumber
} = require('./function')

describe('Function: Part 1', function() {
    it('should be defined', function() {
        expect(day).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof day).toBe('function');
    })
    it('should be num != number', function () {
        expect(day()).toBe('Введите число от 1 до 7');
    })
    it('number<1', function () {
        expect(day()).toBe('Введите число от 1 до 7');
    })
    it('number>7', function () {
        expect(day()).toBe('Введите число от 1 до 7');
    })
    it('should be day', function () {
        expect(day(2)).toBe('Вторник');
    })
})
describe('Function: Part 2', function () {
    it('should be defined ', function () {
        expect(getDistance).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof getDistance).toBe('function')
    })
    it('should be args != number', function () {
        expect(getDistance(1, 2)).toBe('Аргументы должны быть числами')
    })
    it('should be getDistance', function () {
        expect(getDistance(2, 3, 1, 2)).toBe(1.41)
    })
})
describe('Function: Part 3', function(){
    it('should be defined', function(){
        expect(getString).toBeDefined();
    })
    test.each([
        ["str", "Incorrect input data"],
        [-1, "Incorrect input data"],
        [0, " ноль"],
        [11, " одиннадцать "],
        [20, " двадцать "],
        [1, " один"],
        
    ])('testing %s with expected result %s', function(num, result) {
        expect(getString(num)).toBe(result);
    })
    test.each([
        ["str", "number with float"],
        ["str", "ноль"],
        ["str", "девятьсот "],
        [1.8, "only number"],
        [1.8, "Incorrect input data"],
        [1.8, "ноль"],
        [1.8, " одиннадцать "],
        [-1, "only number"],
        [-1, "number with float"],
        [-1, "ноль"],
        [-1, " двадцать "],
        [0, "only number"],
        [0, "number with float"],
        [0, "Incorrect input data"],
        [0, " двадцать "],
        [1, "ноль"],
        [1, "only number"], 
        [1, "number with float"],
        [1, "Incorrect input data"],
        
    ])('testing %s with expected result %s', function(num, result) {
        expect(getString(num)).not.toBe(result);
    })
})
describe('Function: Part 3', function () {
    it('should be defined ', function () {
        expect(pseudoSplit).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof pseudoSplit).toBe('function')
    })
    it('should be args != number', function () {
        expect(pseudoSplit(2)).toBe('Введите строку')
    })
    it('should be args != number', function () {
        expect(pseudoSplit(21, '')).toBe('Введите строку')
    })
    it('should be args != number', function () {
        expect(pseudoSplit('2 2 1', ' ')).toStrictEqual(['2', '2', '1'])
    })
})

describe('Function: Part 3.1', function () {
    it('should be defined ', function () {
        expect(wordConvertToNumber).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof wordConvertToNumber).toBe('function')
    })
    it('should be args != string', function () {
        expect(wordConvertToNumber(2)).toBe('Введите строку')
    })
    it('if wordConvertToNumber', function () {
        expect(wordConvertToNumber('семьсот двадцать один')).toBe(721)
    })
})