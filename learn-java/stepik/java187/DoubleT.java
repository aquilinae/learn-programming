// [STEPIK]
// Java. Базовый курс https://stepik.org/course/187
// 02_01_06 Примитивные типы

/*
Реализуйте метод, возвращающий true, если среди четырех его аргументов ровно два истинны (любые). Во всех остальных случаях метод должен возвращать false.

Воспользуйтесь шаблоном кода, который предлагает система. Ввод-вывод будет сделан за вас. Вам надо только проанализировать переданные в метод booleanExpression значения (a, b, c, d) и вернуть результат. Попробуйте составить формулу с использованием булевых операторов. Если не получается, вернитесь к этому заданию после просмотра степов про условные операторы и циклы.

При записи сложных выражений рекомендуется использовать скобки, чтобы не запутаться в порядке применения операторов.

В качестве примера уже указано заведомо некорректное решение задачи. Исправьте его.

Совет тем, у кого не проходит какой-то из тестов. В данной задаче возможно всего 16 комбинаций значений входных параметров. Их можно выписать на бумажку, посчитать для них правильные ответы и сравнить с тем, что выдает ваше решение. Попробуйте самостоятельно проделать это, найти ошибку и исправить решение.
Sample Input 1:
false false false false
Sample Output 1:
false
Sample Input 2:
true true true true
Sample Output 2:
false
Sample Input 3:
false false true true
Sample Output 3:
true
*/

public class DoubleT {
    public static void main(String[] args) throws Exception {
        // Блок проверки
        boolean ffff = booleanExpression(false, false, false, false);
        boolean ffft = booleanExpression(false, false, false, true);
        boolean fftf = booleanExpression(false, false, true, false);
        boolean fftt  = booleanExpression(false, false, true, true); //Searching for this

        boolean ftff = booleanExpression(false, true, false, false);
        boolean ftft = booleanExpression(false, true, false, true); //Searching for this
        boolean fttf = booleanExpression(false, true, true, false); //Searching for this
        boolean fttt = booleanExpression(false, true, true, true);

        boolean tfff = booleanExpression(true, false, false, false);
        boolean tfft = booleanExpression(true, false, false, true); //Searching for this
        boolean tftf = booleanExpression(true, false, true, false); //Searching for this
        boolean tftt = booleanExpression(true, false, true, true);

        boolean ttff = booleanExpression(true, true, false, false); //Searching for this
        boolean ttft = booleanExpression(true, true, false, true);
        boolean tttf = booleanExpression(true, true, true, false);
        boolean tttt = booleanExpression(true, true, true, true);

        System.out.println("ffff " + ffff);
        System.out.println("ffft " + ffft);
        System.out.println("fftf " + fftf);
        System.out.println("fftt " + fftt + " <- ");

        System.out.println("ftff " + ftff);
        System.out.println("ftft " + ftft + " <- ");
        System.out.println("fttf " + fttf + " <- ");
        System.out.println("fttt " + fttt);

        System.out.println("tfff " + tfff);
        System.out.println("tfft " + tfft + " <- ");
        System.out.println("tftf " + tftf + " <- ");
        System.out.println("tftt " + tftt);

        System.out.println("ttff " + ttff + " <- ");
        System.out.println("ttft " + ttft);
        System.out.println("tttf " + tttf);
        System.out.println("tttt " + tttt);


        boolean allCorrectAreTrue = fftt & ftft & fttf & tfft & tftf & ttff;

        boolean allIncorrectAreTrue = ffff | ffft | fftf | ftff | fttt |  tfff | tftt | ttft | tttf | tttt;

        boolean correctAnswerCondition = allCorrectAreTrue & !allIncorrectAreTrue;

        if (correctAnswerCondition) {
            System.out.println(" You have found the correct answer!!! :) ");
        } else {
            System.out.println(" Correct answer still to be found... :( ");
        }


    }

    public static boolean booleanExpression(boolean a, boolean b, boolean c, boolean d) {
        /*
        Можно составить таблицу истинности для четырех переменных и по ней составить СДНФ.
        */
        return ((!a) & (!b) & c & d) ^ ((!a) & b & (!c) & d) ^ ((!a) & b & c & (!d)) ^ (a & (!b) & (!c) & d) ^ (a & (!b) & c & (!d)) ^ (a & b & (!c) & (!d));
    }
}
