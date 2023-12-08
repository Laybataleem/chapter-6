// EXERCISE  6.1
//  step 1
function addNum(num1, num2) {
    return num1 + num2;
}
// step 2
let var1 = 3;
let var2 = 7;

// step 3
console.log("Result 01 of adding two variables:"+ addNum(var1, var2));

// step 4
var result2 = addNum(8, 10); // Using two more numbers directly
console.log("Result 02 of adding two variables:", result2);
// EXERCISE  6.2
// Step 1
let descriptiveWords = ["Beautifull", "Charming", "Cool", "Tasty", "Horrible", "Adore", "Enjoy", "Large", "Fancy", "Amazing"];
// step 2
function askTheName() {
    let userName = prompt("Enter a name");
    // step 3
    let randomNumber = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];
    // step 4
    console.log(`The name ${userName} is ${randomNumber}`);
}
// step 5
askTheName();
// EXERCISE 6.3

let number1 = 14;
let number2 = 4;

let sum = "+";
let Sub = "-";

function calculator(_value1, _value2, _sign) {
    let ans
    if (_sign == '+') {
        ans = _value1 + _value2;
    }
    else if (_sign == '-') {
        ans = _value1 - _value2;
    }
    else {
        ans = _value1 + _value2;
    }
    console.log(`our answer is ${ans}`);
}
const operand1 = '+';
const operand2 = '-';

// addition
calculator(9, 3, operand1);
// subtraction
calculator(9, 3, operand2);
// invalid operator
calculator(9, 3,);
//  exercise 6.4

let arrayResult = [];

for (i = 0; i < 10; i++) {
    let firstValue = i * 5;
    let secondValue = i * i;

    function calculateFunc(alpha1, alpha2) {
        return alpha1 + alpha2;
    }
    let response = calculateFunc(firstValue, secondValue);
    arrayResult.push(response);
}

console.log(arrayResult);
// exercise 6.5
let beta = '1000';

(function(){
    let beta = 'The new value from IIFE 1'
    console.log("The local value from IIFE 1:"+ beta);
}());

let resultVariable = (function() {
    let beta = 'The new value from IIFE 2'
    return beta;
} ());
console.log("The return variable from IIFE 2:"+ resultVariable);
console.log("Original variable "+ beta);

let anonymousFunction = function(parameterValue) {
    let beta = parameterValue;
    console.log("Value from Anonymous function:"+ beta);
}
anonymousFunction("New value from anonymous function")

//excercise 6.6
function factorial(n) {
    // Base case: if n is 0, return 1
    if (n === 0) {
      return 1;
    } else {
      // Recursive case: return n multiplied by factorial of (n-1)
      console.log(`Calculating factorial(${n})`);
      return n * factorial(n - 1);
    }
  }
  
  // Example: Calculate factorial of 5
  const result = factorial(6);
  console.log(`Result: ${result}`);

  //excercise 6.7
  // Set the start variable at a value of 10
let start = 10;

// Create a function for countdown
function countdown(value) {
  // Output the current value to the console
  console.log(`Countdown: ${value}`);

  // Check if the value is less than 1, if true, return from the function
  if (value < 1) {
    return;
  } else {
    // If the value is not less than 1, continue the loop by calling the function with a decremented value
    countdown(value - 1);
  }
}

// Call the countdown function with the start variable
countdown(start);
// Create a second countdown using a condition if the value is greater than 0
function countdown2(value) {
    // Check if the value is greater than 0
    if (value > 0) {
      // Output the current value to the console
      console.log(`Countdown 2: ${value}`);
  
      // Decrease the value of the countdown by 1 and return, invoking the function again
      return countdown2(value - 1);
    }
  }
  
  // Call the second countdown function with a different start value
  countdown2(5);

  //excercise 6.8
  const myFunctionExpression = function(parameter) {
    console.log(`Function Expression: ${parameter}`);
  };
  
  // Pass an argument into the function
  myFunctionExpression("Hello, World!");
//   Normal Function Declaration:
  
  function myFunctionDeclaration(parameter) {
    console.log(`Function Declaration: ${parameter}`);
  }
  
  // Pass an argument into the function
  myFunctionDeclaration("Hello, World!");