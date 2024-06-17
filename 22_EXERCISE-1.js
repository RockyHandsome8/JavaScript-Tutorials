/*
Write a JS program to generate a random number and store 
it in a variable. The program then takes an input from the 
user to tell them whether the guess was correct , greater 
or less than the original number. 100 - (no. of guesses) is 
the score of the user. The program is expected to terminate 
once the number is guessed. Number should be between 1-100.
*/

const { question } = require("readline-sync")

let num = 69
let guess
let c = 0
while (guess != num) {
    let guess = question("Guess the number: ")
    if (guess < num){
        console.log(guess + " is less than the number, try again...")
    }
    else if (guess > num){
        console.log(guess + " is greater than the number, try again...")
    }
    else if (guess == num){
        console.log(guess + " is correct!!")
        break
    }
    c += 1
}

console.log("\nAnd your score is " + (100 - c))