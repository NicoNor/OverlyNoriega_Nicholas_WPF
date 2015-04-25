//Nicholas Noriega Overly 4/23/15 Assignment: Conditionals

//Formula: F = G m 1 m 2 / r 2

//Setting formula variables.
var m1, m2, r, f, userInput;

userInput = prompt("Welcome to Newton's Law of Universal Gravitation Calculator. \n\nPlease Enter Mass1(m1).");
//Checking that input is a number, re-prompting user if number was not inputed.

if(userInput === ""){
    //If the user left it blank
    //reprompt the user using the SAME variable
    userInput = prompt("Please Do Not Leave Blank. \nPlease Enter Mass1(m1)");
}

isNaN(userInput)?userInput=prompt("Error: The Value You Have Entered Is Not A Number.\nPlease Enter A New Value."):m1=userInput;

//*********************************


userInput = prompt("Please Enter Mass2(m2).");
//Checking that input is a number, re-prompting user.

if(userInput === ""){
    //If the user left it blank
    //reprompt the user using the SAME variable
    userInput = prompt("Please Do Not Leave Blank. \nPlease Enter Mass2(m2)");
}

isNaN(userInput)?userInput=prompt("Error: The Value You Have Entered Is Not A Number.\nPlease Enter A New Value."):m2=userInput;

//**********************************

userInput = prompt("Please Enter Distance(r).");

if(userInput === ""){
    //If the user left it blank
    //reprompt the user using the SAME variable
    userInput = prompt("Please Do Not Leave Blank. \nPlease Enter Distance(r)");
}

isNaN(userInput)?userInput=prompt("Error: The Value You Have Entered Is Not A Number.\nPlease Enter A New Value."):r=userInput;

//**********************************


//Formula Solution. (Tested via calculator. Both JS and Calculator gave same answer when: m1(4), m2(4), r(4) = 6.67384e-11
//The e in the result = Euler's number.
f = ((6.67384* Math.pow(10,-11))*m1*m2) /Math.pow(r,2);

//Result of formula is prompted on screen and on console.
var result = String("The Gravitational Force is " + f);
alert(result);
console.log(result);

//Conditional statements tell us what happens when F(force) =  a positive, negative, or is equal to zero.
if(f < 0 ){
    console.log("Anti-Matter.");
}
else if(f > 0){
    console.log("Attraction.");
}
else if(f === 0 && !(f<0) && !(f>0)){
    console.log("Not In Gravitational Field.");
}
// negative = anti-matter, positive = attraction, zero = not in gravitational field