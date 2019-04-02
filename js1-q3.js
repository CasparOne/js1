"use strict";


/**
 *
 * @param x
 * @returns {number}
 *
 * There is two variant of getting factorial inside of function
 * I prefer to use first variant with "while" cycle because there is only one variable to be declared
 *
 */
function cycleFactorial(x) {

    var res;
    // так как ноль приводится к значению false мы можем проверить
    if (x) {
        res = 1;
        while (x > 0) {
            res = res * x--;
        }
        return res;
    }

    // for (let i = x, res = 1; i > 0; i-- ) {
    //     res *= i;
    // }

    return 1;

}

/**
 *
 * @param x
 * @returns {number}
 *
 * Применение рекурсивной функции
 */
function recurFact(x) {
    if (x) {
        return x * recurFact(x - 1);
    }
    return 1;
}


// Особой какой то разницы в производительности не найдено. ПРи первом запуске - да, есть разбег в несколько единиц
// но в последующие разы размег минимален и не всегда однозначен.

console.time("cycleFunc");
var a = cycleFactorial(25);
console.timeEnd("cycleFunc");

console.time("recurFunc");
var b = recurFact(25);
console.timeEnd("recurFunc");
