// Map method in JS
let arr = [45, 67, 89]
let a = arr.map((value, index, array) => {
    // console.log(value, index, array)
    return value + 1
})
// console.log(a)

// What's the map and forEach?

// Map returns a new array, whereas forEach modifies each existing array element.





// Filter Method in JS
// This method doesn't modify the existing array.
let arr2 = [45, 67, 89, 0, 1, 3, 5]
let a2 = arr2.filter((a) => {
    return a < 10
})
// console.log(a2, arr2)







// Array reduce method in JS
let arr3 = [1, 2, 3, , 5, 2, 1]
const reduce_func = (h1, h2) => {
    return h1 + h2
}

let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)