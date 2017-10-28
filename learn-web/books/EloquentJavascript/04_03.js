/*
Считаем бобы
Символ номер N строки можно получить, добавив к ней
.charAt(N) ( "строчка".charAt(5) ) – схожим образом с
получением длины строки при помощи .length.
Возвращаемое значение будет строковым, состоящим из
одного символа (к примеру, "к"). У первого символа строки
позиция 0, что означает, что у последнего символа
позиция будет string.length - 1. Другими словами, у строки
из двух символов длина 2, а позиции её символов будут 0
и 1.
Напишите функцию countBs, которая принимает строку в
качестве аргумента, и возвращает количество символов
“B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает
примерно как countBs, только принимает второй параметр
— символ, который мы будем искать в строке (вместо
того, чтобы просто считать количество символов “B”). Для
этого переделайте функцию countBs.
*/

// countBs()
function countBs(string) {
  var numOfBs = 0
  for (var i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) == 'B') numOfBs += 1;
  }
  return numOfBs;
}

// Test area
var string = 'BBB';
console.log(countBs(string));
var string = 'AAA';
console.log(countBs(string));
var string = 'bBb';
console.log(countBs(string));
var string = 'Abra Cadabra';
console.log(countBs(string));
var string = 'aBra cadaBra';
console.log(countBs(string));

// countChar()
function countChar(string, char) {
  var numOfChars = 0
  for (var i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) == char) numOfChars += 1;
  }
  return numOfChars;
}

// Test area
var string = "Abra Cadabra Alakazam";
var char = 'B';
console.log(countChar(string, char));
var char = 'A';
console.log(countChar(string, char));
var char = 'a';
console.log(countChar(string, char));
var char = 'z';
console.log(countChar(string, char));
var char = ' ';
console.log(countChar(string, char));
