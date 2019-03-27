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
    if (+x <= 1) {
        return 1;
    }

    // var res = 1;
    //
    // while (x > 0) {
    //     res = res * x--;
    // }

    var res;
    var i;
    for (i = x, res = 1; i > 0; i-- ) {
        res *= i;
    }

    return res;

}

alert(cycleFactorial(4));