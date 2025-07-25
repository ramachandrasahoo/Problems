// Problem 2: Print even numbers from 1 to 20 
let newarray = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        newarray.push(i);
    }
}

console.log(newarray);