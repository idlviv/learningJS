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

var User = function() {
  this.progress = 0;
  this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  this.rankPosition = 0;
  this.rank = this.ranks[this.rankPosition];
};

function checkProgress(p, self) {
  var incRank;
  var incProgress;
  // console.log(self);
  if (p >= 100) {
    console.log(p);
    incProgress = p % 100;
    incRank = (p - incProgress) / 100;
    self.progress = incProgress;
    self.rankPosition += incRank;
    console.log(self.rankPosition);
  }

  if (self.rank >= 8) {
    self.rank = 8;
    self.progress = 0;
  }
}

User.prototype.incProgress = function(p) {
  // var self = this;
  var dif;
  var inc;

  if (p == this.rank) {
    this.progress += 3;
    // console.log('3', this.progress);
    checkProgress(this.progress, this);
  }
  if (p < this.rank && this.rank - p < 2) {
    this.progress += 1;
    // console.log('1', this.progress);
    checkProgress(this.progress, this);

  }
  if (p > this.rank) {
    dif = p - this.rank;
    inc = dif * dif * 10;
    this.progress += inc;
    checkProgress(this.progress, this);
  }
  this.rank = this.ranks[this.rankPosition];

  console.log('rank ', this.rank, ' progress ', this.progress, ' position ', this.rankPosition);

};

var user = new User();

user.incProgress(1);
// user.incProgress(-7);

