"use strict";

function Calculator(a, b, oper)
{
    this.firstOperand = +a;
    this.secondOperand = +b;
    this.result = null;

    if (oper === '-' || oper === '+') {
        this.operation = oper;
    } else this.operation = null;

    this.calc = function () {
        if (!this.result) {
            this.result = f(this.firstOperand, this.secondOperand, this.operation);
        }
        return this.result;
    };

    let f = function (a, b, c) {
        if (c === '+') {
            return +a + b;
        } else if (c === '-') {
            return a - b;
        } else return null;
    };

}

var calculator = new Calculator(2, 3, '+');
alert( calculator.calc() ); // 5 (вычисление)
alert( calculator.calc() ); // 5 (взято ранее вычисленное значение)