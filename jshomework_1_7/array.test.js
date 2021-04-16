var {
    arraysMin,
    arraysMax,
    indexMin,
    indexMax,
    sumArrays,
    reverse,
    neg,
    changePath,
    bubbleSort,
    insertSort,
    selectionSort} = require('./array')

describe('Array: Part 1', function() {
    it('should be defined', function() {
        expect(arraysMin).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof arraysMin).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(arraysMin('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(arraysMin('sad')).not.toBe(-50)
    })
    it('should be return min', function () {
        expect(arraysMin([15, 3, 4, 5, -50, 100, 19, 200])).toBe(-50)
    })
    it('should be return min', function () {
        expect(arraysMin([15, 3, 4, 5, -50, 100, 19, 200])).not.toBe("Введите массив")
    })
}) 
describe('Array: Part 2', function() {
    it('should be defined', function() {
        expect(arraysMax).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof arraysMax).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(arraysMax('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(arraysMax('sad')).not.toBe(200)
    })
    it('should be return max', function () {
        expect(arraysMax([15, 3, 4, 5, -50, 100, 19, 200])).toBe(200)
    })
    it('should be return max', function () {
        expect(arraysMax([15, 3, 4, 5, -50, 100, 19, 200])).not.toBe("Введите массив")
    })
}) 
describe('Array: Part 3', function() {
    it('should be defined', function() {
        expect(indexMin).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof indexMin).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(indexMin('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(indexMin('sad')).not.toBe(4)
    })
    it('should be return index min', function() {
        expect(indexMin([15, 3, 4, 5, -50, 100, 19, 200])).toBe('Индекс: ' + 4 + ' Число: ' + -50)
    })
    it('should be return index min', function() {
        expect(indexMin([15, 3, 4, 5, -50, 100, 19, 200])).not.toBe("Введите массив")
    })
})
describe('Array: Part 4', function() {
    it('should be defined', function() {
        expect(indexMax).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof indexMax).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(indexMax('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(indexMax('sad')).not.toBe(4)
    })
    it('should be return index max', function() {
        expect(indexMax([15, 3, 4, 5, -50, 100, 19, 200])).toBe('Индекс: ' + 7 + ' Число: ' + 200)
    })
    it('should be return index max', function() {
        expect(indexMax([15, 3, 4, 5, -50, 100, 19, 200])).not.toBe("Введите массив")
    })
})
describe('Array: Part 5', function() {
    it('should be defined', function() {
        expect(sumArrays).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof sumArrays).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(sumArrays('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(sumArrays('sad')).not.toBe(15)
    })
    it('should be result sumArrays', function() {
        expect(sumArrays([15, 3, 4, 5, 9, 7])).toBe(15)
    })
    it('should be result sumArrays', function() {
        expect(sumArrays([15, 3, 4, 5, 9, 7])).not.toBe("Введите массив")
    })
})
describe('Array: Part 6', function() {
    it('should be defined', function() {
        expect(reverse).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof reverse).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(reverse('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(reverse('sad')).not.toBe('200 19 100 -50 5 4 3 15 ')
    })
    it('should be result reverse', function() {
        expect(reverse([15, 3, 4, 5, -50, 100, 19, 200])).toBe('200 19 100 -50 5 4 3 15 ')
    })
    it('should be result reverse', function() {
        expect(reverse([15, 3, 4, 5, -50, 100, 19, 200])).not.toBe("Введите массив")
    })
})
describe('Array: Part 7', function() {
    it('should be defined', function() {
        expect(neg).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof neg).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(neg('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(neg('sad')).not.toBe(4)
    })
    it('should be result reverse', function() {
        expect(neg([15, 3, 4, 5, -50, 100, 19, 200])).toBe(4)
    })
    it('should be result reverse', function() {
        expect(neg([15, 3, 4, 5, -50, 100, 19, 200])).not.toBe("Введите массив")
    })
})
describe('Array: Part 8', function() {
    it('should be defined', function() {
        expect(changePath).toBeDefined();    
    })
    it('should be function', function(){
        expect(typeof changePath).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(changePath('sad')).toBe('Введите массив')
    })
    it('should be Array.isArray(arr) !== true', function(){
        expect(changePath('sad')).not.toBe([3, 4, 5, 1, 2])
    })
    it('should be result reverse', function() {
        expect(changePath([1, 2, 3, 4, 5])).toStrictEqual([3, 4, 5, 1, 2])
    })
    it('should be result reverse', function() {
        expect(changePath([1, 2, 3, 4, 5])).not.toStrictEqual("Введите массив")
    })
})
describe('Array: Part 9', function () {
    it('should be defined ', function () {
        expect(bubbleSort).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof bubbleSort).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(bubbleSort('sad')).toBe('Введите массив');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(bubbleSort('sad')).not.toStrictEqual([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(bubbleSort(4)).toBe('Введите массив');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(bubbleSort(4)).not.toBe([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
    it('should be bubbleSort ', function () {
        expect(bubbleSort([15, 3, 4, 5, -50, 100, 19, 200])).toStrictEqual([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
})
describe('Array: Part 10', function () {
    it('should be defined ', function () {
        expect(insertSort).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof insertSort).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(insertSort('sad')).toBe('Введите массив');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(insertSort('sad')).not.toStrictEqual([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(insertSort(4)).toBe('Введите массив');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(insertSort(4)).not.toBe([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
    it('should be insertSort', function () {
        expect(insertSort([15, 3, 4, 5, -50, 100, 19, 200])).toStrictEqual([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
})
describe('Array: Part 11', function () {
    it('should be defined ', function () {
        expect(selectionSort).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof selectionSort).toBe('function');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(selectionSort('sad')).toBe('Введите массив');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(selectionSort('sad')).not.toStrictEqual([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(selectionSort(4)).toBe('Введите массив');
    })
    it('should be Array.isArray(arr) !== true', function () {
        expect(selectionSort(4)).not.toBe([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
    it('should be insertSort', function () {
        expect(selectionSort([15, 3, 4, 5, -50, 100, 19, 200])).toStrictEqual([-50, 3, 4, 5, 15, 19, 100, 200]);
    })
})


