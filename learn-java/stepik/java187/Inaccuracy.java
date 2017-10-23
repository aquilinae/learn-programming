// [STEPIK]
// Java. Базовый курс https://stepik.org/course/187
// 02_01_12 Примитивные типы

/*
Реализуйте метод, возвращающий ответ на вопрос: правда ли, что a + b = c?
Допустимая погрешность – 0.0001 (1E-4)

Можно использовать класс Math и его методы. Класс Math доступен всегда, импортировать его не надо.

В качестве примера написано заведомо неправильное выражение. Исправьте его.
Sample Input:
0.1 0.2 0.3
Sample Output:
true
*/

public class Inaccuracy {
    public static void main(String[] args) throws Exception {
    }

    public static boolean doubleExpression(double a, double b, double c) {
        return Math.abs(c - (a + b)) < 1E-4;
    }
}
