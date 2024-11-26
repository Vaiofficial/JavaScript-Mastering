let score = 33;

console.log(score);
console.log(typeof score);

score = "33";
// score = "33aa"; //it will also get converted into the number type but when we print, it will give NaN as output.

//convert undefined to number => NaN
//convert null to number => 0
//convert true to number => 1
//convert false to number => 0

//if convert to boolean
// 1. "" to boolean => false
// 2. "vaibhav" to boolean => true
// 3. 1 => true
// 4. 0 => false

//These are some issue with js, thats why people use typescript instead, but js is improving.

console.log(typeof score);

//type conversion
let newNumber = Number(score);
console.log(newNumber);
console.log(typeof newNumber);