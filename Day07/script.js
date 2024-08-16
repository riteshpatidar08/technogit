// console.log('we are learning js')

// //data types
// // primitive data types

// //string 
// //number
// //boolean
// //undefined
// //null
// //-----NOTE--//
// //bigInt
// //symbol


// //NON-primitve 
// // arrays []
// // object  {}

// //value and variable


// //NOTE declaring variables
// // camelCase
// //NOTE typeof is used to check the type of the data stored in variable.

// //data types 

// //string 
// let firstName = 'ritesh';
// console.log(typeof firstName)
// //number 
// let age = 20 ;


// //boolean
// let isJsFun = true ;
// console.log(typeof isJsFun)

// //undefined ;
// //NOTE when you have declare a variable but not assigned a value in it
// let birthyear ;


// //NOTE null 
// //FIXME - when you stored a null value in a varaiable then check its datatype you will get "OBJECT" as its type
// let lastName =  null ;

// console.log(typeof lastName)

// //NOTE KEYWORDS USED TO DECLARE  VARIBALES IN THE JS
// //TODO - var , let , const 

// //NOTE - VAR 
// //NOTE in the case of var we can redeclare and reassign the varaible name and its value ;
// //FIXME CASE 1 reassign
// var department = 'CS' ;
// department = 'mechanical' ;
// console.log(department)

// //FIXME Case 2 declaration 
// var department = 'civil' ;
// console.log(department)

// //NOTE - LET 
// //NOTE  in the case of let we can reassign its value but cannot declare it 
// let college = 'TECHNO' ;
// college = 'MNIT' ;
// console.log(college) ;

// //REDECLARATion of the variable name
// //❌ let college = 'GIT'

// //NOTE - CONST 
// //NOTE in the case of the const we cannot reassign the value and not decalre the variable name ;

// const emoji = '❌' ;
// // emoji = '🍿' ;
// console.log(emoji) //we get the error here;



// //NOTE == and === 
// //NOTE - loose equality and strict equality ;
// //NOTE strict equality(===) always check the data types of the variable you are comparing always use strict equality operator when you comparing two variables ;
// let a = 5 ;
// let b = '5' ;
// console.log(a==b) //true
// console.log(a===b); //false

// //NOTE EXPRESSION AND STATEMENT
// //expression evaluates in a single value at last
// let agee = 2024-2000
// console.log(agee) ;

// //NOTE 
// //template String 

// const firstNamee = 'abc' ;
// const lastNamee = 'xyz' ;
// const collegee = 'Techno' ;

// const fulldetails = 'my' + ' ' + 'name' + ' ' + 'is' + ' ' + firstNamee

// console.log(fulldetails)
  
// //NOTE writing using template String ;
// const myDetails = `my name is ${firstNamee}` ;
// console.log(myDetails) 


// //NOTE 
// //NOTE TRUTHY AND FALSY VALUES 

// //NOTE TRUTHY = those values which are not empty string ' ' and 0 
// //NOTE falsy values = 0 , null , undefined , NaN , '' , false
// //when we use falsy values in the if condition it automatically return false 
// if(''){
//     console.log('truthy value')
// }else{
//     console.log('falsy value')
// }


// //NOTE types of function ; 

// //NOTE function declaration ;

// //NOTE function declarations are hoisted ;
// //NOTE we can call the function declarations before decalaring it. 

//   const c = fullDetailss('abc','xyz')
//   console.log(c)
//   console.log(window)

// function fullDetailss(firstName, lastName){
//     return `my name is ${firstName} ${lastName}`
// }

// // console.log(sum(1,2))
// //NOTE function expression ;
// //NOTE if function expression is declare with using let and const we get reference error and i case of var we get typeerror
// let sum = function(a,b){
//     return a+b
// }

// //NOTE arrow function ;


// //multiline 

// //NOTE single line 
// let sum2 = (a,b) => a+b ;

// console.log(sum2(8,8))
// //Multiline
// let sum3 = (a,b) => {
//     return a+b ;
// }


//NOTE TYPE COERSION(IMPLICIT) AND TYPE CONVERSION(EXPLICIT)

//NOTE in type coersion  one data type to another implicitly by javascript ;

const a = 3 + '3' ;
console.log(a);
console.log(typeof a)

const b = +'5' ;
console.log(b);
console.log(typeof b) ;

const c = true + 1 ;
console.log(c);
console.log(typeof c) ;

//TYPE CONVERSION ;
const bool = 'true' ;
console.log(typeof Boolean(bool))

const str = '56';
console.log(Number(str)) ; 

console.log(console)

//NOTE TO LOG THE ERROR MSG
console.error("hello")

//NOTE TO LOG THE WARNING MSG
console.warn("hello")

//NOTE USED TO CALCULATE THE EXECUTION TIME FOR THE CODE ;
console.time('ar')
const arr = [1,2,3,4];
console.log(arr) ;
console.timeEnd('ar')


//NOTE use Strict mode ;
firstName = 'ritesh' ;
console.log(firstName)
 

//NOTE NON PRIMITIVE TYPE ;
//NOTE ARRAY AND OBJECT ;
const ar = ['string', true , 23] ;
console.log(typeof ar)
console.log(ar[ar.length - 1]) ; 


//NOTE array methods ;

//1 NOTE PUSH METHOD ;
//NOTE add element to the end of array ;
const pushResult = ar.push('techno') ;
console.log(ar)
console.log(pushResult) ;

//2 NOTE POP method ;
const popResult = ar.pop() ;
console.log(ar);
console.log(popResult)

//3 NOTE unshift method ;
//NOTE add element to the starting of the array ;
const unshiftResult = ar.unshift(4) ;
console.log(ar);
console.log(unshiftResult) ;

//4 NOTE shift method ;
const shiftResult = ar.shift();
console.log(ar);
console.log(shiftResult) ;

//5 NOTE includes ; 
const includesResult = ar.includes('string');
console.log(includesResult) ;


//------------------------------------------

//OBJECTS ;

// OBJECTS have properties which have keys and value pair

const myDetails = {
    firstName : 'ritesh' ,
    age : 2024-1997 ,
    friends : ['aman','utsav'],
    'two hundred' : 200  ,
    address : {
        street : 43 ,
        state : 'rajasthan',
        city : 'jaipur'
    },
     fullDetails(){
     console.log(`my name is ${this.firstName}`)
    }



}

//accessing the values in the object ;

//dot notation 

console.log(myDetails.firstName) ;
console.log(myDetails.friends[0]) ;

//updating a existing property in the object
myDetails.firstName = 'abc' ;
console.log(myDetails)

//addding new property in the object ;
myDetails.address = 'jaipur'
console.log(myDetails)

//NOTE bracket notation ;
let aa= 'age' ;
console.log(myDetails[aa])

// console.log(myDetails['two hundred']) ;

console.log(myDetails.address.city) ;
myDetails.fullDetails() ;

//REVIEW - THIS KEYWORD 
//in the case of the object this point to the object where it is used ;
//REVIEW - The functions we create in an object are called "METHODS" ;

//NOTE "FOR IN" AND "FOR OF" LOOP SPECIFIC IN THE JS :


const companies = ['meta', 'google','netflix' ,'ibm'];

for(let index in companies){
    console.log(index)
} ;

for(let company of companies){
    console.log(company)
}


const product = {
    name : 'tv',
    price : 'Rs500000'
}

//using for in we can loop the object 
for(let key in product){
    console.log(`${key}: ${product[key]}`)
}

//TODO-------------REMAINING ARRAYS METHODS-----------------

//NOTE SPLICE (index,deleteCount,newElement) ;

// const numbersArr = [1,2,3,4,5,6,7];

// const splicedOutput = numbersArr.splice(1,0,8) ;

// console.log(numbersArr) ;
// console.log(splicedOutput) ;

const fruits = ['mango','grapes','watermelon','blueberry','orange'] ;

const splicedOutput = fruits.splice(1,2,'guava') ;
console.log(splicedOutput);
console.log(fruits)
//FIXME SPLICED METHOD ALWAYS MODIFY ORIGINAL ARRAY

//NOTE Slice Method(startIndex , endIndex); 
//REVIEW - Returns a new array based on the startIndex and endIndex //"It will not modify the orignal array"// 






