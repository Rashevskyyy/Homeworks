// 1. Получить строковое название дня недели по номеру дня. 
function  day(num) {
    var day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    if (typeof num !== 'number')
    return 'Введите число от 1 до 7'
    if (num < 1 || num > 7)
    return 'Введите число от 1 до 7'
    return day[num - 1] 
}
// console.log(day(1))
// 2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function getDistance(x1, x2, y1, y2) {
    if (
        typeof x1 !== "number" ||
        typeof x2 !== "number" ||
        typeof y1 !== "number" ||
        typeof y2 !== "number"
    ) return 'Аргументы должны быть числами'
    return +Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(2)
}
// console.log(getDistance(1, 2, 3, 4))
// 3. Вводим число(0-999), получаем строку с прописью числа.
function getString(num){
    var str = "";
    var hundreds = ["", "сто", "двести", "триста", "четыреста",
        "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    var dozens = ["", "десять", "двадцать", "тридцать", "сорок",
        "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    var elevenToNineteen = ["", "одиннадцать", "двенадцать", "тринадцать",
        "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    var units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    var strZero = "ноль";
    
    if(num >= 0 && num <= 999){
      //сотни
        var indexOfhundreds = Math.floor(num/100);
        str += hundreds[indexOfhundreds] + " ";
    
        num = num % 100;
        if (num > 10 && num < 20){
        // от 11 до 19 (включительно)
        var indexElevenToNineteen = num%10;
        str += elevenToNineteen[indexElevenToNineteen] + " ";
        }
        else if(num >= 20 || num === 10){
        // десятки
        var indexDozens = Math.floor(num/10);
        str += dozens[indexDozens] + " ";
        if(num / 10 < 1){ //если есть 0 => 105
            var indexUnits = num%10;
            str += units[indexUnits];
        }
        //единицы
        var indexUnits = num%10;
        str += units[indexUnits];
        }
        else if (num > 0 && num < 10){
        str +=units[num];
        }
        else if(num%10 === 0){
        str += strZero;
        }
        return str;
    } 
    return "Incorrect input data";
}
console.log(getString(899));
function pseudoSplit(string, divideSign = '') {
    var result = []
    var word = ''
    if (typeof string !== 'string' || typeof divideSign !== 'string') return 'Введите строку'
    for (let i = 0; i < string.length; i++) {
        if (string[i] === divideSign) {
        result.push(word)
        word = ''
        }
        else word += string[i]
    }
    result.push(word)
    return result
}
function wordConvertToNumber(word) {
    var nums = {
        'один': 1, 'два': 2, 'три': 3, 'четыре': 4, 'пять': 5, 'шесть': 6,
        'семь': 7, 'восемь': 8, 'девять': 9, 'десять': 10, 'одиннадцать': 11,
        'двенадцать': 12, 'тринадцать': 13, 'четырнадцать': 14, 'пятнадцать': 15,
        'шестнадцать': 16, 'семнадцать': 17, 'восемнадцать': 18, 'девятнадцать': 19, 'двадцать': 20, 'тридцать': 30, 'сорок': 40, 'пятьдесят': 50,
        'шестьдесят': 60, 'семьдесят': 70, 'восемьдесят': 80, 'девяносто': 90, '': '', 'сто': 100, 'двести': 200, 'триста': 300, 'четыреста': 400,
        'пятьсот': 500, 'шестьсот': 600, 'семьсот': 700, 'восемьсот': 800, 'девятьсот': 900
    }
    if (typeof word !== 'string') return 'Введите строку'
    var wordArr = pseudoSplit(word.toLowerCase(), ' ')
    var result = 0
    for (var i = 0; i < wordArr.length; i++) {
        for (num in nums) {
        if (num === wordArr[i]) result += nums[num]
        }
    }
    return result
}
//console.log(wordConvertToNumber('Сто семьдесят пять'))

module.exports = {
    day,
    getDistance,
    getString,
    pseudoSplit,
    wordConvertToNumber
}