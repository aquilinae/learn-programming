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

function deepEqual(value01, value02) {
  
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
