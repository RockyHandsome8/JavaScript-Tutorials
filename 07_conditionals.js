// let a = prompt("hey, what's your age?");
// a = Number.parseInt(a); // Converts a string to a number (str => Num)
// if (a < 0) {
//     alert('this is an invalid age!');
// }
// else if (a < 9) {
//     alert("You're not old enough, you can't even think of driving!");
// }
// else if (a > 0 && a < 18) {
//     alert("You're not old enough, but you can think about driving");
// }
// else {
//     alert('You can drive');
// }
// console.log('done')



// Case() Program => Homework question:

let day = 'Sunday'

switch (day) {
    case 'Monday':
        console.log('7am');
        break;
    case 'Tuesday':
        console.log("4am");
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('9am');
        break;
    case 'Saturday':
        console.log('8am');
        break;
    case 'Sunday':
        console.log('10am');
        break;    
}