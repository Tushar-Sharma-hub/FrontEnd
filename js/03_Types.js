// ----------- Primitive Types -----------
// Stored by value.
// String
let str = "Hello, Tushar";  
console.log(typeof str, str); // string Hello, Tushar

// Number
let num = 42;  
console.log(typeof num, num); // number 42

// BigInt
let bigNum = 123456789012345678901234567890n;  
console.log(typeof bigNum, bigNum); // bigint 123456789012345678901234567890

// Boolean
let isStudent = true;  
console.log(typeof isStudent, isStudent); // boolean true

// Undefined
let notAssigned;  
console.log(typeof notAssigned, notAssigned); // undefined undefined

// Null (special case: typeof shows 'object' due to old JS bug)
let emptyValue = null;  
console.log(typeof emptyValue, emptyValue); // object null

// Symbol
let uniqueId = Symbol("id");  
console.log(typeof uniqueId, uniqueId); // symbol Symbol(id)


// ----------- Non-Primitive (Reference) Types -----------
// Stored by references.
// Object
let person = { name: "Tushar", age: 19 };  
console.log(typeof person, person); // object { name: "Tushar", age: 19 }

// Array (special kind of object)
let numbers = [1, 2, 3, 4];  
console.log(typeof numbers, numbers); // object [1, 2, 3, 4]

// Function (also an object, but typeof shows 'function')
function greet() { 
  return "Hi, welcome to JavaScript!";
}
console.log(typeof greet, greet()); // function Hi, welcome to JavaScript!
