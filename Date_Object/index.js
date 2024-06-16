// console.log(Date.now());

// JavaScript new Date()
// new Date() creates a date object with the current date and time:

// let x = new Date();
// console.log(x);

// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

// let x = new Date(year,month,day,hour,minute,second,milisecond) 

// let x = new Date(1999,3,6,5,5,1000);
// console.log(x);


// let x = new Date("April 6, 1999, 5")
// console.log(x.getDate());

let x = new Date("April 6, 1999, 5")
x.setFullYear(2020);
console.log(x);