// delete
// let num = [1, 2, 3, 4, 5, 6, 7]
let num_more = [11, 12, 31, 14, 5, 61, 71]
let num_even_more = [121, 122, 321, 124, 25, 612, 271]
// delete num[0]  // Isse array ki length pe koi farq nahi padega;
// console.log(num.length)




// concat()
// let newArray = num.concat(num_more, num_even_more) // This creates a new array with the name newArray
// console.log(newArray);
// console.log(num, num_more)




// sort() Method, 
// this method sorts an array in ascending order of the elements.
let compare = (a, b) => {
    return a - b;
}
// let num = [321, 132, 321, 134, 225, 612, 231]
// num.sort() // Note: this will sort the numbers in ascending order (alphabetically);
// num.sort(compare) // this will sort the numbers in ascending order (numerically);
// console.log(num)



// reverse() method in JavaScript.
// num.reverse()
// console.log(num)




// Splice & Slice Method in JS
let num = [321, 132, 321, 134, 225, 612, 231]
// // array.splice( startIndex, deleteCount, addItem(s) )
// let deletedValues = num.splice(2, 3, 1021, 1022, 1023) // Note: this method modifies the source array;
// console.log(num);
// console.log(deletedValues); // This will print out the deleted values in the array;

let newNum1 = num.slice(3) // Note: this doesn't modify the original source array;
let newNum2 = num.slice(3, 5) // The ending index is not included, i.e; 5 in this case;
console.log(num)
console.log(newNum1)
console.log(newNum2)