"use strict";
/** epam1 */
function forEach( arr, fx ) {
  for ( var i = 0; i < arr.length; i++ ) {
    fx( arr[i] );
  }
}

// var array = [2, 4, 5, 8];
// function printing(element) {
//   console.log (element);
// }
// forEach(array, printing);

/** epam2 */
function getTransformedArray( arr, fx ) {
  var transformedArray = [];
  forEach( arr, function( item ) {
    transformedArray.push( fx( item ) );
  } );
  return transformedArray;
}

// var array = [2, 4, 5, 8];
// function increment(element) {
//   return ++element;
// }
// console.log (getTransformedArray(array, increment));

/** epam3 */
function pluckByAttribute( arr, queriedLabel ) {
  return getTransformedArray( arr, function( element ) {
    return element[queriedLabel];
  } );
}

// var presidents = [
//   { name: 'George',
//     surname: 'Kush' } ,
//   { name: 'Barako',
//     surname: 'Obaame' }];
// console.log(pluckByAttribute(presidents, 'name'));

/** epam4 */
function cypherPhrase( obj, str ) {
  var incomingArray = str.split( '' );
  return getTransformedArray( incomingArray, function( element ) {
    for ( var prop in obj ) {
      if ( element === prop ) {
        return obj[prop];
      }
    }
    return element;
  } ).join( '' );
}

// var charactersMap = {
//   a: 'o',
//   c: 'd',
//   t: 'g'};
// var strToMod = 'kitty cat';
// console.log( cypherPhrase( charactersMap, strToMod ) );

/** epam5 */
function decypherPhrase( obj, str ) {
  var objNew = {};
  for ( var prop in obj ) {
    if ( obj.hasOwnProperty( obj[prop] ) ) {
      objNew[obj[prop]] = prop;
    }
  }
  return cypherPhrase( objNew, strToMod );
}

// var charactersMap = {
//   a: 'o',
//   c: 'd',
//   t: 'g'
// };
// var strToMod = 'kiggy dog';
// console.log( decypherPhrase( charactersMap, strToMod ) );

/** epam6 */
function getTopNRichestNames( qty, arr ) {
  var kmb = {
    K: '000',
    M: '000000',
    B: '000000000'
  };
  people.map( function( element ) {
    +cypherPhrase( kmb, element.income );
  } );
  // forEach( people, function( element ) {
  //   element.income = +cypherPhrase( kmb, element.income );
  // });
  people.sort( function( a, b ) {
    if ( a.income < b.income ) {
      return 1;
    }
    if ( a.income > b.income ) {
      return -1;
    }
    return 0;
  } );
  return pluckByAttribute( arr.slice( 0, qty ), 'name' );
}

// var people = [
//   { name: 'Bara', income: '1B' },
//   { name: 'Dara', income: '5B' },
//   { name: 'Kara', income: '1M' },
//   { name: 'Zara', income: '2K' }
// ];
// console.log( getTopNRichestNames( 2, people ) );


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
// function currentScore(attacker, target, action) {
//   console.log( attacker.name, action, target.name, '/ Now',
//     attacker.name, '-' ,attacker.attack, '/', attacker.hitpoints, '/',
//     attacker.totalHitpoints,
//     target.name, '-' ,target.attack, '/', target.hitpoints, '/',
//     target.totalHitpoints );
// }
// function CM(data) {
//   if(data) {
//     this.name = data.name;
//     this.attack = data.attack;
//     this.totalHitpoints = this.hitpoints =  data.hitpoints;
//   } else {
//     console.log ('Error - please input data');
//   }
// }
//
// CM.prototype.getHitpoints = function () {
//   return this.hitpoints;
// };
// CM.prototype.setHitpoints = function (hitpoints) {
//   this.hitpoints = hitpoints;
// };
//
// CM.prototype.getTotalHitpoints = function () {
//   return this.totalHitpoints;
// };
// CM.prototype.setTotalHitpoints = function (totalHitpoints) {
//   this.totalHitpoints = totalHitpoints;
// };
//
// CM.prototype.getAttack = function () {
//   return this.attack;
// };
// CM.prototype.setAttacks = function (attack) {
//   this.attack = attack;
// };
//
// CM.prototype.fight = function ( target ) {
//   var multiplyOfAttack = 1;
//   if (this instanceof Champion){
//     if (this.blocking === true ) {
//       this.blocking = false;
//       multiplyOfAttack = 0;
//     }
//   }
//   if (this instanceof Monster) {
//     if (this.amountOfDoubleAttack > 0 ){
//       this.amountOfDoubleAttack -= 1;
//       multiplyOfAttack = 2;
//     }
//     if (target.blocking === true ) {
//       target.blocking = false;
//       multiplyOfAttack = 0;
//     }
//   }
//
//   target.setHitpoints(target.getHitpoints()-(this.getAttack() * multiplyOfAttack));
//   currentScore( this, target, 'hits' );
// };
//
// CM.prototype.isAlive = function () {
//   return (this.getHitpoints() > 0);
// };
//
// function Champion(name, attack, hitpoints) {
//   CM.apply(this, arguments);
//   this.blocking = false;
// }
// function Monster(name, attack, hitpoints) {
//   CM.apply(this, arguments);
//   this.amountOfDoubleAttack = 0;
// }
// Champion.prototype = Object.create(CM.prototype);
// Champion.prototype.constructor = Champion;
// Monster.prototype = Object.create(CM.prototype);
// Monster.prototype.constructor = Monster;
//
// Champion.prototype.rest = function () {
//   this.hitpoints += 5;
//   currentScore( this, boar, 'rest' );
// };
//
// Champion.prototype.defence = function () {
//   this.blocking = true;
//   console.log( this.name, ' is defencing and will have no damage next hit' )
//
// };
//
// Monster.prototype.enrage = function () {
//   this.amountOfDoubleAttack = 2;
//   console.log( this.name, ' is enraged and will have 2 hits with double damage' )
// };
//
//
//
// var heracles = new Champion(
//   {name: 'Heracles', attack: 10, hitpoints: 50});
// var boar = new Monster(
//   {name: 'Erymanthian Boar ', attack: 5, hitpoints: 100});
//
// currentScore( heracles, boar, 'and ' );
//
//
// // heracles.fight(boar);
// // heracles.rest();
// heracles.defence();
//
// boar.enrage();
// boar.fight(heracles);
// boar.fight(heracles);
// boar.fight(heracles);
// boar.enrage();
// boar.fight(heracles);
// boar.fight(heracles);
// boar.fight(heracles);boar.enrage();
// console.log(heracles.isAlive());
// boar.fight(heracles);
// console.log(heracles.isAlive());
//
// boar.fight(heracles);
// boar.fight(heracles);
// // console.log(heracles.getHitpoints());
// // heracles.setHitpoints(120);
// // console.log('ch', heracles);
// // console.log('ch', boar);
