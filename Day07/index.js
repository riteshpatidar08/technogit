
//operators

//arithmatic operators

//  + , = , * , / , **

//Addition

// let e = 5;
// let g = 7;
// let adddd = e + g;
// console.log(adddd);

// let firstName = "Steve";
// let lastName = "smith";

// console.log(firstName + " " + lastName)

// const c = 5;
// const d = '5';
// console.log(c+d)

//when we use + addition operator in front of any string it will generally converted into number
// const e = +'5';

//NOTE -  (-) subtraction operator

// const aa = '8';
// const bb = '6';
// const cc = 5;
// console.log(aa - bb + cc);

//NOTE - Multiplication Operator (*) ;

// const aa = '6';
// const bb = '7';
// console.log(aa * bb);

// Exponential operator
// const cc = 2;
// const dd = 3;
// console.log((cc ** dd));

//division (/)

// const a = 4;
// const b = 2;
// console.log(a / b);
// (%) modulus

//NOTE - ASSIGNMENT OPERATOR

// Assignment Operator (=)

// let x;
// x = 10; // Assigns the value 10 to variable x
// console.log(x);

// Addition Assignment (+=)
// let y = 5;
// y = y + 5;

// console.log(y);
// y += 5; // Equivalent to: y = y + 5; (y is now 10)

// Subtraction Assignment (-=)
// let z = 10;
// z -= 4; // Equivalent to: z = z - 4; (z is now 6)

//js interaction funciton

// prompt and alert
// const firstName = prompt("enter your first name");
// const lastName = prompt("enter your last name");

// alert(firstName + " " + lastName)


// Multiplication Assignment (*=)
// let a = 3;
// a *= 2; // Equivalent to: a = a * 2; (a is now 6)

// Division Assignment (/=)
// let b = 12;
// b /= 3; // Equivalent to: b = b / 3; (b is now 4)

// // Remainder Assignment (%=)
// let c = 10;
// c %= 3; // Equivalent to: c = c % 3; (c is now 1)

// // Exponentiation Assignment (**=)
// let d = 2;
// d **= 3; // Equivalent to: d = d ** 3; (d is now 8)

// console.log("x:", x);
// console.log("y:", y);
// console.log("z:", z);
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("d:", d);

//NOTE - COMPARISON OPERATOR

// // Equal to (==)
// console.log("Equal to operator (==)");
// let applesInBasket = '10';
// let orangesInBasket = 10;
// console.log(
//   "Are there equal number of apples and oranges?",
//   applesInBasket === orangesInBasket
// );

// Not equal to (!=)
// console.log("\nNot equal to operator (!=)");
// let userRole = "admin";
// let requiredRole = "admin";
// console.log(
//   "Is the user role different from the required role?",
//   userRole != requiredRole
// );

// // Strict equal to (===)
// console.log("\nStrict equal to operator (===)");
// let userInput = 5;
// let expectedInput = "5";
// console.log(
//   "Is the user input strictly equal to the expected input?",
//   userInput === expectedInput
// );


// Greater than (>)
// console.log("\nGreater than operator (>)");
// let userAge = 21;
// let requiredAge = 21;
// console.log(
//   "Is the user old enough to purchase alcohol?",
//   userAge > requiredAge
// );

// // // Less than (<)
// console.log("\nLess than operator (<)");
// let productPrice = 25;
// let budget = 50;
// console.log(
//   "Is the product price less than the available budget?",
//   productPrice < budget
// ); // true

// Greater than or equal to (>=)
// console.log("\nGreater than or equal to operator (>=)");
// let userPoints = 100;
// let requiredPoints = 100;
// console.log(
//   "Does the user have enough points to unlock the feature?",
//   userPoints >= requiredPoints
// ); // true

// // Less than or equal to (<=)
// console.log("\nLess than or equal to operator (<=)");
// let itemQuantity = 5;
// let minimumQuantity = 10;
// console.log(
//   "Is the item quantity less than or equal to the minimum required?",
//   itemQuantity <= minimumQuantity
// ); // true

// //NOTE - LOGICAL OPERATOR

// Logical AND (&&)
// console.log("Logical AND operator (&&)");
// let isLoggedIn = true;
// let isAdmin = true;
// console.log("Is the user logged in and an admin?", isLoggedIn && isAdmin);

// Logical OR (||)
// console.log("\nLogical OR operator (||)");
// let isMember = true;
// let isPremium = false;
// console.log("Is the user a member or a premium user?", isMember || isPremium);

// Logical NOT (!)
// console.log("\nLogical NOT operator (!)");
// let hasPermission =false;
// console.log("Does the user not have permission?", !hasPermission);

// Combining logical operators

// console.log("\nCombining logical operators");
// let isStudent = true;
// let isEmployee = false;
// let hasAccess = isStudent && !isEmployee;
// console.log("Does the user have access?", hasAccess);

// // Using logical operators with comparison operators
// console.log("\nUsing logical operators with comparison operators");
// let age = 25;
// let isAdult = age >= 18 && age <= 60;
// console.log("Is the person an adult?", isAdult);

// Short-circuit evaluation
// console.log("\nShort-circuit evaluation");
// let result = true || (console.log("This won't be executed"), false);
// console.log("Result:", result);

// //NOTE - Operator precedence
// Arithmetic Operators
// let result1 = 10 + 5 * 2; // Multiplication has higher precedence than addition
// console.log("Arithmetic Operators:", result1);

// // // Logical Operators
// let result2 = true || false && true; // Logical AND has higher precedence than logical OR
// console.log("Logical Operators:", result2);

// // Comparison Operators
// let result3 = 10 > 5 === true; // Greater than has higher precedence than strict equality
// console.log("Comparison Operators:", result3);

// // Assignment Operators
// let num = 10;
// num += 5 * 2; // Multiplication has higher precedence than assignment  // num = num + 10
// console.log("Assignment Operators:", num);

// Grouping with Parentheses
// let result4 = (10 + 5) * 2; // Parentheses have the highest precedence, forcing addition before multiplication
// console.log("Grouping with Parentheses:", result4);

// let a = prompt("enter your first name")
// let b = prompt("enter your last name")

// alert(a + " " + b);

// strings and template literals

// let firstName = "Ritesh";
// let lastName = "Patidar";
// let fullName = "I'm" +  " " + firstName + lastName ;
// let fullName = `Im ${firstName} ${lastName}`

// console.log("fullName:", fullName);

// let college = "GITS" ;
// let departMent = "CSE" ;
// let details = `I m a student of ${college}`
// let fullName = `hello  I'm ${firstName} ${lastName}`
// console.log("details:", details);
// console.log(fullName);

// //with using the template literals ;

//ex2 multiline
// let message =
//   `This is a long message
//   that spans multiple lines
//   using traditional concatenation`
// console.log(message);





// Prompt the user to enter their role (admin or user) and age.


// Use logical OR (||) to check if the role is "admin" or the age is 18 or above.

// If either condition is true, display "Access granted". Otherwise, display "Access denied".

