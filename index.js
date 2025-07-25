// Write a function that takes a number and returns its reverse.

function reversenumber(num) {
    if (typeof num !== "number") {
        throw new Error ("Enter a number");
    }
    let newstring = num.toString();
    let newnum = "";
    console.log(newstring);
    for (let i = newstring.length - 1; i >=0; i-- ) {
        newnum += newstring[i];
    }
    return Number(newnum) === num
}

console.log(reversenumber(1321));

// Factorial of a number

// Fibonacci sequence

// Sum of digits

// Count digits

// Check if a number is an Armstrong number

