// // function multiply(num1, num2, operation) {
// //   operation(num1, num2);
// // }

// // function operation(num1, num2) {
// //   console.log(num1 * num2);
// // }

// // multiply(4, 3, operation);

// /*
//   Write a function called multiply that takes in three parameters: two numbers and a callback function.
// //   Invoke the callback, passing in the product of the two numbers multiplied as the argument.
// // */

// // function multiply(num1, num2, operation) {
// //   operation(num1, num2);
// // }

// // function operation(num1, num2) {
// //   console.log(num1 * num2);
// // }

// // multiply(4, 6, operation);

// function multiply(num1, num2, operation) {
//   operation(num1, num2);
// }

// function operation(num1, num2) {
//   console.log(num1 * num2);
// }

// multiply(4, 3, operation);

// // UNCOMMENT THE FUNCTION CALL BELOW
// // RUN THIS FILE WITH NODE
// // CHECK YOUR ANSWER

// // multiply(4, 3, (answer) => {
// //   console.log(`The answer is ${answer}`); //should console.log 12
// // });

contains(names, "Colt", (result) => {
  if (result === true) {
    console.log("Colt is in the array");
  } else {
    console.log("Colt is not in the array");
  }
});

////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
let uniq = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        arr.splice(k, 1);
        k--;
      }
    }
  }
  callback(arr);
};

/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
uniq(names, function (uniqArr) {
  console.log(
    "The new names array with all the duplicate items removed is" + uniqArr
  );
});
