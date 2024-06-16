// Function - Function is a block of code that perform speific task

// Declaring a function 

// function sayHi(){
//     console.log("Hi Function")
// }

// Calling or Invoaking a function

// function sayHi(){
//     console.log("Hi Function")
// }
// sayHi(); // function calling


// Parameters in function

// function add(num1,num2){
//     console.log(num1 + num2);
// }
 // Arguments in function
// add(100,200)

// Anonymus Function

// let multiply = function(num1,num2){
//     console.log(num1 * num2);
// }

// multiply(3,8);

// IIFE (Immediately Invoked Function Expression)

// let sum = (function(a,b){
//    console.log(a+b);
// })(3,5)

//  Function expression 

// function sum(a,b){
//     let total = a+b;
//  console.log(total)
// }

// let funExp = sum(20,5);
// console.log(funExp)

// function to find square of a number


// function findSquare(num) {

   // return square
//     return num * num; 
// }

// call the function and store the result
// let square = findSquare(3);

// console.log(`Square: ${square}`);

// function Adarsh (){
//    console.log(this);
// }
// Adarsh();

// Arrow function 

// const sum = (num1 ,num2)=>{
//      return num1 + num2;
// }
// console.log(sum(5,6))

// implicit return - in which we does not use or wrte return keyword

// const sum = (num1 , num2)=> (num1 + num2);
// console.log(sum(1,2));

// Callback function

// function sayHi(){
//    console.log("hi..");
// }
// sayHi()

// function sayHello(){
//    console.log("hello");
// }
// sayHello()

// function sum(num1,num2,callback){
//    console.log(num1+num2);
//    callback();
// }
// sum(2,3,sayHi);
// sum(2,3,sayHello);

// rest parameters

// function fun (...args){
//    let result = 0;
//    for (let i =0; i<args.length;i++){
//       result += args[i];
//    }
//    console.log(result);
// }
// fun(2,3);
// fun(2,3,5,7);
// fun(2,3,5,7,9,11);


// default parameters

// function fun(msg){
//    console.log(msg);
// }
// fun("Bye Adarsh");


// function fun(msg = "Hi adarsh"){
//    console.log(msg);
// }
// fun();

// function to add more than two varaible

//  function sum(){
//   let total =0;
//   for(let value of arguments){
//        total+= value;
//   }
//   return total;
         
// }

// console.log(sum(1,2,5))


// Rest operator

// function sum(...args){
//    console.log(args)
// }

// sum(1,2,3,4)


// Getter and Setter
// getter - access the properties
// setter - cahnge or mutate the properties

let person = {
   firstName : "Adarsh",
   lastName  : "Singh",

   get fullName(){
      return `${person.firstName} ${person.lastName}`;
   },
   set fullName(value){
      let parts = value.split(' ')
      this.firstName = parts[0];
      this.lastName = parts[1];
   }
}


// function fullName(){
//    return `${person.firstName} ${person.lastName}`;
// }
// console.log(fullName());
// person.fullName= "Shubham Singh";
// console.log(person.fullName);


// Reducing an array

// let arr = [1,2,3,4,5];
// let total =0;

// for(let value of arr){
//    total = total+ value;
// }
// console.log(total);

// let arr = [1,2,3];
// let reducedArray = arr.reduce((accumulator,currentValue)=>accumulator + currentValue,0);

// console.log(reducedArray);

