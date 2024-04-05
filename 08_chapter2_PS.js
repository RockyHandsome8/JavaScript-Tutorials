// Chapter 2 Practice set
// **********Problem No 1************
/*
let age = prompt("Enter your age"); // string to int conversion is done by the browser automatically, no need for any type casting here.

if (age > 10 && age < 20) {
    console.log('Your age is between 10 and 20')
}

else {
    console.log("Your age doesn't lie between 10 and 20")
}
*/



// *****Problem No 2*******
/*
let age = prompt("Enter your age"); // string to int conversion is done by the browser automatically, no need for any type casting here.
age = Number.parseInt(age)
switch (age) {
    case 12:
        console.log("Your age is 12")
        break;
    case 13:
        console.log("Your age is 13")
        break;
    case 14:
        console.log("Your age is 14")
        break;
    case 15:
        console.log("Your age is 15")
        break;
    default:
        console.log("Your age is not special")
}
 */



// *****Problem No 3*******
/*
let num = prompt("Enter your age"); // string to int conversion is done by the browser automatically, no need for any type casting here.
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3")
}
else {
    console.log('Your number is not divisible by 2 or 3')
}
*/




// *****Problem No 4*******
/*
let num = prompt("Enter your age"); // string to int conversion is done by the browser automatically, no need for any type casting here.
num = Number.parseInt(num);
if (num% 2 == 0) {
    console.log('Your number is divisible by 2')
}
if (num % 3 == 0){
    console.log('Your number is divisible by 3')
}
*/




// **********Problem No 5************
let age = 12;
let a = age > 18 ? "You can drive" : "You cannot drive"; // ternary operator used here, no need for any type casting here."
console.log(a);