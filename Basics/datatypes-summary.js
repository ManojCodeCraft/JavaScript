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

const subjects=["Maths","Physics","Chemistry"];
let myObj={
    name:"Manoj",
    age:19,
}

const myFunction=function(){
    console.log("Hello World");
}