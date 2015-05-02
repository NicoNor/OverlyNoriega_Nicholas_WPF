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

//We are now finding the discount %
var discount=prompt("What is the discount percent?");

//Validating
while(discount==="" || isNaN(discount)){
    discount=prompt("Please do not leave blank and only use numbers.\nWhat is the discount percent?");
}

decimalizr(discount);

calculathor(ogPrice);


//Converting user input for "discount" into decimal.
function decimalizr(percent){
    var discountPercent= percent / 100;
        console.log(discountPercent);
}


//Calculating the sale price. rate * original price = discount // original price - discount = Sale Price
function calculathor(price, dis){
    var salePrice= price * dis;
    console.log(salePrice);
}



