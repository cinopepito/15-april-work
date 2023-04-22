const students = ['pierre','paul','jacues','kokouvi'];
for(let i=students.length-1;i>-1;i--){
   console.log(`welcome to ${students[i]}to modern javascript i hope you will enjoy this course`) ;
}
const arr = [];
for(let i=0;i<101;i++){
   arr.push(i);
}
console.log(arr);
const nums = [0,1,2,3,4,5,6];
const newArr = [];
for(let i=nums.length-1;i>-1;i--){
   console.log(nums[i]);
   newArr.push(i)
}
console.log(newArr);

const square = [];
let i=0;
while(i<10){
   console.log('do someting')
   square.push(i);
   i++;
}
console.log(square);
const numbers = [1,2,3,4,5,6,7,8,9,10];
for(const number of numbers){
   if(number===3){
      continue;
   }
   console.log(number,number**2);
}

const countries = ['finland','estonia','swedden','norway'];
for(const country of countries){
   if(country.includes('way')){
      continue;
   }
   console.log(country)
}
