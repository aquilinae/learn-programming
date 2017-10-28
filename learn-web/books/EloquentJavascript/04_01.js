/*
Минимум
В предыдущей главе была упомянута функция Math.min,
возвращающая самый маленький из аргументов. Теперь
мы можем написать такую функцию сами. Напишите
функцию min, принимающую два аргумента, и
возвращающую минимальный из них.
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

function min(a, b) {
  if (a > b) return b;
  else if (a < b) return a;
  else return "numbers are equal";
}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0,0));
