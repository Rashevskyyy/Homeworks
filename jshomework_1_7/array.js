// 1. Минимальный эллемент массива
function arraysMin(arr) {
    var min = arr[0];
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
    for(var i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
                min = arr[i];
            }        
        }
        return min;
    }
        
//console.log(arraysMin([15, 3, 4, 5, -50, 100, 19, 200]));
// console.log(arraysMin(14, 4, 5));
// 2. Максимальный элемент массива
function arraysMax(arr) {
    var max = arr[0];
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
                max = arr[i];
            }        
        }
        return max;
    }
        
//console.log(arraysMax([15, 3, 4, 5, -50, 100, 19, 200]));
//3. Найти индекс минимального элемента массива
function indexMin(arr) {
    var min = arr[0];
    var index = 0;
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] < min) {
                min = arr[i];
                index = i;
        }
    }   
    return 'Индекс: ' + index + ' Число: ' + min;
}
//console.log(indexMin([15, 3, 4, 5, -50, 100, 19, 200]))
// 4. Найти индекс максимального элемента массива 
function indexMax(arr) {
    var max = arr[0];
    var index = 0;
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
        for(var i = 0; i < arr.length; i++){
            if(max < arr[i]) {
                max = arr[i];
                index = i;
        }   
    }   
    return  'Индекс: ' + index + ' Число: ' + max;
}
//console.log(indexMax([15, 3, 4, 5, -50, 100, 19, 200]))
//5. Посчитать сумму элементов массива с нечетными индексами
function sumArrays(arr) {
    var result = 0;
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
    for(i = 1; i < arr.length; i++) {
        result += arr[i];
        i++;
    }
    return result;        
}
// console.log(sumArrays([15, 3, 4, 5, 9, 7]))
//6.	Сделать реверс массива (массив в обратном направлении)
function reverse(arr) {
    var result = '';
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
    for(i = arr.length; i > 0; i--) {
        result += arr[i - 1] + ' ';
    }
    return result;
}
//console.log(reverse([15, 3, 4, 5, -50, 100, 19, 200]))
//7.	Посчитать количество нечетных элементов массива
function neg(arr) {
    var result = 0;
    if(Array.isArray(arr) !== true){
        return "Введите массив"
    }
    for(i = 0; i < arr.length; i++) {
        if( arr[i] % 2 != 0) {
            result += 1;
        }
    }
    return result;
}
//console.log(neg([15, 3, 4, 5, -50, 100, 19, 200]))
// 8.	Поменять местами первую и вторую половину массива, 
// например, для массива  1 2 3 4, результат 3 4 1 2

function changePath(arr) {
    if (!Array.isArray(arr)) {
        return 'Введите массив'
    }
    var firstPartLen = Math.floor(arr.length / 2),
    secondPartLen = arr.length - firstPartLen,
        newArr = []
    for (i = 0; i < secondPartLen; i++) {
        newArr[i] = arr[i + firstPartLen]
    }
    for (i = 0; i < firstPartLen; i++) {
        newArr[i + secondPartLen] = arr[i]
    }
    return newArr
}
//console.log(changePath([1, 2, 3, 4, 5]));
//  9. Задание сортировкой: Bubble
function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        return 'Введите массив'
    }
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
}
//console.log(bubbleSort([15, 3, 4, 5, -50, 100, 19, 200]))
//Insert
function insertSort(arr) {
    if (!Array.isArray(arr)) {
        return 'Введите массив'
    }
    for (var i = 1, l = arr.length; i < l; i++) {
        var current = arr[i]
        for (k = i; k > 0 && arr[k - 1] > current; k--) {
        arr[k] = arr[k - 1]
    }
        arr[k] = current
    }
    return arr
}
//console.log(insertSort([15, 3, 4, 5, -50, 100, 19, 200]))
//Select
function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        return 'Введите массив'
    }
    for (var i = 0; i < arr.length - 1; i++) {
        var indexMin = i
        for (var k = i + 1; k < arr.length; k++) {
        if (arr[indexMin] > arr[k]) {
            indexMin = k
        }
    }
    if (indexMin !== i) {
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
}
    return arr;
}
console.log(selectionSort([15, 3, 4, 5, -50, 100, 19, 200]))

module.exports = { 
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
    selectionSort
}