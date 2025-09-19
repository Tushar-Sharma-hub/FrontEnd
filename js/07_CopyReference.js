let arr=[1,2,3,4,5];
let copyarr=[...arr]; // Spread Operator-> ... Used to copy from reference types.(non-primitve).
copyarr.pop();
console.log(arr); //1,2,3,4,5 .Notice how 5 didn't pop out from arr as well.
console.log(copyarr);

let obj={name:"Tushar",age:18};
let copyobj={...obj};
copyobj.age=19; //Only changes copyobj.
console.log(obj);
console.log(copyobj);