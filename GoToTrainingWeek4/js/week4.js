/**
 * Created by Nico on 5/1/15.
 */



//alert("Testing to see if connected.");

//Create a file that will give us a random number between two numbers

//Ask the user for the min number
var minNum = prompt("Let's find a number between two numbers!\nWhat is the min number:");

// Validate the prompt is not blank and it is a number
while(minNum==="" || isNaN(minNum)){
    //re-prompt the user
    if(minNum===""){
        minNum = prompt("Please do not leave blank.\nWhat is the min number:");

    } else if(isNaN(minNum)){

        minNum = prompt("Please only use numbers.\n What is the min number:");

    }

    minNum = prompt("Please do not leave blank and only use numbers.\n What is the min number:");

}

/*
Basic structure of a while loop

//Declare a variable
var x = prompt("Type in a number");

while( x < 6 ){

    //Some sort of change to the variable we in our condition to test.
    x++;

}

 */

