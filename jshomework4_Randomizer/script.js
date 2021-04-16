var generateButton = document.querySelector('.generate');
var resetButton = document.querySelector('.reset');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');
var mainForm = document.querySelector('.form');
var out = document.querySelector('.out');

var lastNumbers = [];
var clickCount = 0;

mainForm.addEventListener('submit', function (def){
    return def.preventDefault();
})

generateButton.addEventListener('click', generateClickHandler);

function generateClickHandler() {
    var minVal = +minNumber.value;
    var maxVal = +maxNumber.value;
    var randomNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

    if( minVal >= maxVal) {
        return out.innerHTML = "Минимальное число должно быть меньше максимального!";
    } else if (!minVal || !maxVal || minVal < 1){
        return out.innerHTML = "Введите диапазон от 1 до 100";
    } else if (!Number.isInteger(minVal) || !Number.isInteger(maxVal)) {
        return out.textContent = "Число должно быть целым";
    }

out.textContent = 'Generate number: ' + randomNum

if (clickCount === maxVal - minVal) {
    out.innerHTML = 'Generate number: <br> Elements are over'
    generateButton.disabled = true;
}
if (binarySearch(randomNum, lastNumbers) !== -1){
    return generateClickHandler();
}

clickCount++

if (clickCount) {
    minNumber.readOnly = true;
    maxNumber.readOnly = true;
}

lastNumbers.push(randomNum);
lastNumbers = insertionSort(lastNumbers) ;
}

resetButton.addEventListener('click', function () {
    generateButton.disabled = false;
    clickCount = 0;
    lastNumbers = [];
    minNumber.readOnly = false;
    maxNumber.readOnly = false;
})

function insertionSort(inputArr) {
    var n = inputArr.length;
    for (var i = 0; i < n; i++) {
        var current = inputArr[i]
        var j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
        inputArr[j + 1] = inputArr[j];
        j--
        }
        inputArr[j + 1] = current
    }
    return inputArr
}

function binarySearch(value, list) {
    var first = 0,
        last = list.length - 1,
        position = -1,
        found = false,
        middle = null;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2)
        if (list[middle] == value) {
            found = true
            position = middle
        } else if (list[middle] > value) {
        last = middle - 1;
        } else {
        first = middle + 1;
    }
}
    return position;
}