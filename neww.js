// // function multiply(num1, num2, operation) {
// //   operation(num1, num2);
// // }

// // function operation(num1, num2) {
// //   console.log(num1 * num2);
// // }

// // multiply(4, 3, operation);

// /*
//   Write a function called multiply that takes in three parameters: two numbers and a callback function.
//   Invoke the callback, passing in the product of the two numbers multiplied as the argument.
// */

// function multiply(num1, num2, operation) {
//   operation(num1, num2);
// }

// function operation(num1, num2) {
//   console.log(num1 * num2);
// }

// multiply(4, 6, operation);

function multiply(num1, num2, operation) {
  operation(num1, num2);
}

function operation(num1, num2) {
  console.log(num1 * num2);
}

multiply(4, 3, operation);

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// multiply(4, 3, (answer) => {
//   console.log(`The answer is ${answer}`); //should console.log 12
// });
