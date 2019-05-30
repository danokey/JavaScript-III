/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - When in the global scope, the value of “this” will be the console Object
* 2. Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is "this"
* 3. New Binding - Whenever a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function
* 4. Explicit Binding - Whenever JavaScript’s call or apply method is used, "this" is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding

const yourObject = {
    name: 'Dan Frehner',
    city: 'Salt Lake City',
    favoriteFood: 'Burritos'
}
  
const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']
  
function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
}

tellUsAboutYourself.call(yourObject, thingsYouEnjoy[0], thingsYouEnjoy[1], thingsYouEnjoy[2]);