let firstName = "Messan";
let lastName = "Ayayi";

console.log(firstName);
console.log(lastName);

let gravity = 9.81;
console.log(gravity);
let a = 2;
let b = 3;
let sum = a + b;
console.log(sum);
let diff = b - a;
console.log(diff);
let mult = a * b;
console.log(mult);
let div = b / a;
console.log(div);
let raminder = b % a;
console.log(raminder);
let exponential = a ** 3;
console.log(exponential);

let char = "a";
let sentence =
  "I love javascript if you do not love javascript, what else can you love";
console.log(char.length);
console.log(sentence.startsWith("I"));
console.log(!!false);
let condition = true;
if (condition == true) {
  console.log("je suis vrai");
}

let weather = prompt("enter your choice");
if (weather === "shinny") {
  alert("you will spend a good time outside");
} else if (weather === "cloudy") {
  alert("please use your umbrella to protect yourself");
} else if (weather === "dark") {
  alert("please pay attention when you are driving");
} else {
  alert("enter the correct weather please");
}
