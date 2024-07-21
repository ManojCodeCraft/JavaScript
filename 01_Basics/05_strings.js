const name="Manoj"
const repoCount=50
console.log(name+repoCount+"Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String("FreeFire")
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="    Manoj  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://Manojkumar.com/manoj%20kumar"

console.log(url.replace('%20',"-"))
console.log(url.includes('kuruva'))
console.log(gameName.split('-'))