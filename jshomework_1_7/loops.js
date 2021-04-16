// первое задание: Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumNum(summa){
var counter = 0;
    summa = 0;
for(var i = 1; i <= 99; i += 1){
    if(i % 2 === 0){ 
    summa += i;
    counter++;
    }
}
    return 'Сумма: ' + summa + ', Количество: ' + counter;
}
//console.log(sumNum())

// второе задание: Проверить простое ли число? (число называется простым, 
// если оно делится только само на себя и на 1)
function simple(i) {
    var num = i;
    var flag = true;
for (let i = 2; i < num; i++) {
    if( num % i === 0) {
        flag = false;
        break;
    }
}
    return flag;
}
//console.log(simple(3));

//третье задание: Найти корень натурального числа с точностью до целого
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)*/
//последовательного подбора
function sqrt(num) {
var i = 1;
    while (i * i <= num){
    i++;
    }
    return i - 1
} 
// console.log(sqrt(100));

// бинарный поиск
function sqrt1(num) {
    var a = num;
    if (typeof num !== 'number') {
        return 'Введите число'
    }
while (num * num > a) {
    num = num / 2;
}
while (num * num < a) {
    num++;
   }
   return Math.floor(num);
}
// console.log(sqrt1(8));

//четвертое задание: Вычислить факториал числа n. n! = 1*2*…*n-1*n
function factorial(n) {
    var result = 1;
    if (typeof n !== 'number') {
        return 'Введите число'
    }
    while(n){
        result *= n--;
    }
    return result;
}
//console.log(factorial(5))

// пятое задание: Посчитать сумму цифр заданного числа
function sumNumber(num) {
var result = 0;
    if (typeof num !== 'number') {
    return 'Введите число'
}
    while(Math.floor(num) > 0){
    result += num % 10;
    num /= 10;
}
return Math.floor(result) 
}
console.log(sumNumber(3241))

module.exports = {
    sumNum,
    simple,
    sqrt,
    sqrt1,
    factorial,
    sumNumber
}







