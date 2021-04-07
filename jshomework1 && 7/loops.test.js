var {
    sumNum,
    simple,
    sqrt,
    sqrt1,
    factorial,
    sumNumber
} = require('./loops')

describe('Loops: Part 1', function () {
    it('should be defined ', function () {
        expect(sumNum).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof sumNum).toBe('function');
    })
    it('call function', function () {
        expect(sumNum()).toBe('Сумма: 2450, Количество: 49');
    })
})
describe('Loops: Part 2', function () {
    it('should be defined ', function () {
        expect(simple).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof simple).toBe('function');
    })
    it('should be num % i === 0', function() {
        expect(simple(3)).toBe(true)
    })
    it('should be num % i === 0', function() {
        expect(simple(3)).not.toBe(false)
    })
    it('should be num % i === 0', function() {
        expect(simple(4)).not.toBe(true)
    })  
})
describe('Loops: Part 3.1', function () {
    it('should be defined ', function () {
        expect(sqrt).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof sqrt).toBe('function');
    })
    it('should be i * i <= num', function() {
        expect(sqrt(100)).toBe(10)
    })
    it('should be i * i <= num', function() {
        expect(sqrt(100)).not.toBe(100)
    })
})
describe('Loops: Part 3.2', function () {
    it('should be defined ', function () {
        expect(sqrt1).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof sqrt1).toBe('function');
    })
    it('should be num * num > a', function() {
        expect(sqrt1(8)).toBe(3)
    })
    it('should be num * num > a', function() {
        expect(sqrt1(8)).not.toBe(2)
    })
    it('should be num !== number', function () {
        expect(factorial('sad')).toBe('Введите число')
    })
    it('should be num !== number', function () {
        expect(factorial('sad')).not.toBe(3)
    })
})
describe('Loops: Part 4', function () {
    it('should be defined ', function () {
        expect(factorial).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof factorial).toBe('function');
    })
    it('should be result', function () {
        expect(factorial(5)).toBe(120)
    })
    it('should be result', function () {
        expect(factorial(5)).not.toBe(25)
    })
    it('should be n !== number', function () {
        expect(factorial('sad')).toBe('Введите число')
    })
    it('should be n !== number', function () {
        expect(factorial('sad')).not.toBe(120)
    })
})
describe('Loops: Part 5', function () {
    it('should be defined ', function () {
        expect(sumNumber).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof sumNumber).toBe('function');
    })
    it('should be n !== number', function () {
        expect(sumNumber('sad')).toBe('Введите число')
    })
    it('should be n !== number', function () {
        expect(sumNumber('sad')).not.toBe(10)
    })
})
