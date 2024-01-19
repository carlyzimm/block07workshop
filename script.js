// JS file for Block 7 Workshop

// 1. Write pseudocode

// 2. Make a string with the intro phase

const introMessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

console.log(introMessage);

/* 3. Make 3 variables
     -1st variable must equal 10
     -2nd variable must equal 40
     -3rd variable must equal 39
     */

const num1 = 2 * 5;
const num2 = 8 * 4 + 8; //PEMDAS applies
const num3 = 289 % 50; //modulo opertator returns the "remainder"

console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Number 3:", num3);

// 4. (comment code)

// 5. Create a dialogue box with the values

alert(introMessage + "\n" + num1 + " - " + num2 + " - " + num3);
