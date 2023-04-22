const emptyArr = [];
console.log(emptyArr.length);

const numbers = [1, 2, 3];
console.log(numbers.length);
let lastindex = numbers.length - 1;
console.log(numbers[lastindex]);

const fruits = ['avocado','pineapple','lemon','honey','mango'];
console.log(fruits.length);
fruits[0] = 'raisin';
fruits.unshift('date');
fruits.pop();
fruits.push('cacao')
console.log(fruits);
