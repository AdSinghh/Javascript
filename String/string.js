// String :-A JavaScript string stores a series of characters 

// let str = "Adarsh Adarsh"

// console.log(str);

// let str = "Adarsh\"singh"
// console.log(str)

// length of a string

// let str = "Adarsh";

// console.log(str.length);

// String methods

// 1. Extraction method

// Slice method 
// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

// The first position is 0, the second is 1

// Syntax
// string.slice(start, end+1)


// let str = "Adarsh"
// let slicedString = str.slice(1,4);
// console.log(slicedString);


// subStr

// The substr() method extracts a part of a string.

// The substr() method begins at a specified position, and returns a specified number of characters.

// The substr() method does not change the original string.

//Syntax
// string.substr(starting index, length up to the letter)
// let str = "Adarsh";
// let subString = str.substr(1,5);
// console.log(subString);

// Replacing String's content

// syntax
// string.replace(valueToBeReplaced, valueToBeReplacedWith)

// let sayHello = "hello Adarsh";
// let sayBye = sayHello.replace("hello","bye");
// console.log(sayBye);

 // replceAll() // it will replace all value with same name such as hi,hi,hi
//   let replacedStr= str.replaceAll("Adarsh","Singh");
//   console.log(replacedStr);


// toUpperCase and toLowerCase

// let text1 = "hello World";
// console.log((text1).toUpperCase());

// let text2 = "Hello World";
// console.log(text2.toLocaleLowerCase());

// concat() method :- The concat() method joins two or more strings.

// let firstName = "Adarsh";
// let lastName = "Singh";

 // let concatString = firstName.concat(lastName);
// let concatString = firstName.concat(" " + lastName);

// console.log(concatString);

// Trim()
// It is used to trim all white spaces means extra spaces in a string

// let str = "     Adarsh    "
// trimmedString= str.trim(str);
// console.log(trimmedString);


// indexOf()

// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

//Syntax
//string.indexOf(searchvalue, start)

// let intro = "Hello my name is Adarsh Singh";
// console.log(intro.indexOf("m"));
// console.log(intro.indexOf("m",7));


// includes()

// The includes() method returns true if a string contains a specified string.

// Otherwise it returns false.

// let hi = "hello world world";
// console.log(hi.includes("world"));

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);

// Program to reverse a string

// let str = "hello";          // Initialize the string variable 'str' with the value "hello"
// let reversedStr = "";       // Initialize an empty string 'reversedStr' to store the reversed string

 // Start a for loop with 'i' initialized to the last index of 'str' (str.length - 1)
 // Continue looping as long as 'i' is greater than or equal to 0
 // Decrement 'i' by 1 in each iteration
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];  // Append the character at index 'i' of 'str' to 'reversedStr'
// }

// After the loop completes, 'reversedStr' contains the reversed version of 'str'
// console.log(reversedStr);   // Output the reversed string to the console


// 1.Write a JavaScript function to check whether an 'input' is a string or not.

// function isString(input){
//    return typeof input === "string";
// }
// console.log(isString("hello"));
// console.log(isString(2));

// console.log(isString(""));


// 2.Write a JavaScript function to check whether a string is blank or not

// function isBlank (input){
//     return input.length === 0;
// }
// console.log(isBlank(""));
// console.log(isBlank("abc"));

// Write a JavaScript function to split a string and convert it into an array of words.

// function stringToArray(){
//     let str = "hello adarsh"
//     let toArray  = str.trim().split(" ");
//     console.log(toArray);
// }
// stringToArray();