let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is ", 1 + (a + b) / 2)
console.log("one Plus Avg of a and b is ", onePlusAvg(a, b))
console.log("round Off of Avg of a and b is ", roundOffAvg(a, b))

function onePlusAvg(x, y) { // functions in JS
    console.log("Done")
    return 1 + (x + y) / 2
}


function roundOffAvg(x, y) {
    return Math.round(1 + (x + y) / 2)
}


// Arrow function in JS (this is more prefered than normal functions)
const sum = (p, q) => {
    return  p + q;
};