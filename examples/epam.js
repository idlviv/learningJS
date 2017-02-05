/**
 * Created by igor on 05.02.17.
 */
"use strict";
/**
 * epam 2.1
 * */
// Object.prototype.assign = function assignObj (target, source, options) {
//   for (var i = 1; i < arguments.length; i++) {
//     Object.setPrototypeOf(target, Object.getPrototypeOf(arguments[i]));
//     for (var prop in arguments[i]) {
//       if (arguments[i].hasOwnProperty(prop)) {
//         var desc = Object.getOwnPropertyDescriptor(arguments[i], prop);
//         Object.defineProperty(target, prop, desc);
//       }
//     }
//   }
//   return target;
// };
//
// var defaults = { width: 100, height: 100 };
// var options = { width: 150 };
// var configs = Object.prototype.assign({old: false}, defaults, options);
//
// console.log(configs);

/**
 * epam 2.2 Almost done
 * */
function currentScore(attacker, target, action) {
  console.log( attacker.name, action, target.name, '/ Now',
    attacker.name, '-' ,attacker.attack, '/', attacker.hitpoints, '/',
    attacker.totalHitpoints,
    target.name, '-' ,target.attack, '/', target.hitpoints, '/',
    target.totalHitpoints );
}
function CM(data) {
  if(data) {
    this.name = data.name;
    this.attack = data.attack;
    this.totalHitpoints = this.hitpoints =  data.hitpoints;
  } else {
    console.log ('Error - please input data');
  }
}

CM.prototype.getHitpoints = function () {
  return this.hitpoints;
};
CM.prototype.setHitpoints = function (hitpoints) {
  this.hitpoints = hitpoints;
};

CM.prototype.getTotalHitpoints = function () {
  return this.totalHitpoints;
};
CM.prototype.setTotalHitpoints = function (totalHitpoints) {
  this.totalHitpoints = totalHitpoints;
};

CM.prototype.getAttack = function () {
  return this.attack;
};
CM.prototype.setAttacks = function (attack) {
  this.attack = attack;
};

CM.prototype.fight = function ( target ) {
  var multiplyOfAttack = 1;
  if (this instanceof Champion){
    if (this.blocking === true ) {
      this.blocking = false;
      multiplyOfAttack = 0;
    }
  }
  if (this instanceof Monster) {
    if (this.amountOfDoubleAttack > 0 ){
      this.amountOfDoubleAttack -= 1;
      multiplyOfAttack = 2;
    }
    if (target.blocking === true ) {
      target.blocking = false;
      multiplyOfAttack = 0;
    }
  }

  target.setHitpoints(target.getHitpoints()-(this.getAttack() * multiplyOfAttack));
  currentScore( this, target, 'hits' );
};

CM.prototype.isAlive = function () {
  return (this.getHitpoints() > 0);
};

function Champion(name, attack, hitpoints) {
  CM.apply(this, arguments);
  this.blocking = false;
}
function Monster(name, attack, hitpoints) {
  CM.apply(this, arguments);
  this.amountOfDoubleAttack = 0;
}
Champion.prototype = Object.create(CM.prototype);
Champion.prototype.constructor = Champion;
Monster.prototype = Object.create(CM.prototype);
Monster.prototype.constructor = Monster;

Champion.prototype.rest = function () {
  this.hitpoints += 5;
  currentScore( this, boar, 'rest' );
};

Champion.prototype.defence = function () {
  this.blocking = true;
  console.log( this.name, ' is defencing and will have no damage next hit' )

};

Monster.prototype.enrage = function () {
  this.amountOfDoubleAttack = 2;
  console.log( this.name, ' is enraged and will have 2 hits with double damage' )
};



var heracles = new Champion(
  {name: 'Heracles', attack: 10, hitpoints: 50});
var boar = new Monster(
  {name: 'Erymanthian Boar ', attack: 5, hitpoints: 100});

currentScore( heracles, boar, 'and ' );


// heracles.fight(boar);
// heracles.rest();
heracles.defence();

boar.enrage();
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.enrage();
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);boar.enrage();
console.log(heracles.isAlive());
boar.fight(heracles);
console.log(heracles.isAlive());

boar.fight(heracles);
boar.fight(heracles);
// console.log(heracles.getHitpoints());
// heracles.setHitpoints(120);
// console.log('ch', heracles);
// console.log('ch', boar);
