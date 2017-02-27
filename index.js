'use strict';
// function sum() {
//   var a = 0;
//   return function() {
//     return a++;
//   };
//
// }
// var p = sum();
// var k = p;
// console.log(p());
// p();
// p();
//
// console.log(p());
//
// console.log(k());


//
// function makeCounter() {
//   function counter() {
//     return counter.currentCount++;
//   }
//   counter.currentCount = 1;
//
//   return counter;
// }
//
// var lich = makeCounter();
// console.log(lich);
// alert(lich()); // 1
// alert(lich()); // 2


// function makeBuffer() {
//   var buf = '';
//   return function b() {
//     if (arguments.length === 0) {
//       return buf;
//     }
//     buf = buf + arguments[0];
//     b.clear = function() {
//       buf = '';
//     };
//     return buf;
//   };
// }
//
// var buffer = makeBuffer();
//
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// // получить текущее значение
// console.log( buffer() ); // Замыкания Использовать Нужно!
//
// buffer.clear();
// console.log( 'clear', buffer() );

// var users = [{
//   name: 'Вася',
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: 'Петя',
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: 'Маша',
//   surname: 'Медведева',
//   age: 18
// }];
//
// function byField(field) {
//   return function(a, b) {
//     return a[field] > b[field] ? 1 : -1;
//   };
// }
//
// // users.sort(function(a, b) {
// //   return a.name > b.name ? 1 : -1;
// // });
//
// users.sort(byField('name'));
// users.forEach(function(user) {
//   console.log('Вася, Маша, Петя', user.name);
// }); // Вася, Маша, Петя
//
// users.sort(byField('age'));
// users.forEach(function(user) {
//   console.log('Маша, Вася, Петя', user.name);
// }); // Маша, Вася, Петя


function filter(arr, func) {
  var a = [];
  arr.forEach(function(item) {
    if (func(item)) {
      a.push(item);
    }
  });
  return a;
}

function inBetween(a, b) {

}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2