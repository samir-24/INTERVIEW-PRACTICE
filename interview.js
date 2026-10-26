//  a number is prime
const num = 7;
let isPrime = num > 1;

for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime" : "Not Prime");



//Print the Fibonacci series- Each number is the sum of the previous two numbers.
let a = 0;
let b = 1;

for (let i = 0; i < 7; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}


//Find an element using Linear Search

const arr = [10, 20, 30, 40];
const target = 30;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("Found at index:", i);
        found = true;
        break;
    }
}

if (!found) console.log("Not found");


//Find the largest number in an array
const arry = [12, 4, 19, 2, 8];

let largest = arry[0];

for (let i = 1; i < arry.length; i++) {
    if (arry[i] > largest) {
        largest = arry[i];
    }
}

console.log(largest); // 19


//smallerst
const ar = [12, 4, 19, 2, 8];

let smallest = ar[0];

for (let i = 1; i < ar.length; i++) {
    if (ar[i] < smallest) {
        smallest = ar[i];
    }
}

console.log(smallest); // 2


// Reverse a stringconst str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed); // "olleh"


// . Check whether a string is a palindrome
const str = "madam";
let reversedd = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedd += str[i];
}

if (str === reversedd) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// ARRAY REVERSED 

const array = [1, 2, 3, 4, 5];
const reverse = [];

for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
}

console.log(reverse); // [5, 4, 3, 2, 1]


//sum of array

const arra = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arra.length; i++) {
    sum += arra[i];
}

console.log(sum); // 100