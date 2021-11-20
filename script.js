

"use strict";



// alert( 1 / 0 ); // Infinity

// let name = 'zaki';
//     alert(name);

// let name = 'zaki';
//     alert(`My name is ${name}!`);

// const age = 35;
// alert(`and I am ${age} years old`);

// let myName = prompt("What's your name?");
// console.log(`Good Morning, ${myName}`);

// let age = prompt("Enter your Date of Birth", '' );
// confirm(`Your age is ${age} - [current date]`);


// let age = prompt("Enter your Date of Birth", '' );
// let date = prompt("Enter Today Date, to calculate age", '');
// alert(`${date}, - , ${age}`);

// Find your AGE
let age = prompt("Enter Your Birth Year", "");
alert(`Your age is ${2021 - age}`);

// Find DATE OF BIRTH
let dob = prompt("How old are you", 'in years' );
alert(`Your date of birth is ${dob - 2021}`);

//All 3 couple of Action functions to interact with the user: alert, prompt and confirm.
let age = prompt("how old are you?",'');
let conf = confirm(`Your you ${age}?`);
alert(`Confirmed, your age is ${conf}`);
