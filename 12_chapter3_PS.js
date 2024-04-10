// Write a program to print the marks of a student in an object using for loop
obj = { harry: 98, rohan: 70, aakash: 7 }

/*
for (let key in obj) {
    console.log("the marks of " + key + " is " + obj[key])
}
*/

// Harry bhai ka tarika:
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log('The marks of ' + Object.keys(obj)[i] + ' is ' + obj[Object.keys(obj)[i]])
}









// Write a program to print "Try again" until the user enters the correct number
const num = 69;
while (true) {
    let guess = prompt("Guess my secret number")
    guess = Number.parseInt(guess)

    if (guess < num) {
        console.log('Your guess is too low, try again...')
    }
    else if (guess > num) {
        console.log('Your guess is too high, try again...')
    }
    else if (guess == num) {
        console.log('You got it right!')
        break
    }
}





// write a function that calculates the mean of 5 numbers.
let mean = (a, b, c, d, e) => {
    console.log('The average is ' + ((a + b + c + d + e) / 5))
}

mean(1, 2, 3, 4, 5)