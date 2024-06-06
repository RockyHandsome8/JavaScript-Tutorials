// Array methods in JavaScript
let num = [1, 2, 3];
// console.log(num);


let b = num.toString(); // toString() method converts the array into a string and returns it.
console.log(b)


let c = num.join('_') // join() method joins all elements of an array into a single string and returns this joined string.
console.log(c, typeof c)

let r = num.pop() // pop() method removes the last element from an array and returns that removed element.
console.log(`Popped ${r} from num`)

let r1 = num.push(7) // push() method adds a new element to the end of an array and returns this new length of the array.
console.log(num, r1)

let r2 = num.shift() // shift() method removes the first element from an array and returns that removed element.
console.log(r2, num)

let r3 = num.unshift(78) // unshift() method adds a new element to the beginning of an array and returns this new length of the array.
console.log(r3, num)