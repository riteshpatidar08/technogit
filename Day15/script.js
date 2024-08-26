
//NOTE : Protoypes in javascript ;
// const obj = {
//   name : "ritesh"
// }

// console.log(obj.__proto__) ;

// const animal = {
//   eats : true,
//   walk(){
//     console.log('is walking')
//   }
// }
// const rabbit = {
//   run : true,
//   __proto__ : animal
// }

//NOTE Object.create creates an empty object and sets the prototype of the newly created object to the value we have passed in the create method ;


// const lion = Object.create(animal) ;
// console.log(lion)
// console.log(lion.eats)
// we can also use this
// rabbit.__proto__ = animal ;

// console.log(animal)
// console.log(rabbit)
// console.log(animal.eats)
// console.log(rabbit.eats)


//ways to create an object ;

//constructor functions ;

// function Animal(name){
//   this.name = name ;
//   this.walk = function(){
//     console.log(`${this.name} is walking`)
//   }
// }

//NOTE we can directly set methods on the prototype of the animal which are then available to the all the instance we are going to create with the animal.

// Animal.prototype.walk = function(){
//     console.log(`${this.name} is walking`)
// }

//ways to call constructor function
//always call with new keyword ;

// const rabbit = new Animal('rabbit')
// console.log(rabbit)

// const lion = new Animal('lion');
// console.log(lion.walk())


// console.log(rabbit.__proto__)


// const arr = [1,2,3,4];
// console.log(arr) ;

//another way to create an array in the js
// const arr2 = new Array();
// console.log(arr2)

//NOTE directly saving methods on the prototype;
// Array.prototype.laugh = function(){
//     console.log('haha')
// }

// console.log(arr2.laugh()) ;


//NOTE - ES6 classes Js ;

// function Animal(name){
//   this.name = name ;
//   this.walk = function(){
//     console.log(`${this.name} is walking`)
//   }
// }

//NOTE Converting Above Constructor Function using es6 classes .

//NOTE classes constructor function internally to create a object from that instance 
//NOTE in the constuctor function we have to manually set the methods on the prototype but with the es6 classes the methods are directly saved to the prototype of that class from it created ;


// function Animal(name){
//   this.name = name ;
//   this.walk = function(){
//     console.log(`${this.name} is walking`)
//   }
// }
class Animal{
    constructor(name){
this.name = name; 
    }

 walk(){
        console.log('animal is walking')
    } 
}

const rabbit = new Animal('rabbit');

rabbit.walk()

//Inheritance in the classes ;
//static methods
class Lion extends Animal {
 constructor(name){
    super(name)
 }
static roar(){
    console.log('lion is roaring')
 }

}

const lion = new Lion('lion');
console.log(lion)
Lion.roar() ;

//Static method is class can be created using static keyword in front of the methods 
//NOTE static method only called upon directly on the class , it is not work on the instances we have created using that class.

//readonly and private properties and methods
class Coffeemachine{
    #wateramount = 100
    #getwater(){
        console.log(`coffee machine have ${this.#wateramount}`)
    }

}
const coffemachine = new Coffeemachine;
coffemachine.#wateramount
coffemachine.#getwater()  
console.log(coffemachine);












