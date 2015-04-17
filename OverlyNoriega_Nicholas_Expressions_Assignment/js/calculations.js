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
// m= 2, v=4; KE = 1/2mv^2 = 1/2 2*4^2, v^2 = 4

var result = String("Kinetic Energy is " + KE);

alert(result);
console.log(result);