 let digit="7";
    let num=7;
        if(num===digit){
            console.log("Both are same");
        }else{
   console.log("Both are not same");
}
typeof digit==typeof num;
//== compares value
//=== compares the datatype
console.log("digit: ",typeof(digit));
console.log("num: ",typeof(num));
console.log("Double Equality condition: ",digit==num);
console.log("Triple Equality condition: ",digit===num);
console.log("== vs === vs typeof");




/*
== vs === vs typeof
JS engine
Function Expression vs  Function Declaration
Callback
High order function


Exception Handling
*/






console.log("== vs === vs typeof");




// const a=10;
// const b="10";
// console.log("Use case of == Operator  ",a==b);




const amount = 10;


const price = "10";


// 10==10--> true  // Compare with value    --> true
// typeof a== typeof b // Compare with Data type  


// console.log("Data Type of a is " ,typeof( a))
// console.log("Data Type of b is " ,typeof (b))
// console.log("Use case of == Operator  ",a===b);


// if(amount===price){
//     console.log("You can Buy the Order")
// }
// else{
//     console.log("you cannot Buy the Order")
// }


// console.log("String Comparison ","anand"=== "anand");






// console.log("Javascript Engine")


// Function Expression vs  Function Declaration
// Function Expression
// const expressionFunction=function (){
//     console.log("This is Expression Function");
// }


// // Function Declaration
// function declarationFunction(){
//     console.log("This is Declaration Function");
// }


// expressionFunction();
// declarationFunction()


// ECMAScript - 5  
// ECMAScript - 6






console.log("Callback Function In  JavaScript");


// function myfunction2() {
//     console.log("I am Callback Function In JavaScript");
// }
// function myfunction(callback) {
//     console.log("This is Perent callback Function In JavaScript");
//     callback();
// }


// myfunction(myfunction2)
function fun(){
    console.log("I am my function")
}
const myCallback=(callback)=>{


    console.log("I am Perent Callback function ")
    callback();
}


myCallback(fun)






setTimeout(()=>{
    console.log("I am setTimeout function")
},4353)

// Javascript V8 Engine 
// V8 JavaScript engine



// ECMAScript -6 
// https://v8.dev/
// JavaScript ES6 Features Every Developer Should Know. - DEV Community
// https://dev.to/codingcrafts/javascript-es6-features-every-developer-should-know-12ak



//JS engine

//Call back functions in JS




