class Box {

  constructor(public x: number,
              protected y: number) {}


  mult(): number {
    return this.x*this.y;
  }
}

let box1 = new Box(4,5);
console.log(box1.mult());
console.log(box1.x);
console.log(box1.y);