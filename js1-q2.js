"use strict";


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

