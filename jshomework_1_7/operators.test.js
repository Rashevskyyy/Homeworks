var {
    getSumOrMultiply,
    getQuarterByCoordinates,
    sumPlus,
    sumMax,
    getRate
} = require('./operators')

describe('Operators: Part 1', function() {
    it('should be defined', function() {
    expect(getSumOrMultiply).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof getSumOrMultiply).toBe('function');
    })
    it('should be typeof', function(){
        expect(getSumOrMultiply('sad')).toBe('Введите число')
    })
    it('should be typeof', function(){
        expect(getSumOrMultiply('sad')).not.toBe('result')
    })
    it('should be num1 * num2', function(){
        expect(getSumOrMultiply(6, 5)).toBe(30)
    })
    it('should be num1 * num2', function(){
        expect(getSumOrMultiply(6, 5)).not.toBe(11)
    })
    it('should be num1 * num2', function(){
        expect(getSumOrMultiply(6, 5)).not.toBe('Введите число')
    })
    it('should be num1 + num2', function(){
        expect(getSumOrMultiply(5, 6)).toBe(11)
    })
    it('should be num1 + num2', function(){
        expect(getSumOrMultiply(5, 6)).not.toBe(30)
    })
    it('should be num1 + num2', function(){
        expect(getSumOrMultiply(5, 6)).not.toBe('Введите число')
    })
    it('should be a number zero', function(){
        expect(getSumOrMultiply(0, 2)).toBe(0)
    })
    it('should be a num1', function(){
        expect(getSumOrMultiply(5)).toBe('Введите число')
    })
    it('should be a num1', function(){
        expect(getSumOrMultiply(5)).not.toBe(5)
    })
    
})
describe('Operators: Part 2', function() {
    it('should be defined', function() {
        expect(getQuarterByCoordinates).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof getQuarterByCoordinates).toBe('function');
    })
    it('should be typeof', function(){
        expect(getQuarterByCoordinates('sad')).toBe('Введите число')
    })
    it('should be typeof', function(){
        expect(getQuarterByCoordinates('sad')).not.toBe('result');
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).toBe('точка лежит в первой четверти')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x > 0 && y > 0', function(){
        expect(getQuarterByCoordinates(6, 5)).not.toBe('Введите число')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).toBe('точка лежит во второй четверти')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x < 0 && y > 0', function(){
        expect(getQuarterByCoordinates(-5, 5)).not.toBe('Введите число')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).toBe('точка лежит в четвертой четверти')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x > 0 && y < 0', function(){
        expect(getQuarterByCoordinates(6, -5)).not.toBe('Введите число')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).toBe('точка лежит в третьей четверти')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x < 0 && y < 0', function(){
        expect(getQuarterByCoordinates(-6, -5)).not.toBe('Введите число')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x === 0 && y > 0', function(){
        expect(getQuarterByCoordinates(0, 5)).not.toBe('Введите число')
    })
    
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x === 0 && y < 0', function(){
        expect(getQuarterByCoordinates(0, -5)).not.toBe('Введите число')
    })

    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x > 0 && y === 0', function(){
        expect(getQuarterByCoordinates(5, 0)).not.toBe('Введите число')
    })

    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('точка лежит в начале координат')
    })
    it('should be  x < 0 && y === 0', function(){
        expect(getQuarterByCoordinates(-5, 0)).not.toBe('Введите число')
    })

    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).toBe('точка лежит в начале координат')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит в первой четверти')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит во второй четверти')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит в третьей четверти')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит в четвертой четверти')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит между 1 и 2 четвертью на оси Y')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит между 3 и  4 четвертью на оси Y')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит между 1 и 4 четвертью на оси Х')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('точка лежит между 2 и 3 четвертью на оси Х')
    })
    it('should be  x === 0 && y === 0', function(){
        expect(getQuarterByCoordinates(0, 0)).not.toBe('Введите число')
    })
})
describe('Operators: Part 3', function() {
    it('should be defined', function() {
        expect(sumPlus).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof sumPlus).toBe('function');
    })
    it('should be typeof', function(){
        expect(sumPlus('sad')).toBe('Введите массив')
    })
    it('should be typeof', function(){
        expect(sumPlus('sad')).not.toBe(13)
    })
    it('should be typeof', function(){
        expect(sumPlus(3, 4)).toBe('Введите массив')
    })
    it('should be typeof', function(){
        expect(sumPlus(3, 4)).not.toBe(13)
    })
    it('should be typeof', function(){
        expect(sumPlus([-2, 5,-9, 7, 1, 0])).toBe(13)
    })
    it('should be array[i] > 0', function(){
        expect(sumPlus([-2, 5,-9, 7])).toBe(12)
    })
    it('should be array[i] > 0', function(){
        expect(sumPlus([-2, 5,-9, 7])).not.toBe('Введите массив')
    })

})
describe('Operators: Part 4', function() {
    it('should be defined', function() {
        expect(sumMax).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof sumMax).toBe('function');
    })
    it('should be typeof', function(){
        expect(sumMax('sad')).toBe('Введите число')
    })
    it('should be multi > summa', function(){
        expect(sumMax(-2, 2, 3)).toBe(6)
    })
    it('should be multi > summa', function(){
        expect(sumMax(-2, 2, 3)).not.toBe(-12)
    })
    it('should be multi < summa', function(){
        expect(sumMax(5, 5, 5)).toBe("max: 128")
    })
    it('should be multi < summa', function(){
        expect(sumMax(5, 5, 5)).not.toBe("max: 15")
    })
    
})

describe('Operators: Part 5', function() {
    it('should be defined', function() {
        expect(getRate).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof getRate).toBe('function');
    })
    it('should be typeof', function(){
        expect(getRate('sad')).toBe('Введите число')
    })
    it('should be rating F', function(){
        expect(getRate(15)).toBe('F')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('E')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('D')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('C')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('B')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('A')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('Введите число от 0 до 100')
    })
    it('should be rating F', function(){
        expect(getRate(15)).not.toBe('Введите число')
    })

    it('should be rating E', function(){
        expect(getRate(21)).toBe('E')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('F')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('D')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('C')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('B')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('A')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('Введите число от 0 до 100')
    })
    it('should be rating F', function(){
        expect(getRate(21)).not.toBe('Введите число')
    })

    it('should be rating E', function(){
        expect(getRate(42)).toBe('D')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('F')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('E')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('C')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('B')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('A')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('Введите число от 0 до 100')
    })
    it('should be rating D', function(){
        expect(getRate(42)).not.toBe('Введите число')
    })

    it('should be rating C', function(){
        expect(getRate(61)).toBe('C')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('F')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('E')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('D')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('B')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('A')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('Введите число от 0 до 100')
    })
    it('should be rating C', function(){
        expect(getRate(61)).not.toBe('Введите число')
    })

    it('should be rating B', function(){
        expect(getRate(76)).toBe('B')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('F')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('E')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('C')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('D')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('A')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('Введите число от 0 до 100')
    })
    it('should be rating B', function(){
        expect(getRate(76)).not.toBe('Введите число')
    })

    it('should be rating A', function(){
        expect(getRate(95)).toBe('A')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('F')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('E')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('C')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('D')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('B')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('Введите число от 0 до 100')
    })
    it('should be rating A', function(){
        expect(getRate(95)).not.toBe('Введите число')
    })
})