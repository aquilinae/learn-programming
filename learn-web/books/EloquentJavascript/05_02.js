/*
Разница в возрасте матерей и их
детей
Используя набор данных из примера, подсчитайте
среднюю разницу в возрасте между матерями и их
детьми (это возраст матери во время появления
ребёнка). Можно использовать функцию average,
приведённую в главе.
Обратите внимание – не все матери, упомянутые в
наборе, присутствуют в нём. Здесь может пригодиться
объект byName, который упрощает процедуру поиска
объекта человека по имени.
function average(array) {
function plus(a, b) { return a + b; }
return array.reduce(plus) / array.length;
}
var byName = {};
ancestry.forEach(function(person) {
byName[person.name] = person;
});
// Ваш код тут
// → 31.2
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Ваш код тут

// → 31.2
