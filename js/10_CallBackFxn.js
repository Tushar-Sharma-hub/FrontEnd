// A callback function is simply a function passed as an argument to another function, and it is executed later inside that function.
console.log("Start");
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
console.log("End");
// the function inside setTimeout is a callback function, executed after the timer ends.