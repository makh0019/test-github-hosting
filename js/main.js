alert("JavaScript file is connected!");


/*global alert, console*/
/*var fruits = [
    "apple",
    "pear",
    "lemon"
];*/

//Print entire array:
/*alert(fruits);
//Print individual array elements:
alert(fruits[0]); //prints apple
alert(fruits[1]); //prints pear
alert(fruits[2]); //prints lemon

console.log(fruits[0]); //prints apple
console.log(fruits[1]); //prints pear
console.log(fruits[2]); //prints lemon*/

//Count the number of elements:
/*console.log("Number of array elements: " + fruits.length); //prints 3*/

/*
var grocery = [
    "bell peppers",
    "onion",
    "milk",
    "salt",
    "zuccini",
    "lemon",
    "strawberries"
];

console.log("Number of array elements: " + grocery.length);
console.log(grocery[0]); //prints bell peppers
console.log(grocery[2]); //prints milk*/

// ADDING NEW ARRAY ELEMENTS
// METHOD push()
/*
var testArr = [
    "first",
    "second",
    "third"
];
*/

/*console.log("Number of elements: " + testArr.length);

testArr.push("fourth", "fifth");
console.log("Number of elements: " + testArr.length);
console.log(testArr);*/


// METHOD splice()
//testArr.splice(0, 0, "fourth", "fifth");
//console.log(testArr);




// ASSOCIATIVE ARRAY

// create an empty array
/*var student = {};*/

/*student = {
    "name": "Dan",
    "age": 35,
    "enrolled": true
};*/

//print array:
//console.log(student);

//console.log(student["name"]);

//Check type of variables:
/*console.log(typeof student); //return object
console.log(typeof student["name"]); // return string
console.log(typeof student["age"]); //returns number
console.log(typeof student["enrolled"]); //returns boolean*/




//MULTIDIMENSIONAL ARRAY
/*var honda = [
    "Civic",
    "Accord",
    "CRV"
];
var toyota = [
    "Corolla",
    "Camry",
    "RAV"
];
var vw = [
    "Golf",
    "Passat",
    "Tiguan"
];
var stock = [
    honda,
    toyota,
    vw
];

console.log(honda[0]); //returns civic
//returns same result as:
console.log(stock[0][0]); //returns civic*/




//prompt()
/*var name = "Amel";*/

/*var name = prompt("What is Your name?");

console.log(name);

//confirm()
var decision = confirm("Are you sure you want to kill yourself");
console.log("Deleting file? " + decision);*/



//CONDITIONALS
//example: 


/*var day = prompt("What is the day?");
if(day === "Saturday"){
   console.log("I will go Skiing!");
}*/

//example:

/*var day = prompt("What is the day?");
var temperature = confirm("Is the weather good?")
if (day === "Saturday" && temperature === true) {
    console.log("I will go skiing!");
}*/




//example:

/*var day = prompt("What is the day?");
if(day === "Saturday"){
   console.log("I will go Skiing!");
} else{
    console.log("I will watch movies!"); 
}*/


//example:
var day = prompt("What is the day?");
var temperature = confirm("Is the weather good?");

if (day === "Saturday" && temperature === true) {
    console.log("I will go skiing!");
} else if (day === "Saturday" && temperature === false) {
  console.log("I will go hiking!"); 
} else {
  console.log(" I will watch a movie!");
}




