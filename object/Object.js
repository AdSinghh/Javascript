// Objects :-  javaScript object is an entity having state and behavior (properties and method).


// let obj ={}; // this is how we can declare an object

// let person = {
//     name: "Adarsh",
//     age : 25,
//     gender: "male",
// }

let cap = {
    firstName : "Steve",
    lastName  : "Rogers",
    age       : 102,
    friends   :["Bucky","Tony","Natasha"],
    isAvenger : true,
    address   :{
        state : "Manhattan",
        city  : "Brooklyn",
    },
    sayHi:function(){
        console.log("Hello Steve")
    } 
}
// console.log(cap);

// dot notation

// console.log(cap.firstName);
// console.log(cap.isAvenger);

// Bercaket Notation

// console.log(cap["age"]);
// console.log(cap["address"]);

// Access array in object

// console.log("My best friend is"+ " " + cap.friends[0]);

// Access function in Object

//  cap.sayHi();


// For in loop for object


// Use a 'for...in' loop to iterate over all enumerable properties of the object 'cap'
// for (let key in cap) {
   // Inside the loop, 'key' holds the current property name of the 'cap' object

   // Log the property name ('key') and its corresponding value ('cap[key]') to the console
//     console.log("key:" + key, "Value:" + cap[key]);
    
// }


// Updating an object

// cap.isAvenger = false;
// console.log(cap)

// adding a new property in an Object
// cap.movies = ["first avenger","Winter soldier","Civil War"];
// console.log(cap);


// delete key in object

// delete cap.address;
// console.log(cap)

// To check property available or not in an Object

// console.log('girlfriend' in cap);
// console.log('lastName' in cap);

// this 
// The this keyword is a reference variable that refers to the current object

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


// let cap = {
//     firstName : "Steve",
//     lastName  : "Rogers",
//     age       : 102,
//     friends   :["Bucky","Tony","Natasha"],
//     isAvenger : true,
//     address   :{
//         state : "Manhattan",
//         city  : "Brooklyn",
//     },
//     sayHi:function(){
//         console.log("Hello " + this.firstName + " and i have"+" "+car.brand)
//     } 
// }

// let car = {
//     brand : "Ferrari",
//     name  : "820 spyder"
// }


// cap.sayHi()



// Function to create Object

// Factory function


//  Defining a function named 'createPerson' which takes 'age' and 'name' as parameters
// function createPerson(age, name){
//   Returning an object where 'age' and 'name' properties are assigned based on the parameters

//   return person = {
//     age : age,
//     name : name,
//   }
// }

//  Creating a person object using the 'createPerson' function
// let person1 = createPerson(26, "Anurag");

// Creating another person object using the 'createPerson' function
// let person2 = createPerson(42, "Manik");

// Creating yet another person object using the 'createPerson' function
// let person3 = createPerson(25, "Abhay");

//  Logging the properties of 'person1' to the console
// console.log(person1);

//  Logging the properties of 'person2' to the console
// console.log(person2);

//  Logging the properties of 'person3' to the console
// console.log(person3);



// Constructor Function



// Constructor function - Pascal Notation: First letter of every word is Capital
// function Person(age, name) {
    // Inside the constructor function, setting the age property of the object to the value passed as the age parameter
   // this.age = age;
    
    // Inside the constructor function, setting the name property of the object to the value passed as the name parameter
   // this.name = name;
//}

// Creating an object using the Person constructor function
// The 'new' keyword is used to instantiate a new object from the constructor function
// The values 26 and "Anyname" are passed as arguments to the constructor function for the age and name parameters respectively
//let PersonObject = new Person(26, "Anyname");

// Logging the PersonObject to the console
//console.log(PersonObject);


// Object Cloning
// 1.Iteration 

// let person ={
//     name : "Adarsh",
//     age  : 25,
// }
// let cloneObj={};

// for (let key in person){
//     cloneObj [key] = person[key];
// }
// console.log(cloneObj);

// 2. Assign 

// let srcObj={
//     name : "Adarsh",
//     age  : 25,
// }
// let destObj = Object.assign({},srcObj)
// console.log(destObj)


// 3. Spread 

// let srcObj ={
//     name : "Adarsh",
//     age  :25,
// }

// let destObj = {...srcObj};
// console.log(destObj);



 