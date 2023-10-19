// Your code here
class Polygon {
  constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers;
  }

  get countSides() {
    return this.arrayOfIntegers.length;
  }

  get perimeter() {
    let sum = 0;
    const length = this.countSides;

    for (let i = 0; i < length; i++) {
      sum += this.arrayOfIntegers[i];
    }

    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.arrayOfIntegers[0];
    let b = this.arrayOfIntegers[1];
    let c = this.arrayOfIntegers[2];

    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let a = this.arrayOfIntegers[0];
    let b = this.arrayOfIntegers[1];
    let c = this.arrayOfIntegers[2];
    let d = this.arrayOfIntegers[2];

    if (a === b && b === c && c === d) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.arrayOfIntegers[0] ** 2;
  }
}
