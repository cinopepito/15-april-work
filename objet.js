let phrases = [
  "That sounds good",
  "Yes, you should definitely do that",
  "I'm not sure that's a great idea",
  "Maybe not today?",
  "Computer says no.",
];

let sheepCount = 0;
while (sheepCount < 10) {
  console.log(`we count ${sheepCount}`);
  sheepCount++;
}

let nam = "Nick";
let arr = [];
let index = nam[Math.floor(Math.random() * nam.length)];
while (nam.length < 1) {
  arr += index;
}

let randomString = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let ind = Math.floor(Math.random() * alphabet.length);
let charAtIndex = alphabet[ind];
while(alphabet.length<6){
    randomString+=charAtIndex;
    randomString++;
}
