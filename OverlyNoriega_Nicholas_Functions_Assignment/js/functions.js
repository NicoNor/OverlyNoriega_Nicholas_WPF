// Nicholas Noriega Overly
// Functions Assignment
// 5/1/2015

//alert("We are connected!")

//We are going to calculate the price of an item with a discounted amount.

// Prompting user to see if the calculator is useful to him.
var question=prompt("Welcome to Price Finder.\n Do you need help finding a price AFTER discount?");

//Making it so only yes and no can be used.
while(question != "yes" && question != "no") {
    question = prompt("Please only use yes or no.\n Do you need help finding a price AFTER discount?");
    //Making all answers lowercase to easily defind users answer.
    question = question.toLocaleLowerCase();
}
     while (question==="no"){
         alert("You do not need Price Finder.");
     }



//We are now finding the original price.
var ogPrice=prompt("What is the original price?");

//Validate- directly after the prompt.
while(ogPrice==="" || isNaN(ogPrice)) {
    ogPrice = prompt("Please do not leave blank and only use numbers.\nWhat is the original price?");
}

console.log("The original price is " + ogPrice);

//We are now finding the discount %
var discount=prompt("What is the discount percent?");


//Validating
while(discount==="" || isNaN(discount)){
    discount=prompt("Please do not leave blank and only use numbers.\nWhat is the discount percent?");
}

console.log("The discount is " + discount + "%");


//Converting user input for "discount" into decimal.
var decimalizr = function (percent){
    return percent / 100;
}

calculathor(ogPrice, decimalizr(discount));

//Calculating the sale price. rate * original price = discount // original price - discount = Sale Price
function calculathor(price, dis){
     return price - (price * dis);

}



var value = decimalizr(discount);


var solution = calculathor(ogPrice, value);

console.log("The item is on sale for a price of: " + solution);
