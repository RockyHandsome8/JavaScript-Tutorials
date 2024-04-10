// Program to add first n natural numbers using for loop
let sum = 0;
// let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 1; i < n; i++) {
    sum += i
}
console.log("Sum of first " + n + " natural numbers is " + sum);



for (var i = 1; i < n; i++) { // var lagane se variable ka scope global ho jata hai
    sum += i
}
console.log("Sum of first " + n + " natural numbers is " + sum);

// for (let statement 1; statement 2; statement 3){}
/*
Statement 1 is executed first
statement 2 is then executed, if it evaluates to true then the body of the loop will be executed
statement 3 is finally executed
then, statement 2 wil be evaluated again and so on
*/





// Program to display the factorial of a number 'n' using for loop.
// n! = n * (n-1) * (n -2) ... * 1 
// fact = 1;
// let N = prompt("Enter a positive integer: ");
// for (let i = N; i > 0; --i) {
//     fact *= i;
// }
// console.log("Factorial of " + N + " is : " + fact)






let obj = {
    Rakshit: 98,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
// [for in] loop is used for iterating objects
for (let a in obj) { // for in loop in javascript
    console.log('Marks of ' + a + ' are ' + obj[a])
}

// [for of] loop is used for iterating strings, Arrays, etc
for (let b of "Rakshit") { // for of loop in javascript
    console.log(b)
}