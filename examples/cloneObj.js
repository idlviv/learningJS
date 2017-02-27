function assignObj(target, source, options) {
  /**
   Копіює об"єкт: прототип + властивості власні, перелічувані
   (enumerable) + дескриптори
   */
  // Object.setPrototypeOf(target, Object.getPrototypeOf(source));
  // for (var prop in source) {
  //   if (source.hasOwnProperty(prop)){
  //     var desc = Object.getOwnPropertyDescriptor(source, prop);
  //     console.log(prop, ' ', desc);
  //     Object.defineProperty(target, prop, desc);
  //   }
  // }
    
/**
 Копіює об"єкт: прототип + властивості власні, перелічувані
 (enumerable) + дескриптори
 */
// // var newTarget = Object.create(Object.getPrototypeOf(source)); //Для нового об"єкта
//  Object.setPrototypeOf(target, Object.getPrototypeOf(source)); //Для існуючого об"єкта
//  prop = Object.getOwnPropertyNames(source);
//  prop.forEach(function(item) {
//    var desc = Object.getOwnPropertyDescriptor(source, item);
//    Object.defineProperty(target, item, desc)
//  });
/**
 Копіює об"єкт: властивості власні, перелічувані (enumerable)
 Повертає target
 */
// Object.assign(target, source, options);

console.log('source', source);
console.log('newTarget', target);

console.log(Object.getOwnPropertyDescriptor(source, 'name'));
console.log(Object.getOwnPropertyDescriptor(target, 'name'));
console.log(source.name);
console.log(Object.getPrototypeOf(target));


return target;
}

var prot = {
  age: 25
};
var sourceObj = {
  name: 'Bob',
  jumping: function (){
    console.log('Jumping');
  }
};
sourceObj.__proto__ = prot;
Object.defineProperty (sourceObj, 'name', {writable: false});

assignObj ({old: false}, sourceObj);