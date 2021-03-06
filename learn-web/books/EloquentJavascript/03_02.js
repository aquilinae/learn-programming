/*
Рекурсия
Мы видели, что оператор % (остаток от деления) может
использоваться для определения того, чётное ли число (
% 2). А вот ещё один способ определения:
Ноль чётный.
Единица нечётная.
У любого числа N чётность такая же, как у N - 2.
Напишите рекурсивную функцию isEven согласно этим
правилам. Она должна принимать число и возвращать
булевское значение.
Потестируйте её на 50 и 75. Попробуйте задать ей -1.
Почему она ведёт себя таким образом? Можно ли её как-
то исправить?
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
*/

// Первый вариант
function isEven (number) {
  if (number == 0) return true;
  else if (number == 1) return false;
  else return isEven(number - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
/* проблема в примере ниже заключается в том,
что число бесконечно уменьшается на 2
*/
//console.log(isEven(-1));
// → ??


// Второй вариант
function isEven (number) {
  if (number < 0) return isEven(-number);
  else if (number == 0) return true;
  else if (number == 1) return false;
  else return isEven(number - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
