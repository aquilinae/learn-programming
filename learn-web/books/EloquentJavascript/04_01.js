/*
Треугольник в цикле
Напишите цикл, который за 7 вызовов console.log
выводит такой треугольник:
#
##
###
####
#####
######
#######
Будет полезно знать, что длину строки можно узнать,
приписав к переменной .length.
var abc = "abc";
console.log(abc.length);
// → 3
*/

// while loop
var octothorpe = '#'
while (octothorpe.length <= 7) {
  console.log(octothorpe);
  octothorpe += '#';
}
