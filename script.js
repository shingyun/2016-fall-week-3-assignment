/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */


var productList = [];//this is an array

var shoe1={
	name: "Venture6",
	manufacturer: "ASICS",
    price: 97.95
}
var shoe2={
	name: "Breathable shoes",
	manufacturer: "Jackchibo",
    price: 32.99
}
var shoe3={
	name: "Gusto Trainer",
	manufacturer: "Champion",
    price: 39.97
}
var shoe4={
	name: "Adult Classis",
	manufacturer: "PUMA",
    price: 168.32
} 

productList.push(shoe1,shoe2,shoe3,shoe4);

console.log(productList);

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array


/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i=0;i<productList.length; i++){

  if(productList[i].price<50){
	console.log("I want to buy " + productList[i].name + productList[i].price );
  }
}
/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length
var sum = 0

for(var i=0; i<productList.length; i++){
	sum = sum+productList[i].price;
}
var average=sum/productList.length
console.log(average)

/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */
function compareP(p){
    var numOfPro = 0;
    for(var i=0; i<productList.length; i++){
    if(productList[i].price < p)
    numOfPro = numOfPro+1
    }
    return numOfPro;
}
//
console.log("The number of products below $10 is " + compareP(10));
console.log("The number of products below $50 is " + compareP(50));




