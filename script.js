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
        result += i;
    }
    return result;
}

// console.log(add(-5));

// Print the factorial of a given number n using a loop.

function multiply(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("enter a number greater than 0 and an integer")
    }
    let result = 1 ;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// console.log(multiply(0));

// Write a program to count how many digits are in a given number using a loop.
function countdigits(digit) {

}

// Print each element in an array of fruits.
// let fruits = ["apple", "banana", "mango", "orange", "grape"];
// fruits.forEach(function(val){
//     console.log(val);
// })

// Print the square of each number in an array.
// let num = [2, 4, 5, 6, 8];
// num.forEach(function(val){
//     console.log(val * val)
// })

// Count how many even numbers are in an array.

let num = [3, 4, 6, 45, 78, 34, 47, 29, 12, 68, 89];
let count = 0;
num.forEach(function(val) {
    if (val % 2 === 0) {
        count++;
    }
});
// console.log(count);
// Create a new array of lengths of each word in a string array.
let names = ["rama", "banamali", "payal", "chiku", "miku", "sai", "rupali", "mamali"];
let nameslength = [];
// names.forEach(function(val){
//     nameslength.push(val.length)
// });
// console.log(nameslength);

// From an array of names, print only those names that have more than 5 characters using forEach.

names.forEach(function(val){
    if (val.length > 5) {
        nameslength.push(val);
    }
});
// console.log(nameslength);

// From an array of strings, print only those which contain the letter 'a'.

let people = ["rama", "banamali", "payal", "chiku", "miku", "sai", "rupali", "mamali"];
let peopleA = [];
people.forEach(function(val){
    if (val.includes("a")) {
        peopleA.push(val);
    }
});
// console.log(peopleA);

