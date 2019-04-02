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
