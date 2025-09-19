// functions are first-class citizens (first-class functions).
// That means functions can be:
// 1.Assigned to a variable
// 2.Passed as arguments to other functions
// 3.Returned from other functions
// 1. Assigning a function to a variable
const greet = function(name) {
    return "Hello, " + name;
};
console.log(greet("Tushar")); // Hello, Tushar

// 2. Passing a function as an argument (callback)
function runCallback(callback) {
    console.log("Running callback...");
    callback();
}
runCallback(function() {
    console.log("This is a callback function");
});

// 3. Returning a function from another function
function multiplier(x) {
    return function(y) {
        return x * y;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10
