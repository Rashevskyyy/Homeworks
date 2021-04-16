// первое задание: Если а – четное посчитать а*б, иначе а+б
function getSumOrMultiply(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
      return 'Введите число';
    }
    var result = 0;
    if(num1  % 2 === 0) {
        result = num1 * num2
    } else {
        result = num1 + num2
    }
    return result;
}
var result1 = getSumOrMultiply(5, 6)
// console.log(result1)
var result2 = getSumOrMultiply(6, 5)
// console.log(result2)

// второе задание: Определить какой четверти принадлежит точка с координатами (х,у)
function getQuarterByCoordinates(x, y) {
  if(typeof x !== 'number' || typeof y !== 'number'){
    return 'Введите число';
  }
  var result = "";
    if (x > 0 && y > 0) {
      result = "точка лежит в первой четверти";
    } else if (x < 0 && y > 0) {
      result = "точка лежит во второй четверти";
      } else if (x < 0 && y < 0) {
      result = "точка лежит в третьей четверти";
      } else if (x > 0 && y < 0) {
      result = "точка лежит в четвертой четверти";
      } else if (x === 0 && y > 0) {
      result = "точка лежит между 1 и 2 четвертью на оси Y";
      } else if (x === 0 && y < 0) {
      result = "точка лежит между 3 и  4 четвертью на оси Y";
      } else if (x > 0 && y === 0) {
      result = "точка лежит между 1 и 4 четвертью на оси Х";
      } else if (x < 0 && y === 0) {
      result = "точка лежит между 2 и 3 четвертью на оси Х";
      } else {  (x === 0 && y === 0 ) 
      result = "точка лежит в начале координат";
      }
        return result
}
// var result1 = getQuarterByCoordinates(6, 5);
// console.log(result1)
// var result2 = getQuarterByCoordinates(-3, 4);
// console.log(result2)
// var result3 = getQuarterByCoordinates(0, 0);
// console.log(result3)
// var result4 = getQuarterByCoordinates(5, 0);
// console.log(result4)
// var result5 = getQuarterByCoordinates(0, -5);
// console.log(result5)


// третье задание: Найти суммы только положительных из трех чисел
function sumPlus(array) {
  if(Array.isArray(array) !== true){
    return "Введите массив"
  }
  var result = 0;
    for (var i = 0; i < array.length; i++) {
      if(array[i] > 0) {
        result += array[i];
      }
    }
    return  result;
}
//console.log(sumPlus([-2, 5,-9, 7, 1, 0]))
// console.log(sumPlus(2, 5))

//четвертое задание: Посчитать выражение (макс(а*б*с, а+б+с))+3
function sumMax(a, b, c) {
  if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    return 'Введите число';
  }
  var summa = a + b + c;
  var multi=a * b * c;
  var max = 0;
    if(multi > summa){
    max = multi+3;
    return "max: " + max;
} else {
  max = summa + 3;
}
  return max;
}
// console.log(sumMax(5, 5, 5));

// пятое задание: Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function getRate(rate) {
  if(typeof rate !== 'number'){
    return 'Введите число';
  }
  if (rate >= 0 && rate <= 19) 
  return 'F'
  else if (rate >= 20 && rate <= 39)
  return 'E'
  else if (rate >= 40 && rate <= 59) 
  return 'D'
  else if (rate >= 60 && rate <= 74) 
  return 'C'
  else if (rate >= 75 && rate <= 89) 
  return 'B'
  else if (rate >= 90 && rate <= 100) 
  return 'A'
  else return 'Введите число от 0 до 100'
}
// console.log(getRate(65))

module.exports = {
  getSumOrMultiply,
  getQuarterByCoordinates,
  sumPlus,
  sumMax,
  getRate
}