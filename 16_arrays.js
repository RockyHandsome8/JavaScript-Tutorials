// Everything inside [] is an array
// An array can have any type of element such as string or number etc...
let marks = [19, 32, 93, 44, 53, 62, false, "Not Present"];
console.log(marks)

// This is how to access the elements inside an array (Indexing):
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7])
console.log(marks[8]) // This statement will print undefined because the index is out of range (9)

console.log(`The length of marks is: ` + marks.length)

// Arrays are mutable in JS
marks[2] = 24;

for (let i = 0; i < marks.length; i++){
    // This for loop will print the elements inside an array one by one
    console.log(`The element at index: ` + i + ` is: ` + marks[i])
}

for (let a in marks) {
    console.log(marks[a]);
}