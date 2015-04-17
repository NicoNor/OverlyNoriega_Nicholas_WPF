//
var user_input = new Array(2);
var mass,velocity;

user_input[0] = prompt("Welcome to simple Kinetic Energy Calculator by Nico \n\n Please Enter Mass (number value)");

//used Float for decimal precision
mass = parseFloat(user_input[0]);


user_input[1] = prompt("Please Enter Velocity (number value");

velocity = parseFloat(user_input[1])

//assigning square value of Velocity
velocity *= velocity;



var KE = (mass * velocity) /2;
