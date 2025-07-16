/**
 * Object Litrals
 * Module
 * this
 * Fetch function
 */




// console.log("Object Litrals ");
// const name ="John Doe";
// const college="OIST Indore"
// console.log("My name is ",name,"And My College is ",clg);


// console.log(`My name is ${name} and my college is ${college}`)s




const person = {
    first_name: "Mayur",
    last_name: "Adlak",
    name: "Mayur",
    age: 65,
    clg:"OIST Indore",
    mobile:"6645657",
    email:"test@example.com",
    full_name:function(){
        const fullName=`${person.first_name} ${person.last_name}`;
        return fullName;
    }
};


console.log("Full Name ",person.full_name())




// import  {MyFunction}  from "./modules";
const {MyFunction,name}=require("./modules")


MyFunction();
console.log("My name is ",name)


// console.log("This is Module ");


function MyFunction() {
    console.log("This is My function");
}
const name ="Mayur Adlak";
module.exports=  {MyFunction,name};
