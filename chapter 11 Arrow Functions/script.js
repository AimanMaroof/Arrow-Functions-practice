// CHP# 11 FUNCTIONS


// QS --> 1 Square of a Number:
// Write an arrow function that takes a number as input and returns its square.
const square = (num) => num * num;

const number = 5;
console.log(`The square of ${number} is ${square(number)}`); // Output: The square of 5 is 25


// QS --> 2 Array of Even Numbers:
// Create an arrow function that takes an array of numbers and returns a new array containing only the even numbers
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0); // .filter array k hr element jo chk krta hai


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(`Even numbers: ${evenNumbers}`); // Output: Even numbers: 2,4,6,8,10



// QS --> 3 Concatenate Strings:
// Write an arrow function that takes two strings as arguments and returns them concatenated.
const concatenateStrings = (str1, str2) => str1 + str2; //ye just 1 string ko 2usre string se join krdeta hai


const string1 = "Hello, ";
const string2 = "world!";
const result = concatenateStrings(string1, string2);
console.log(result); // Output: Hello, world!



// QS --> 4 Find Maximum Number in an Array:
// Create an arrow function that accepts an array of numbers and returns the maximum value in the array. 
const findMaxNumber = (arr) => Math.max(...arr); // math.max ye array mei se sbse bari value ko find kre ga

const numbers1 = [3, 5, 7, 2, 8, 1, 4, 21];
const maxNumber = findMaxNumber(numbers1);
console.log(`The maximum number is: ${maxNumber}`); // Output: The maximum number is: 21



// QS --> 5 Sum of All Numbers in an Array:
// Write an arrow function that takes an array of numbers as input and returns the sum of all the numbers.
const sumOfNumbers = (arr) => arr.reduce((accumulator, current) => accumulator + current, 0);


const numbers3 = [1, 2, 3, 4, 5];
const totalSum = sumOfNumbers(numbers3);
console.log(`The sum of all numbers is: ${totalSum}`); // Output: The sum of all numbers is: 15



// QS --> 6 Print "Hello World" (No Parameters):
// Write an arrow function that takes no parameters and simply prints "Hello World" to the console.
const printHelloWorld = () => console.log("Hello World!");
printHelloWorld(); // result: Hello World!




// QS --> 7 Calculate Square of a Number (With Parameter):
// Create an arrow function that takes a number as a parameter and returns its square.
const calculateSquare = (num) => num * num;

const number6 = 4;
const square2 = calculateSquare(number6);
console.log(`The square of ${number6} is: ${square2}`); // Output: The square of 4 is: 16




// QS --> 8 Check if Number is Positive (With Parameter):
// Write an arrow function that accepts a number as a parameter and returns true if the number is positive, and false if it is negative or zero.
const isPositive = (num) => num > 0;


const number1 = 5;
const number2 = -3;
const number3 = 0;

console.log(`Is ${number1} positive? ${isPositive(number1)}`); // true
console.log(`Is ${number2} positive? ${isPositive(number2)}`); // false
console.log(`Is ${number3} positive? ${isPositive(number3)}`); // false



// QS --> 9 Generate a Random Number (No Parameters):
// Create an arrow function that takes no parameters and returns a random number between 1 and 50.
const generateRandomNumber = () => Math.floor(Math.random() * 50) + 1; //math.random 0 se 50 tk range mei lekr aayega, or math.floor


const randomNumber = generateRandomNumber();
console.log(`Random number between 1 and 50: ${randomNumber}`);



// QS --> 10 Convert Minutes to Seconds (With Parameter):
// Write an arrow function that takes minutes as a parameter and returns the equivalent time in seconds.
const convertMinutesIntoSeconds = (minutes) => minutes * 60;

const minutes = 5;
const seconds = convertMinutesIntoSeconds(minutes);
console.log(`${minutes} minutes is equal to ${seconds} seconds.`); // result: 5 minutes is equal to 300 seconds.


