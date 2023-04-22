function nameOdThefunction() {
  console.log("this is my name bro");
}
nameOdThefunction();

function addNumbers() {
  let a = 5;
  let b = 4;
  let sum = a + b;
  console.log(sum);
}
addNumbers();

function withParameters(a, b) {
  let sum = a + b;
  return sum;
}
console.log(withParameters(10, 20));
console.log(withParameters(100, 20));
console.log(withParameters(1000, 20));

const fullname = (firstname, lastname) => {
  let fullname = firstname + " " + lastname;
  return fullname;
};
console.log(fullname("asabeh", "yetaheh"));

function squareNumber(n) {
  console.log(n * 2);
}
squareNumber(10);

const countries = [
  "Finland",
  "Estonia",
  "Ethiopia",
  "Eritrea",
  "Sweeden",
  "Norway",
];
console.log(countries);

let newArr = [];
for (let i = countries.length - 1; i >= 0; i--) {
  console.log(countries[i]);
  newArr.push(countries[i]);
}
console.log(newArr)