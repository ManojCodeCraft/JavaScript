// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
//The reason is that an equality check== and comparision > <>= <= work differently.
//comparision convert null to number , treating it as 0
//Tht's y (3) null>=0 is true and (1) null>0 is false

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

// strict  check (===)
console.log("2"==2);//it checks only the value
console.log("2"===2);//it checks both value and datatype
