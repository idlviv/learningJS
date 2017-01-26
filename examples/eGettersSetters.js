var person = {
  name : 'John',
  _age : 21,
  set age (value){
    this._age = value < 0 ? 0 : value >122 ? 122: value;
  },
  get age (){
    return this._age;
  }
};
console.log (person.age);