var Person = {
  constructor : function (first, last, age){
    this.first = first;
    this.last = last;
    this.age = age;
    return this;
  },
  getFullName: function() {
    console.log(this.first + ' ' + this.last);
  },
  greet: function(other, greetWord) {
    console.log(greetWord + other.first + ", I'm " + this.first + ".");
  }
};

var elodie = Object.create(Person).constructor('Elodie', 'Jaubert', 27);
var christophe = Object.create(Person).constructor('Christophe','Porteneuve', 30);

christophe.greet(elodie, 'Hi ');
console.log(elodie);
// => "Hi Elodie, I'm Christophe."

function times(n, fx, arg, gw, forBind) {
  for (var index = 0; index < n; ++index) {

    var bounded = fx.bind(forBind);
    bounded(arg, gw); // Hi Elodie, I'm Christophe.

    /**
     до ф-ї fx прив'язали this, який передали через ф-ю times,
     (аргумент forBind, в цьому конкретному випадку - christophe)
     і помістили це все в bounded, яку можна використовувати
     для подальшої роботи.
     Це універсально. Є ф-я з якою можна працювати.
     */

    fx(arg, gw); // Hi Elodie, I'm undefined.
    /**
     undefined, тому, що this, який використовується в greet,
     створюється в момент оголошення і в місці оголошення ф-ї Fx,
     т.т. this = window, а у window немає змінної first

     попередня прив"язка через bind, не працює, тому що
     це діє для bounded
     */

    fx.apply(christophe, [arg, gw]); // Hi Elodie, I'm Christophe.
    // console.log('args', arguments);
    /**
     для ф-ї Fx приймаємо this явно - christophe

     можно передати замість christophe - forBind, це більш
     універсально, але на відміну від bind, який просто прив"язує
     і створює нову ф-ю (не викликає сам) -- apply - разово
     прив"язує і зразу викликає.
     */

    fx.call(christophe, arg, gw); // Hi Elodie, I'm Christophe.
    /**
     ф-ю Fx викликаэмо з this рывним - christophe

     можно передати замість christophe - forBind, це більш
     універсально, але на відміну від bind, який просто прив"язує
     і створює нову ф-ю (не викликає сам) -- call - разово
     прив"язує і зразу викликає.

     call i apply по суті однакові, тільки аргументи передаються
     масивом або через кому.

     масив arguments можна застосовувати в apply, але в даному
     випадку він буде набором від ф-ї times
     */

  }
}
times(1, christophe.greet, elodie, 'Hi ', christophe);
// => Three times "Hi Elodie, I'm undefined."
times(1, elodie.getFullName);
// => "undefined undefined"

/**
 Наступна ф-я автоматично обгортає і виконує всі задачі
 Аналог bind

 */

function createBoundedWrapper(forBind, method) {
  return function() {
    return method.apply(forBind, arguments);
  };
}
var chrisGreet = createBoundedWrapper(christophe, christophe.greet);
chrisGreet(elodie, 'Hi ');
// "Hi Elodie, I'm Christophe."

/**
 * Created by igor on 31.01.17.
 */
