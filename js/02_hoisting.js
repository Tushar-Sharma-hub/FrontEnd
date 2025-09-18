// variable and function declarations are moved to the top of their scope (global, function, or block) before execution.
// let and const are hoisted but not initialized.

// Accessing them before declaration causes a ReferenceError because they are in the Temporal Dead Zone (TDZ).
console.log(a); // undefined (not error)
var a = 10;
console.log(a); // 10
