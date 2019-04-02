"use strict";

/**
 * Функция может вернуть функцию, это практически базовый функционал языка, и, кстати, не только JS.
 * Классическое применение данного функционала - реализация счетчика вызовов функции.
 */

// Код подсмотрел на earn.javascript.ru. Но он не списан а только подсмотрен и понят.

function siteCounter() {
    var curCount = 1;

    return function () {
        return curCount++;
    };

}
var counter = siteCounter();
console.log(counter()); // после переменной обязательно ставить () ибо тогда в консоль будет выведен сам текст функции
console.log(counter());
console.log(counter());
console.log(counter());
