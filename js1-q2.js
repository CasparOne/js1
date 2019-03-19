
var man = { name: 'Victor', age: 34};

// Что бы добавить к объекту новое свойство нужно присвоить значение

man.lastName = 'Volodin';

alert(man.lastName);

// Если обратиться к Несуществующему свойству, получим результат undefined. Что, собственно, логично
alert(man['Не заданное свойство объекта']);

// удалить свойство
delete man.lastName;

alert(man.lastName);