function example() {
  // var
  var a = 10;
  var a = 20;   // ✅ re-declared
  a = 30;       // ✅ updated
  console.log("var a:", a); // 30

  // let
  let b = 40;
  // let b = 50; // ❌ cannot re-declare in same scope
  b = 50;       // ✅ updated
  console.log("let b:", b); // 50

  // const
  const c = 60;
  // c = 70;     // ❌ cannot update
  // const c = 80; // ❌ cannot re-declare
  console.log("const c:", c); // 60

  // But const with objects/arrays
  const arr = [1, 2];
  arr.push(3);  // ✅ allowed
  console.log("const arr:", arr); // [1, 2, 3]
}

example();
