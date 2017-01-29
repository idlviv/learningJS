var Proto = {
  constructor : function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    return this
  },
  greeting : function (greet){
    console.log (greet + '! ' + this.name);
  }
};
var person1;
var person2;

person1 = Object.create(Proto).constructor('John', 25, 'male');
person2 = Object.create(Proto);
console.log(person2);
console.log(Proto.isPrototypeOf(person1));
person1.greeting('hi');

var Developer = Object.create(Proto);
Developer.constructor = function (name, age, gender, skills) {
  Proto.constructor.apply(this, arguments);
  this.skills = skills || [];
  return this;
};
Developer.develop = function (){
  console.log('working..');
};

var scripter = Object.create(Developer).constructor('id', 37,
  'male',['js','html']);
console.log('scripter', scripter);
scripter.develop();

/******************************************************
 Scripter2 створений зразу з Proto як конкретний обєкт,
 з якого не буде наслідування і тому в apply вказав не
 this,а scripter2
 *****************************************************/

var scripter2 = Object.create(Proto);
scripter2.constructor = function (name,age,gender,skills,city) {
  Proto.constructor.apply(scripter2,arguments);
  this.skills = skills || [];
  this.city = city;
  return this
};
scripter2.constructor('id', 37,
  'male',['js', 'html', 'css'], 'Lviv');
console.log('scripter2', scripter2);

