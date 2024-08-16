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
//REVIEW always returns element endIndex - startIndex
const numbersArray = [1,2,3,4,5,6,7 ,23] ;
const slicedOutput = numbersArray.slice(1,3) ;

console.log('originalArray', numbersArray) ;
console.log('sliceArray',slicedOutput)


//NOTE FOREACH (HIGHER ORDER METHODS OF ARRAY)
//NOTE forEach accepts a callback function
//NOTE "callback functions" are those functions which are pass in the params of other functions and then called by that function .
//NOTE the functions which accepts callback are called "higher order functions"
//NOTE in the case of the array we call them "higher order methods" which accepts a callback function.

//REVIEW for creating a callback
// IN ARROW FUNCTION = ()=>{}
//normal function = function(){

//}
const forEachoutput = numbersArray.forEach((el)=>{
console.log(el)
})

console.log(forEachoutput)
//FIXME - forEach method always returns UNDEFINED

//NOTE MAP METHOD (HIGHER ORDER METHODS OF ARRAY)


const mappedOutput = numbersArray.map((el)=>{
    return el*2 ;
})

console.log(mappedOutput)
console.log(numbersArray)

//REVIEW - always returns a new array based on the transformation we performed using the callback;
//REVIEW -  not modify orginal array ;

//NOTE FILTER (HIGHER ORDER METHODS OF ARRAY)

const filterOutput = numbersArray.filter((el)=>{
 return el > 3 ;
})

console.log(filterOutput);
console.log(numbersArray) ;

//NOTE FIND METHOD 
//not returns an array , return a single value that match the condition first ;

const findOutput = numbersArray.find((el)=>{
    return el>3 ;
})

console.log(findOutput);
console.log(numbersArray) ;

//NOTE FINDINDEX ;
const findIndexOutput = numbersArray.findIndex((el)=>{
 return el>3 
})
console.log(findIndexOutput);
console.log(numbersArray) ;

//REVIEW ALWAYS RETURNS THE INDEX POSITION OF THE ELEMENT WHICH SATIFIES THE CALLBACK CONDITION ;

//NOTE REDUCE (HIGHER ORDER METHOD ;
//REVIEW REDUCE THE ARRAY INTO A SINGLE OUTPUT ;

const reducedOuput = numbersArray.reduce((accumulator, el)=>{
   console.log(accumulator,el);
   return accumulator + el ;
},0)

console.log(reducedOuput) ;

//REVERSE METHOD : 

const reverseOutput = numbersArray.reverse();

console.log(reverseOutput);
console.log(numbersArray)

//toReversed ;

const toReversedOutput = numbersArray.toReversed();
console.log(toReversedOutput);
console.log(numbersArray)

//SORT ;
//NOTE FOR ASCENDING order you can use a-b in the callback
//NOTE FOR DESCENDING ORDER you can use b-a
const sortedOutput = numbersArray.sort((a,b)=>a-b);
console.log(sortedOutput);
console.log(numbersArray);

//SOME RETURN TRUE OR FALSe ;

const someOutput = numbersArray.some((el)=>{
 return  el > 3 ;
})

console.log(someOutput) ;

//EVERY

const EveryOutput = numbersArray.every((el)=>{
 return  el > 3 ;
})

console.log(EveryOutput) ;

//TODO---------------OBJECT METHODS :

//NOTE OBJECT.keys() used to extract the keys of the object ;

const car = {
    name : 'X1' ,
    brand : 'BMW',
    color : 'matte blue'
}
//NOTE - to delete the property on the object
delete car.color ;
console.log(car) 
;
const keyResult = Object.keys(car);
console.log(keyResult)
keyResult.forEach((key)=>{
    console.log(key)
})
//OBJECT values
const valuesResult = Object.values(car);
console.log(valuesResult) ;
valuesResult.forEach((values)=>{
    console.log(values)
})

//OBject.entries 
// [name ,x1]
// ['brand', 'bmw']

const entriesOutput = Object.entries(car) ;
console.log(entriesOutput) ;

entriesOutput.forEach((item)=>{
  const [key, value] = item;
  console.log(key , value)
})

//destructuring ; 

// const users = ['alex','john'];
// const user1 = users[0];
// const user2 = users[1];
const [user1, user2] = ['alex','john']
console.log(user1, user2) ;