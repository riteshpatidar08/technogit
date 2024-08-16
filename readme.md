//let const var 
//operator
//if else, switch, ternary , template string
//functions
//non primivate



let grade = 'E'
let gradeDetails  ;
// if((grade == 'A') ||( grade == 'B')){
//   gradeDetails ='Your grade is excellent' ;
// }else if(grade == 'C'){
//     gradeDetails = 'Your grade is good'
// }else if(grade=='D'){
//     gradeDetails = 'Your grade is average'
// }else if(grade=='E'){
//     gradeDetails = 'Your grade is poor'
// }

 


switch(grade) {
    case 'A':
    case 'B':
        gradeDetails = 'Your grade is excellent';
        // No break statement, so it falls through to the next case
    case 'C':
        gradeDetails = "Your grade is good";
        // No break statement, so it falls through to the default case
    default:
        gradeDetails = "your grade is not defined";
}

console.log(`${grade} : ${gradeDetails}`);


let fruit = 'orange';
let fruitColor;
// if (fruit === "apple" || fruit === "cherry" || fruit === "strawberry") {
//   fruitColor = "red";
// } else if (fruit === "banana") {
//   fruitColor = "yellow";
// } else if (fruit === "orange") {
//   fruitColor = "orange";
// } else {
//   fruitColor = "unknown";
// }

switch (fruit) {
  case 'apple':
  case 'cherry':
  case 'strawberry':
    fruitColor = 'red';
    break;
  case 'banana':
    fruitColor = 'yellow';
    break;
  case 'orange':
    fruitColor = 'orange';
    break;
  default:
    fruitColor = 'unknown';
}

console.log(`${fruit} : ${fruitColor}`);

//NOTE -Types OF console
// Standard output
// console.log("Hello, World!");
// Error message
console.error('Oops! Something went wrong.');

// Warning message
console.warn('This is a warning message.');

// Informational message

// Please Check the use case of the both
//TODO - task
// console.log('This is an informational message.');
// console.info("This is an informational message.");



// Object inspection
// Example object with nested properties
// let person = {
//   name: "Ritesh",
//   age: 27,
//   address: {
//     city: "Jaipur",
//     zipCode: "302033"
//   },
//   hobbies: ["Reading",  "Hiking"]
// // };

// // Logging the object using console.dir()
// console.dir(person);

// // Tabular data
// let data = [
//   { name: 'Ritesh', age: 30, city: 'New York' },
//   { name: 'Utsav', age: 25, city: 'Los Angeles' },
//   { name: 'Aman', age: 35, city: 'Chicago' },
// ];

// Logging data in tabular format
// console.table(data);
// console.log(data); // Logs a table with the data

// Grouped messages

// console.group('Group');
// console.log('Message 1');
// console.log('Message 2');
// console.groupEnd();

// Counting occurrences
// console.count("Counter");
// console.count("Counter");
// console.count("Counter");

// Execution time measurement
// console.time('Timer');
// Some code to measure
// for (let i = 0; i < 1000000000; i++) {
//   Math.sqrt(i);
// }
// console.timeEnd('Timer');



//types of consoles
//use strict mode
//types of the functions
<!-- //function calling another function -->
//arrays
//methods of the array
 //pop //push //shift //unshift //indexOF //includes
 //objects

 // types of the consoles 
//log
console.log('hello')
console.log(obj)

//table
console.table(obj)

//warn 
console.warn(obj)

//error 
console.error("undefined")


//group 

console.group();
console.log("Level 1");
console.warn("More of level 1");
console.log('this is group')
console.table(obj)
console.groupEnd();
