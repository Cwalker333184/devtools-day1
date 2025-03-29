// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); //Corrected variable name

// Error 2: 
// Define the eventHandler function first
function eventHandler() {
  console.log('Button clicked');
}

let button = document.querySelector('.actionButton'); 
button.addEventListener('click', eventHandler); // Attaching the event listener to the button


// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput(); // Ensure this function exists
}

function displayOutput() {
  console.log('Output displayed successfully!');
}


// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output');  // Selecting the element with id 'output'

  if (output) {  // Check if the element was found
    output.innerText = 'You clicked the button!';  // Modify innerText if element exists
    console.log("Output element:", output);  // Log the element to the console
  } else {
    console.error('Output element not found!');  // Log error if element doesn't exist
  }
}



// Error 6: Misusing variable scope
let localMessage = ''; // Declare outside the function

function updateMessage() {
  localMessage = 'Updated message'; // Modify global variable
}

updateMessage();
console.log(localMessage); // Now it works!

// Error 7:
document.getElementById('testButton').addEventListener('click', testFunction); // Change made: Remove parentheses after 'testFunction' to pass the function reference, not the result

function testFunction() {
  console.log('Test function executed');
}


// Error 8:
let number1 = 10;
let number2 = 5;

// Corrected to add number1 and number2
console.log('Sum is: ' + (number1 + number2));

// Error 9: 
let nullVar = 'Hello, world!'; // Assign a string with a length property

console.log(nullVar.length); // This will now correctly log the length of the string (13)

// Error 10:
let caseSensitiveVar = 'Case matters';

// Fixed the variable name to match the declaration exactly
console.log(caseSensitiveVar); // Now it will correctly log the value 'Case matters'


// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";

// Fixed: Removed quotes to log the value stored in 'importantData'
console.log(importantData); // Logs the actual value of the 'importantData' variable


// Error 12: 
// Define the function first
function tryToCallFunction() {
  // Log a message when the function is called
  console.log('Function was called successfully!');
}

// Now you can call the function after it's defined
tryToCallFunction(); // Logs the message from the function

// Error 13:
let user = { namee: 'Alice' };

// Corrected: Access the 'namee' property instead of 'name'
console.log(user.namee); // Logs 'Alice'

// Error 14: 
let someNumber = 123;

// Convert the number to a string before calling toUpperCase (even though it doesn't change the number)
console.log(someNumber.toString().toUpperCase()); // This ensures no error and logs '123'


// Error 15: 
// Corrected code: Using quotes around the string
let greeting = 'Hello, world!'; // String is correctly wrapped in single quotes

// Alternatively, you can use double quotes
// let greeting = "Hello, world!";


// Error 16: 
// Fixed: Removed semicolon to properly include the block inside the for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // Logs the value of i during each iteration of the loop
}


// Error 17:
let five = '5';

// Fix 1: Convert 'five' to a number for comparison
if (Number(five) === 5) {
    console.log('Five is equal to 5'); // Logs 'Five is equal to 5' after conversion
} else {
    console.log('Five is not equal to 5');
}

// OR

// Fix 2: Convert the number to a string for comparison
if (five === String(5)) {
    console.log('Five is equal to 5'); // Logs 'Five is equal to 5' after conversion
} else {
    console.log('Five is not equal to 5');
}


// Error 18:
let originalPush = Array.prototype.push; // Store the original push method

Array.prototype.push = function() {
    console.log('Custom push called');
    return originalPush.apply(this, arguments); // Call the original push method
};

let numbers = [];
numbers.push(1); // Logs: 'Custom push called'
console.log(numbers); // Logs: [1]


// Error 19:
// Corrected code: Declare and initialize the variable before using it
let x = 5; // Initialize x first
console.log(x); // Logs: 5


// Error 20:
// Fix 1: Adding properties to a primitive string - use an object instead
let myString = { value: 'Hello' }; // Wrap the string in an object
myString.property = 'World'; // Now you can add properties
console.log(myString.property); // Logs: 'World'

// Fix 2: Accessing properties of null - check for null before access
function newFunction() {
  let nullVar = null;
  if (nullVar !== null && nullVar !== undefined) {
    console.log(nullVar.length); // Safe access to 'length'
  } else {
    console.log('nullVar is null or undefined'); // Handles null/undefined
  }
}

