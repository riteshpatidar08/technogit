
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



