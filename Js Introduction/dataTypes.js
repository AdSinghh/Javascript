// Datatypes:- Data types represent the different kinds of values we can use in JavaScript.
// there are two types of data type in js 
// 1. Primitve data type - They can hold single value. example:- String,Nmber,Boolean,Null,Undefined,Symbol
// 2. Non primitve dat type - They can hold multiple values (Reffrence). example:- Array,Function,Objects


// let a = 8!=5; 
// console.log(a);

// let age = 18;

// conditional operator

// if-else


// if (age >= 18){
//     console.log("You can vote")
// }
// else{
//     console.log("You can't vote")
// }

// terary operator

// Syntax

// (condition) ? "" : "";

// let age = 1
// let vote = (age >= 18 )? "you can vote": "You can't vote";
// console.log(vote);

// console.log((age >= 18 )? "you can vote": "You can't vote")


// Nullish ??

// let user;
//  user = "Adarsh";
// alert (user ?? "Guest User");


// Switch case

// let a = 20;
// let b = 10 ;
// cal = a+b;

// switch statement

// let result;

// Prompt the user to enter an operator
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

/// Prompt the user to enter two numbers
// const num1 = parseFloat(prompt("Enter first number"));
// const num2 = parseFloat(prompt("Enter second number"));

 // Perform the operation based on the operator provided
// switch(operator){
//     case "+" :
//         result = num1 + num2;
//         console.log(result);
//         break;
//     case "-" :
//         result = num1 - num2;
//         console.log(result);
//         break;
//     case "*" :
//         result = num1 * num2;
//         console.log(result);
//         break;
//     case "/" :
//         result = num1 / num2;
//         console.log(result);
//         break;    
//     default :
//         console.log("Invalid Operator");
// }


// While loop 

// let count = 0;

// while(count <= 10){
//     console.log(count);
//     count++;
// }

// Break statement :-The break statement "jumps out" of a loop.

// for (let i =1; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     document.write("Hello");
//     document.write('<br>');
// }

// Continue statement:- The continue statement "jumps over" one iteration in the loop.

// for (let i =1; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     document.write(i);
//     document.write('<br>');
// }

// alert("hello") // shows a message 

// prompt - shows a messge , enter value

// let name = prompt("Enter Your Name");
// document.write(name);


// let y= confirm("Are you sure,You want to delete ?")
// document.write(y);


// let a = 3;
// alert(typeof(a));