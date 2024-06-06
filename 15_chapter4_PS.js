// Problem 1: What will the following print in JS?
console.log("har\"".length) // 4

// Problem 2: Explore the includes(), startswith() & endswith() function of a string.
let text = "Hello world, welcome to the universe.";
console.log(text.includes("world")) // returns boolean type value true or false
console.log(text.startsWith("world")) // also returns boolean type value true or false
console.log(text.endsWith("world")) // also returns boolean type value true or false


// Problem 3: Write a program to convert a given string to lowercase.
console.log(text.toLowerCase())

// Problem 4: Extract the amount out of this string:
let text2 = "Please give Rs 1000"
// for (let i of text2.split(' ')) {
//     if (i == '1000') {
//         console.log(i)
//     }
// }

// Harry bhai ka code:
// console.log(text2.slice(text["give Rs 1000".split(' ')[1]].length))
console.log((text.split(' ')))