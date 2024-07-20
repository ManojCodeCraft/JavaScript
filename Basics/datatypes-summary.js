//Primitive datatype   
//7 types : String,Numer,Boolean,null,undefined,Symbol,BigInt


// const score=100
// const scoreValue=100.2
// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);

// const pluginAConfig = Symbol('pluginAConfig');
// const pluginBConfig = Symbol('pluginBConfig');

// const config = {
//   [pluginAConfig]: { /* plugin A settings */ },
//   [pluginBConfig]: { /* plugin B settings */ }
// };

// // Plugins can safely add their own configuration without clashing
// config[pluginAConfig] = { theme: 'dark' };
// config[pluginBConfig] = { theme: 'light' };

// // Accessing plugin configurations
// console.log(config[pluginAConfig]); // { theme: 'dark' }
// console.log(config[pluginBConfig]); // { theme: 'light' }

// const BigNumber=243478458923525839n
// console.log(BigNumber);
//Reference Type/(Non primitive)
//Array, objects,Functions

// const subjects=["Maths","Physics","Chemistry"];
// let myObj={
//     name:"Manoj",
//     age:19,
// }

// const myFunction=function(){
//     console.log("Hello World");
// }

//+++++++++++++++++++++++++++++++++++++
//Stack(Primitive),Heap(Non-Primitive)

// Primitive Data Type Example
let a = 10;
let b = a; // b is now a copy of a's value

console.log('Primitive before change:');
console.log('a:', a); // 10
console.log('b:', b); // 10

a = 20; // Changing a does not affect b

console.log('Primitive after change:');
console.log('a:', a); // 20
console.log('b:', b); // 10

// Non-Primitive Data Type Example
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 holds a reference to obj1

console.log('Non-Primitive before change:');
console.log('obj1:', obj1); // { value: 10 }
console.log('obj2:', obj2); // { value: 10 }

obj1.value = 20; // Changing obj1 affects obj2 because they reference the same object in heap

console.log('Non-Primitive after change:');
console.log('obj1:', obj1); // { value: 20 }
console.log('obj2:', obj2); // { value: 20 }
