"use strict";
//1....Filter function

console.log(" 1. Filter function")
String.prototype.filter = function (banned) {
  let splitted = this.split(" ");
  return splitted.filter(s => s !== banned
  ).join(" ");
};
console.log("The house is not nice".filter("not"));

//.........Test the filter function
describe("Filter Function", function () {
  //mapper
  it("Expected output of 'The house is not nice'.filter('not') is 'The house is nice'  ", function () {
    assert.equal('The house is not nice'.filter('not'), 'The house is nice')
  });
});

//2.....BuubleSort Algorithm
console.log(" \n 2. BubbleSort Algorithm")
Array.prototype.bubbleSort = function () {
  let length = this.length;
  for (let i = (length - 1); i >= 0; i--) {
    for (let j = (length - i); j > 0; j--) {
      if (this[j] < this[j - 1]) {
        let tmp = this[j];
        this[j] = this[j - 1];
        this[j - 1] = tmp;
      }
    }
  }
  return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//...............Test the BubbleSort Algorithm
describe("BubbleSort Algorithm", function () {
  //mapper
  it("Expected output of [6, 4, 0, 3, -2, 1].bubbleSort() is [-2, 0, 1, 3, 4, 6]  ", function () {
    assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString(), '-2,0,1,3,4,6');
  });
});

//3...Prototype Attribute
console.log(" \n 3. Prototype Attribute");

var Person = function () { };

Person.prototype.initialize = function (name) {
  this.name = name;
};

Person.prototype.describe = function () {
  return this.name;
};

var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return (this.name + " is now teaching " + subject);
};

var me = new Teacher();

me.initialize("Prof. Michael Zijlstra");
console.log(me.teach("WAP"));

describe("Prototype Attribute", function () {

  it("Expected output of new Teacher().teach('WAP') is 'Prof. Michael Zijlstra is now teaching WAP'", function () {
    assert.equal(me.teach("WAP"), 'Prof. Michael Zijlstra is now teaching WAP')
  });
  
});
