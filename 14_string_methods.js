// ***Strings are immutable in JS***
let name = "rakshit"
console.log(name.length)

console.log(name.toUpperCase()) // UPPER CASE
console.log(name.toLowerCase()) // lower case

// slicing
// str.slice(from, to)
console.log(name.slice(2, 4)) // upper limit is not inclusive
console.log(name.slice(2)) // will return the string from index 2 till end of string
let fr = "shivika"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])

// name.replace(initial, final)
console.log(name.replace("a", "oc"))


// Concatination in JS
let friend = "Naman";
console.log(name.concat(" is a friend of ", friend, " ok"))
console.log(name + " is my friend")

let friend2 = "   Aman    ";
console.log(friend2.trim()) // trim will remove the spaces from both sides




// Quick quiz: use a for loop to print a string

let q = "Hello World!";
for (let i of q) {
    console.log(i)
}