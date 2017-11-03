/*
Глубокое сравнение
Оператор == сравнивает переменные объектов,
проверяя, ссылаются ли они на один объект. Но иногда
полезно было бы сравнить объекты по содержимому.
Напишите функцию deepEqual, которая принимает два
значения и возвращает true, только если это два
одинаковых значения или это объекты, свойства которых
имеют одинаковые значения, если их сравнивать
рекурсивным вызовом deepEqual.
Чтобы узнать, когда сравнивать величины через ===, а
когда – объекты по содержимому, используйте оператор
typeof. Если он выдаёт "object" для обеих величин, значит
нужно делать глубокое сравнение. Примите во внимание
одно дурацкое исключение, существующее по
историческим причинам: typeof null тоже возвращает
"object".
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
