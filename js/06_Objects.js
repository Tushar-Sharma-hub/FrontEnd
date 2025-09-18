// Create an object
let person = {
  name: "Tushar",
  age: 19,
  isStudent: true,
  hobbies: ["cricket", "coding"],
  
  // Nested object
  address: {
    city: "Nagpur",
    pin: 440001
  },
  
  // Method
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log("Initial object:", person);

// Access properties
console.log("Name:", person.name);         // dot notation
console.log("Age:", person["age"]);        // bracket notation
console.log("City:", person.address.city); // nested access
console.log("Greeting:", person.greet());  // call method

// Modify object
person.age = 20;           // update property
person.city = "Mumbai";    // add new property
delete person.isStudent;   // remove property

console.log("Modified object:", person);

// Loop through keys
for (let key in person) {
  console.log(key, ":", person[key]);
}
