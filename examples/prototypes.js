/**
 Proto Developer scripter
 */
// var Proto = {
//   constructor : function (name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     return this
//   },
//   greeting : function (greet){
//     console.log (greet + '! ' + this.name);
//   }
// };
//
//
// var person1 = Object.create(Proto).constructor('John', 25, 'male');
// var person2 = Object.create(Proto);
// console.log(person2);
// console.log(Proto.isPrototypeOf(person1));
// person1.greeting('hi');
//
// var Developer = Object.create(Proto);
// Developer.constructor = function (name, age, gender, skills) {
//   Proto.constructor.apply(this, arguments);
//   this.skills = skills || [];
//   return this;
// };
// Developer.develop = function (){
//   console.log('working..');
// };
//
// var scripter = Object.create(Developer).constructor('id', 37,
//   'male',['js','html']);
// console.log('scripter', scripter);
// scripter.develop();
//
// /******************************************************
//  Scripter2 створений зразу з Proto як конкретний обєкт,
//  з якого не буде наслідування і тому в apply вказав не
//  this,а scripter2
//  *****************************************************/
//
// var scripter2 = Object.create(Proto);
// scripter2.constructor = function (name,age,gender,skills,city) {
//   Proto.constructor.apply(scripter2,arguments);
//   this.skills = skills || [];
//   this.city = city;
//   return this
// };
// scripter2.constructor('id', 37,
//   'male',['js', 'html', 'css'], 'Lviv');
// console.log('scripter2', scripter2);

/**
 Годування хомяків
 */
function Hamster() {
  this.food = []; // живіт кожного окремого хомяка
}

Hamster.prototype.food = []; // спільний живіт всіх

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();
console.log(speedy);
console.log(lazy);
speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length ); // 2
console.log(lazy.food.length); // 2 (!??)

/**
 Годинник
 */

// function Clock(options) {
//   this._template = options.template;
// }
//
// Clock.prototype._render = function render() {
//   var date = new Date();
//
//   var hours = date.getHours();
//   if (hours < 10) hours = '0' + hours;
//
//   var min = date.getMinutes();
//   if (min < 10) min = '0' + min;
//
//   var sec = date.getSeconds();
//   if (sec < 10) sec = '0' + sec;
//
//   var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
//
//   console.log(output);
// };
//
// Clock.prototype.stop = function() {
//   clearInterval(this._timer);
// };
//
// Clock.prototype.start = function() {
//   this._render();
//   var self = this;
//   this._timer = setInterval(function() {
//     self._render();
//   }, 1000);
// };
//
// var clock = new Clock({
//   template: 'h:m:s'
// });
// clock.start();

/**
 Прототип прототипа
 */
// // --------- Класс-Родитель ------------
// // Конструктор родителя пишет свойства конкретного объекта
// function Animal(name) {
//   this.name = name;
//   this.speed = 0;
// }
//
// // Методы хранятся в прототипе
// Animal.prototype.run = function() {
//   alert(this.name + " бежит!")
// }
//
// // --------- Класс-потомок -----------
// // Конструктор потомка
// function Rabbit(name) {
//   Animal.apply(this, arguments);
// }
//
// // Унаследовать
// Rabbit.prototype = Object.create(Animal.prototype);
//
// // Желательно и constructor сохранить
// Rabbit.prototype.constructor = Rabbit;
//
// // Методы потомка
// Rabbit.prototype.run = function() {
//   // Вызов метода родителя внутри своего
//   Animal.prototype.run.apply(this);
//   alert( this.name + " подпрыгивает!" );
// };
//
// // Готово, можно создавать объекты
// var rabbit = new Rabbit('Кроль');
// rabbit.run();
//
