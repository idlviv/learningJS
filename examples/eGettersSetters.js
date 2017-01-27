'use strict';
var person = {
  'name': 'John',
  '_age': 21,
  'method': function meth() {
    console.log('myMethod');
  },
  get 'age'() {
    return this._age;
  },
  set 'age'(value) {
    this._age = value < 0 ? 0 : value > 122 ? 122 : value;
  }
};
// console.log(person.age);
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// console.log(Object.getOwnPropertyDescriptor(person, 'method'));
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));

Object.defineProperty(person, 'gender', {
  'value': 'male',
  'writable': false,
  'enumerable': false,
  'configurable': false
});
console.log(Object.getOwnPropertyDescriptor(person, 'gender'));

// not allowed with 'use strict'
// for (property in person) {
//   console.log(property);
// }

console.log(Object.keys(person));
console.log(person.propertyIsEnumerable('gender'));

var obj = {};
Object.defineProperties(obj, {
  'size': {
    'value': '10',
    'writable': false,
    'enumerable': false,
    'configurable': false
  }
});
console.log(obj.size);

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

Object.seal(obj);
console.log(Object.isSealed(obj));

Object.freeze(obj);
console.log(Object.isFrozen(obj));
