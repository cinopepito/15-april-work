

//function

// const namePerson = (firstname,lastname)=>{
// let fullname = firstname + ' ' + lastname;
// return fullname;
// }
// console.log(namePerson('messan','ayayi'));

// const makesquare = (n)=>n*n;
// console.log(makesquare(3));
const sumOfEven = (n)=>{
    let sum = 0;
    for(let i = 0;i <= n; i+=2){
        console.log(i);
        sum += i;
    }
    return sum;
}
console.log(sumOfEven(100));

const calculWeight = (mass,gravity=9.81)=>{
    return mass * gravity
}
console.log(calculWeight(10));

for(let i=0;i<10;i++){
    console.log(`${i}^${i}=${i^i}`)
}

let rain = false;
rain ? console.log('take your umbrella'):console.log('shine on the sun');

function reversedArray(arr){
const newArr = [];
for(let i=arr.length - 1;i>=0;i--){
    let value = arr[i];
    newArr.push(value);
}
return newArr;
}
console.log(reversedArray([1,2,3,4,5,6]))

