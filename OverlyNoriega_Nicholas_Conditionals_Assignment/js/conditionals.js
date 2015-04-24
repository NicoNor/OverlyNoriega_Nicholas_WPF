

//Formula: F = G m 1 m 2 / r 2

//Setting formula variables.
var m1, m2, r, f, userInput;

userInput = prompt("Welcome to Newton's Law of Universal Gravitation Calculator. \n\nPlease Enter Mass1(m1).");
//Checking that input is a number, re-prompting suer for a number, and validating on console.
isNaN(userInput)?userInput=prompt("Error: The Value You Have Entered Is Not A Number.\nPlease Enter A New Value."):console.log("Is A Number");

userInput = prompt("Please Enter Mass2(m2).");
//Checking that input is a number, re-prompting suer for a number, and validating on console.
isNaN(userInput)?userInput=prompt("Error: The Value You Have Entered Is Not A Number.\nPlease Enter A New Value."):console.log("Is A Number");

userInput = prompt("Please Enter Distance(r).");
//Checking that input is a number, re-prompting suer for a number, and validating on console.
isNaN(userInput)?userInput=prompt("Error: The Value You Have Entered Is Not A Number.\nPlease Enter A New Value."):console.log("Is A Number");

