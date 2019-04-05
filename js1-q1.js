"use strict";

var animal = {
    gender: '',
    legsCount: '',
    hasTail: '',
    canSweem: '',
};

var pig = {
    __proto__ : animal,
    weight: '',
    likeToBeDirty: true,
    grunt: function () {
        console.log('I am grunting!!')
    }
};

var pepa = {
    __proto__: pig,
    mud: '',
};

pepa.grunt();