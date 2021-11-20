

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
alert(`Your date of birth is ${2021 - dob}`);

//All 3 couple of Action functions to interact with the user: alert, prompt and confirm.
let age = prompt("how old are you?",'');
let conf = confirm(`Your you ${age}?`);
alert(`Confirmed, your age is ${conf}`);


// // Age Restriction for below 18 years old Age

// let age18 = confirm("Are you are 18 years old ");
// let yourName = prompt("Enter Your Name","");
// let yourAge = prompt("Enter Your year of Birth");
//  alert(`Welcome ${yourName} your age is ${yourAge - 2021}`);



let conf = confirm("You must be at least 18 years old to view this content.");
let name = prompt("What's your name?","");
let age = prompt("What's your age?","");

if (age>=18) {
alert("Welcome!you are eligible");
}
else {
alert("Sorry, you must be at least 18 years old to view this content.");
}



// // AGE Restriction using fully described in each case using if/else statement
let conf = confirm("You must be at least 18 years old to view this content.");
let name = prompt("What's your name?",'');
let dob = prompt("Enter your Birth year",'');
let age = (`${2021 - dob}`);

if (age>=18) {
alert(`Welcome! ${name} you are eligible while your age is ${age}. We wish you best of LUCK.`);
}
else {
alert(`Sorry ${name} your age is ${age} and you must be at least 18 years old to view this content.`);
}
