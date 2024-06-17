// Chapter 5 practice set

const { question } = require("readline-sync")

// Q1 - Create an array of numbers and take input from the user to add numbers to this array.
// arr = [45, 67, 89]
// let userInput = question("Enter a number to add: ")
// a = Number.parseInt(userInput)
// arr.push(a)
// console.log(arr)



// Q2 - Keep adding numbers to the array in Q1 until 0 is added to the array
// arr = [45, 67, 89]
// do {
//     let userInput = question("Enter a number to add: ")
//     a = Number.parseInt(userInput)
//     arr.push(a)
//     console.log(arr)
// } while (a != 0)




// Q3 - Filter all the numbers divisible by 10 in an array
// let a = [45, 67, 89, 12, 30, 50, 69]
// let filter_a = a.filter((val) => {
//     return val % 10 == 0
// })
// console.log(filter_a)





// Q4 - Create an array of square of given numbers
// let a = [45, 67, 89, 12, 30, 50, 69]
// let n = a.map((x) => {
//     return x ** 2
// })
// console.log(n)




// Q5 - Use reduce() to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial need to be calculated)
let a = [1, 2, 3, 4]
let n = a.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)
