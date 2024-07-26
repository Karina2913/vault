/*

1. Initialize variable and assign value with the answer being 10 using division
2. Initialize variable and assign value with answer being 40 using multiplication
3. Initialize variable and assign value with answer being 39 using addition
4. Initialize variable that holds combination for all 3 previous results
5. Display combination using an alert pop-up

*/

// variable with message for the user
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// three variables which hold answers to combination
let num1 = 20 / 2;
let num2 = 4 * 10;
let num3 = 30 + 9;

// stores combined answers and displays on screen
let combination = `${message} ${num1} - ${num2} - ${num3}`;
alert(combination);