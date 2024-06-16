


// Array: It allows you to store multiple values in a single variable.
// Array Element: Each value within an array is called an element. Elements are accessed by their index.
// Array Index: A numeric representation that indicates the position of an element in the array. JavaScript arrays are zero-indexed, meaning the first element is at index 0.
// Array Length: The number of elements in an array. It can be retrieved using the length property.

// let arr = []; // Array declaration
// let books = ["Maths","English","Science","CS"]; // array declaration and defination



// Accessing the element of array


// Indexing :- Indexing in an array is a way to access specific elements in an array by assigning 
// a numerical value to each element

// let books = new Array("Maths","English","Science","CS"); // another method to initilize an array
// console.log(books[3]);// CS
// console.log(books[0]); // Maths
// console.log(books[2]); // Science 
// console.log(books[1]); // English


// Updating/Replacing an element in an array

// let books = ["Maths","English","Science","CS"];

// books[1]="DSA";
// console.log(books);

// array length

// let arr = ["Maths","English","Science","CS"];
// let len = arr.length;
// console.log(len);


// Add method

// let arr = ["Maths","English","Science","CS"];

// arr[4]= "Hindi"
// console.log(arr);

// arr[10]= "CN"
// console.log(arr); // [ 'Maths', 'English', 'Science', 'CS', 'Hindi', <5 empty items>, 'CN' ]

// Array Methods

// pop() method :- this method removes the last element of an array

// let books = ["Maths","English","Science","CS"];
// books.pop();
// console.log(books);

// if u want to check which element is removed then store arr.pop() in a variable 

// let books = ["Maths","English","Science","CS"];
//  let removedElement= books.pop();
//  console.log(removedElement);
//  console.log(books);


// push method :- This method add an element at the end of an array

// let books = ["Maths","English","Science","CS"];
//  books.push("DSA");
// console.log(books);

// shift method :- This method remove an element from the starting of an array

// let books = ["Maths","English","Science","CS"];
//  books.shift();
// console.log(books);

// unshift method :- This method add an element in begining of an array

// let books = ["Maths","English","Science","CS"];
//  books.unshift("Hindi");
// console.log(books)


// splice method
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// syntax
// array.splice(index, count, item1, ....., itemX)


// Parameter	Description
// index	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.
// count	Optional.
// Number of items to be removed.
// item1, ...,	Optional.
// The new elements(s) to be added.


// let books = ["Maths","English","Science","CS"];
//  let removedElement= books.splice(1,2);
//  console.log( removedElement);

//  let books = ["Maths","English","Science","CS"];

//   let addElement = books.splice(2,0,"Hindi");
//   console.log(addElement)
//   console.log(books);


// How to empty an array

// let books = ["Maths","English","Science","CS"];
// books = [];
// console.log(books)

// books.length = 0;
// console.log(books);


// join() 
// The join() method returns an array as a string.
// Syntax
// array.join(separator)


// let arr = ["hi","hello","bye"]
// console.log(arr.join(' '))

// find method using callback function

// let courses = [
//     { no : 1, naam : "Adarsh" },
//     { no : 2, naam : "Tripti" },
// ]

//  let findCourse = courses.find(function(course){
//         return course.naam == "Adarsh";
//  })

//  console.log(findCourse);

// let findCourse = courses.find(course=>course.naam === "Adarsh")
// console.log(findCourse);

// slice()

// syntax
// arr.slice(starting index,end index)

// let arr = [1,2,3,4,5,6];

// console.log(arr.slice(1,4));

// for-of loop in array

// let arr = [1,2,3,4,5,6]

// for(let value of arr){
//     console.log(value);
// }

// for each in array
// let arr = [1,2,3,4,5,6];

// arr.forEach(function(anyname){
//     console.log(anyname);
// })

// arr.forEach((anyname)=>{
//     console.log(anyname);
// })

// filter method in array

// let arr = [1,2,4,-1,2,-3,-6]

// let filteredArray=arr.filter( value=>value >= 0)
// console.log(filteredArray)

// map method in array

// let arr = [1,2,3,4,5,6];

// let mapArray= arr.map(value=>"🧀" +" "+ value);
// console.log(mapArray);
