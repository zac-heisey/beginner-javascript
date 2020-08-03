// Function Declaration (aka Named Function) -> Hoisted
function doctorize( firstName ) {

  return `Dr. ${ firstName }`;

}

// Function Expression (aka Anonymous Function) -> Not Hoisted
const doctorize = function( firstName ) {

  return `Dr. ${ firstName }`;

}

// Arrow Functions
const inchesToCM = inches => inches * 2.54;

const add = ( a, b = 3 ) => a + b;

// Returning an object
const makeABaby = ( firstName, lastName ) => ( { name: `${ firstName } ${ lastName }`, age: 0 } );

// IIFE (Immediately Invoked Function Expression)
( function( name, age ) {

  console.log( `My name is ${ name } and I am ${ age } years old.` );

} ( 'Zac', 34 ) );

// Methods (functions inside of objects)
const person = {

  name: 'Zac Heisey',
  // Traditional Method
  sayHi: function() {
    console.log( `Hey ${ this.name }` );
  },
  // Short-hand Method
  yellHi() {
    console.log( `HEY THERE ${ this.name }!!` );
  }

}

// Callback Function
const button = document.querySelector( 'button.click-me' );

button.addEventListener( 'click', person.yellHi );

// Timer Callback
setTimeout( person.sayHi, 1000 );
