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
  for (var i = 0; i < array.length; i++) {
    if (!condition(array[i]))
      return false;
  }
  return true;
}

function some(array, condition) {
  for (var i = 0; i < array.length; i++) {
    if (condition(array[i]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
