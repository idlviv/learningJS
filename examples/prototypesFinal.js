/**
 * Created by Igor on 03.02.17.
 */
function f() {
  alert( "привет" );
}
defer = new f {

}
Function.prototype.defer = f;

f.defer(5000); // выведет "привет" через 1 секунду

/**
 function Menu(options) {
  options = Object.create(options);
  console.log('options', options );
  options.width = options.width || 300;

  alert( options.width ); // возьмёт width из наследника
  alert( options.height ); // возьмёт height из исходного объекта

}
 opt = {
  height: 5500
};
 menu1 = new Menu(opt);
 console.log('menu1', menu1 );
 */



/**
 var animalPP = {
  eatsPP: true
};
 var animal = {
  eats: true
};
 animal.prototype = animalPP;


 function Rabbit(name) {
  this.name = name;
  this.say = function () {
    console.log( 'hi' );
  };
  //this.__proto__ = animal; // не працює в ІЕ10
}
 /!**
 Установка Rabbit.prototype = animal буквально говорит
 интерпретатору следующее: "При создании объекта
 через new Rabbit запиши ему __proto__ = animal".
 *!/
 // Rabbit.prototype = animal; //замість this.__proto__ = animal

 /!**
 Цей запис аналогічний this.say
 *!/
 Rabbit.prototype.sayAgain = function () {
  console.log( 'hi again' );
};

 var rabbit = new Rabbit("Кроль"); //буде мати властивості і animal i animalPP
 rabbit.say();
 rabbit.sayAgain();
 console.log( 'proto', rabbit.__proto__); // true, из прототипа
 console.log(animalPP); // true, из прототипа

 /!**
 Створюємо новий об'єкт, а Rabbit, як його метод
 *!/
 var RabbitFamily = {
  Rabbit : function (name) {
      this.name = name;
      this.say = function () {
        console.log( 'hi' );
      }
  }
};
 var rabbitAnother = new RabbitFamily.Rabbit('AnotherRabbit');
 console.log( 'rabbitAnother.name ', rabbitAnother.name );
 rabbitAnother.say();
 // console.log(rabbitAnother instanceof RabbitFamily.Rabbit);
 // console.log( rabbitAnother.constructor );*/


/**function Rabbit() {}
 // в Rabbit.prototype есть одно свойство: constructor
 alert( Object.getOwnPropertyNames(Rabbit.prototype) ); // constructor
 // оно равно Rabbit
 alert( Rabbit.prototype.constructor == Rabbit ); // true
 */

//
// var animal = {
//   eats: true
// };
// var rabbit = {
//   jumps: true,
//   __proto__: animal
// };
// // /**
// //   For..in перелічує всі властивості: власні і прототипа
// // */
// //
// // for (var key in rabbit) {
// //   console.log(key + ' = ' + rabbit[key]);
// // }
// // console.log(rabbit.hasOwnProperty('eats'));
// // console.log(rabbit.hasOwnProperty('jumps'));
// //
// // /**
// //  відсіюємо властивості прототипа (тільки власні)
// //  */
// // for (var key in rabbit) {
// //   if (rabbit.hasOwnProperty(key)){
// //     console.log(key + ' = ' + rabbit[key]);
// //   }
// // }
// // /**
// //   Створює пустий об"єкт, який немає вбудованих властивостей прототипа
// //  */
// // var fox = Object.create(null);
// // fox.name = 'Foxt';
// // console.log('is toString in fox ', fox.toString);
// //
//
// /**
//  Створюємо конструктор Rabbit
//  */
// function Rabbit(name) {
//   this.name = name;
//   return this;
// }
//
// var RabbitP = {
//   constructor : function (name){
//     this.name = name;
//   },
//   runs: true,
//   hiding: function() {
//     console.log('Hided');
//   }
// };
// /**
//  Rabbit-а прототипом ставимо animal.
//  Властивість prototype використовують тільки в конструктора
//  */
// Rabbit.prototype = animal;
// RabbitP.constructor.prototype = animal;
//
// // console.log('Rabbit', Rabbit);
// console.log('animal', animal);
// // console.log('RabbitP.constructor', RabbitP.constructor);
// console.log('RabbitP', RabbitP);
//
// /**
//  Створюємо новий екземпляр homeRabbit
//  */
// homeRabbit = new Rabbit('White1');
// homeRabbitP = new RabbitP.constructor('Black1');
//
// // console.log('homeRabbit ', homeRabbit, ' ' ,homeRabbit.name);
// console.log('homeRabbitP ', homeRabbitP, ' ' ,homeRabbitP.name);
// console.log('homeRabbitP hiding ', homeRabbitP.runs);
// homeRabbitP.hiding;
//
// // homeRabbit2 = Object.create(Rabbit);
// // // homeRabbit2.name('White2');
// // homeRabbit2P = Object.create(RabbitP);
// // homeRabbit2P.constructor('Black2');
// //
// //
// // console.log('homeRabbit2 ', homeRabbit2, ' ' ,homeRabbit2.name);
// // console.log('homeRabbit2P ', homeRabbit2P, ' ' ,homeRabbitP.name);
//
//
//
