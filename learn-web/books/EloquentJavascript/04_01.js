/*
Сумма диапазона
Во введении был упомянут удобный способ подсчёта
сумм диапазонов чисел:
console.log(sum(range(1, 10)));
Напишите функцию range, принимающую два аргумента –
начало и конец диапазона – и возвращающую массив,
который содержит все числа из него, включая начальное
и конечное.
Затем напишите функцию sum, принимающую массив
чисел и возвращающую их сумму. Запустите указанную
выше инструкцию и убедитесь, что она возвращает 55.
В качестве бонуса дополните функцию range, чтобы она
могла принимать необязательный третий аргумент – шаг
для построения массива. Если он не задан, шаг равен
единице. Вызов функции range(1, 10, 2) должен будет
вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с
отрицательным шагом так, что вызов range(5, 2, -1)
возвращает [5, 4, 3, 2].
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
*/

function range(start, end) {
  var numbers = [];
  for (var i = start; i <= end; i++)
    numbers.push(i);
  return numbers;
}

function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
}

console.log(sum(range(1, 10)));
// → 55

function range(start, end, turn) {
  if (typeof(turn) == 'undefinded') turn = 1;
  var numbers = [];
  if (start < end) {
    for (var i = start; i <= end; i += turn)
      numbers.push(i);
  }
  if (end < start) {
    for (var i = start; i >= end; i += turn)
      numbers.push(i);
  }
  return numbers;
}

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
