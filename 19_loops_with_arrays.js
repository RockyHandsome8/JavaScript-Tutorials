let num = [3, 54, 1, 2, 4]

// Simple for loop in Javascript
for (let i = 0; i < num.length; i++) {
    console.log("Element: " + i, num[i])
}


// ForEach loop in Javascript
num.forEach((element) => {
    console.log(element * element)
})


// Array.from() method in Javascript
let name = "Rakshit"
let arr = Array.from(name) // Makes an array from a string
console.log(arr)


// for...of loop in Javascript
for (let i of num){
    console.log(i)
    }



// for...in loop in Javascript
for (let i in num){  // Here 'i' is the key of array (index no.), and num[i] is the value
     console.log(num[i])
}