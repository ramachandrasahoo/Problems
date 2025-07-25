//  Check if a year is a leap year next?

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

console.log(isLeapYear(1184));



