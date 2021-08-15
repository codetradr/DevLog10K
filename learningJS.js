var colors = ['red', 'blue', 'green', 'yellow'];
var selectedColor = colors[3];

// if - else if - else

/* if (selectedColor === 'red') {
    console.log("The color is red");
}

else if (selectedColor === 'blue') {
    console.log("The color is blue");
}

else if (selectedColor === 'green') {
    console.log("The color is green");
}

else {
    console.log("The color is yellow");
} */

// switch - case - default: similar to if - else if - else

/* switch(selectedColor){
    case "red": console.log("The color is red."); break;
    case "blue": console.log("The color is blue"); break;
    case "green": console.log("The color is green."); break;
    case "yellow": console.log("The color is yellow."); break;
    default: console.log("There was an error!");
} */


// && to test if all conditions are true

/* var goodMood = true;
var goodSleep = true;

if( goodMood && goodSleep ){
    console.log("today is a good day");
}
else {
    console.log("I am grumpy");
} */

// using the pipe ( || ), same as "or"  - testing if any of the conditions is met, to return true
/* 
var gotBreakfast =  true;
var gotLunch = true;
var gotDinner = false;

if( gotBreakfast || gotLunch || gotDinner) {
    console.log("I am not starving.");
}
else {
    console.log("I am starving!");
} */

// for loop. initialize counter, condition, increment loop

for (var i = 0; i < 10; i++){
    console.log(i)
}


// the for ... of Loop
var food = ['mango', 'apple', 'tomato', 'lasagna', 'fish'];

for ( var eachFood of food){
    console.log(eachFood);
}


// while loop
var counter = 0;
var myString = "";

while (counter < 10) {
    myString += "The counter has gone up to " + counter + "\n";
    counter ++;
}
console.log(myString);

//template literals. similar to string formatting or fstrings in python. put a string in tick marks and the variable in ${} ...
var age = 10;
counter = 0;
var myString = "I am 10 years old. \n";

while (age < 20) {
    myString += `In ${counter} years, I will be ${age} years old. The square of my age = ${age ** 2} \n`;
    age ++;
    counter ++;
}
console.log(myString);
