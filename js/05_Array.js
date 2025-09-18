let fruit = ["apple", "banana", "cherry"];
console.log("Initial:", fruit);

// push → add to the end
fruit.push("mango");
console.log("After push:", fruit); 
// ["apple", "banana", "cherry", "mango"]

// pop → remove from the end
let last = fruit.pop();
console.log("Removed with pop:", last);
console.log("After pop:", fruit); 
// ["apple", "banana", "cherry"]

// unshift → add to the beginning
fruit.unshift("grape");
console.log("After unshift:", fruit); 
// ["grape", "apple", "banana", "cherry"]

// shift → remove from the beginning
let first = fruit.shift();
console.log("Removed with shift:", first);
console.log("After shift:", fruit); 
// ["apple", "banana", "cherry"]

let fruits = ["apple", "banana", "cherry", "mango"];
console.log("Initial:", fruits);

// 1. Remove elements
let removed = fruits.splice(1, 2); // remove 2 elements starting from index 1
console.log("After remove:", fruits); // ["apple", "mango"]
console.log("Removed:", removed); // ["banana", "cherry"]

// Reset array
fruits = ["apple", "banana", "cherry", "mango"];

// 2. Add elements
fruits.splice(2, 0, "grape", "orange"); // at index 2, remove 0, add 2 items
console.log("After add:", fruits); 
// ["apple", "banana", "grape", "orange", "cherry", "mango"]

// 3. Replace elements
fruits.splice(1, 2, "kiwi", "pear"); // from index 1, remove 2, add kiwi & pear
console.log("After replace:", fruits); 
// ["apple", "kiwi", "pear", "orange", "cherry", "mango"]