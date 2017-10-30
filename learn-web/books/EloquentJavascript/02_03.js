/*
Шахматная доска
Напишите программу, создающую строку, содержащую
решётку 8х8, в которой линии разделяются символами
новой строки. На каждой позиции либо пробел, либо #. В
результате должна получиться шахматная доска.
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
Когда справитесь, сделайте размер доски переменным,
чтобы можно было создавать доски любого размера.
*/

// Первое решение. Некорректное, т.к. ожидается одна строка, а не n
var n = 8;
var boardLine = '';

for (var i = 0; i < n; i++) {
  if (i % 2 != 0) boardLine += '#';
  else boardLine += ' ';
}

for (var j = 0; j < n; j++) {
  if (j % 2 != 0) console.log(boardLine);
  else console.log(' ' + boardLine);
}

// Второе решение.
var n = 8;
var chessboard = '';

for (var i = 0; i < n; i++) {
  for (var j = 0; j < n; j++) {
    if ((j+i) % 2 == 0) chessboard += '#';
    else chessboard += ' ';
  }
  chessboard += '\n';
}
console.log(chessboard);