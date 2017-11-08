/*
Every и some
У массивов есть ещё стандартные методы every и some.
Они принимают как аргумент некую функцию, которая,
будучи вызванной с элементом массива в качестве
аргумента, возвращает true или false. Так же, как &&
возвращает true, только если выражения с обеих сторон
оператора возвращают true, метод every возвращает true,
когда функция возвращает true для всех элементов
массива. Соответственно, some возвращает true, когда
заданная функция возвращает true при работе хотя бы с
одним из элементов массива. Они не обрабатывают
больше элементов, чем необходимо – например, если
some получает true для первого элемента, он не
обрабатывает оставшиеся.
Напишите функции every и some, которые работают так
же, как эти методы, только принимают массив в качестве
аргумента.
// Ваш код тут
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
*/

// Ваш код тут
function every(array, condition) {
  var flag = true
  while (flag == true) {
    array.forEach(function(element) {
      if (condition(element) == false) {
        flag = false;
      }
    return flag;
    });
  return flag;
  }
}

function some(array, condition) {
  var flag = true, returnFlag = false;
  while (flag == true) {
    array.forEach(function(element) {
      if (condition(element) == true) {
        flag = true;
      } else {
        returnFlag = true;
      }
    return returnFlag;
    });
  return returnFlag;
  }
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
