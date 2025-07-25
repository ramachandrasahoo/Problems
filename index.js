// What is a prime number?
function isPrime(number) {
    if (number <= 1  ) {
        return `${number} is not a prime number`
    }
    for (i = 2 ; i < number ; i++) {
        if (number % i === 0) {
            return `${number} is not prime`
        }
    }
    return `${number} is prime`
}

console.log(isPrime(84));

