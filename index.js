var animal = {
  eats : true
};
var rabbit = {
  jumps : true,
  __proto__ : animal
};
/**
  For..in перелічує всі властивості: власні і прототипа
*/

for (var key in rabbit) {
  console.log(key + ' = ' + rabbit[key]);
}
console.log(rabbit.hasOwnProperty('eats'));
console.log(rabbit.hasOwnProperty('jumps'));

/**
 відсіюємо властивості прототипа (тільки власні)
 */
for (var key in rabbit) {
  if (rabbit.hasOwnProperty(key)){
    console.log(key + ' = ' + rabbit[key]);
  }
}
/**
  Створює пустий об"єкт, який немає вбудованих властивостей прототипа
 */
var fox = Object.create(null);
fox.name = 'Foxt';
console.log('is toString in fox ', fox.toString);


/**
 Створюємо конструктор Rabbit
 */
function Rabbit(name) {
  this.name = name;
}

var RabbitP = {
  constructor : function (name){
    this.name = name;
  }
};
/**
 Rabbit-а прототипом ставимо animal.
 Властивість prototype використовують тільки в конструктора
 */
Rabbit.prototype = animal;
RabbitP.constructor.prototype = animal;
console.log(Rabbit);
console.log(RabbitP.constructor);

/**
 Створюємо новий екземпляр homeRabbit
 */
homeRabbit = new Rabbit('White');
homeRabbitP = new RabbitP.constructor('Black1');

homeRabbit2 = Object.create(Rabbit);
// homeRabbit2.name('White2');
homeRabbit2P = Object.create(RabbitP);
homeRabbit2P.constructor('Black2');

console.log('homeRabbit ', homeRabbit, ' ' ,homeRabbit.name);
console.log('homeRabbitP ', homeRabbitP, ' ' , homeRabbitP.name);
console.log('homeRabbit2 ', homeRabbit2, ' ' ,homeRabbit2.name);
console.log('homeRabbit2P ', homeRabbit2P, ' ' ,homeRabbitP.name);



