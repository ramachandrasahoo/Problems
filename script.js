//  🧠 Problem 2: Print even numbers from 1 to 20 
let newarray = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        newarray.push(i);
    }
}

// console.log(newarray);

// 🧠 Print the multiplication table of a number
// for (let i = 1; i<=10; i++) {
//     console.log(`5 * ${i} = ${i*5}`)
// }

// 🔢 Calculate the sum of numbers from 1 to n
function add(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new Error("enter a number greater than 0 and an integer")
    }
    let result = 0 ;
    for (let i = 1; i <= n; i++) {
        result += i ;
    }
    return result ;
}

console.log(add(-5));

