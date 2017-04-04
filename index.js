'use strict';

window.addEventListener('load', function() {

  function Animal(name) {
    this.name = name;
    this.speed = 10;
  }
  Animal.prototype.run = function(speed) {
    console.log('Run' + speed || this.speed);
  };

  function WolfDog(color, name) {
    Animal.call(this, name);
    this.color = color;
  }

  WolfDog.prototype = Object.create(Animal.prototype);
  WolfDog.prototype.constructor = WolfDog;

  WolfDog.prototype.howl = function() {
    console.log('Howl');
  };
  WolfDog.prototype.run = function(speed) {
    Animal.prototype.run.call(this, speed);
    this.speed = speed;
    // console.log('Run' + ++this.speed);
  };

  var dog = new WolfDog('White', 'bob');
  console.log(dog);

  dog.run(50);
  console.log(dog);


});

