class Person {
    constructor() {
        console.log("I am Person Class Constructor");
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAge(age) {
        this.age = age;
    }
    getAge(age) {
        return this.age;
    }
}


class Car {
    constructor() {
        console.log("I am Car Class Constructor");


    }


    setName(name) {
        const carLength = name.length;
        console.log("Car name is ", name)
        console.log("Car name Length is  ", carLength)
        this.name = name;
    }


    getName() {
        return this.name;
    }


    setPrice (price) {
        this.price = price;
        console.log("Car Price is ", price)
    }
    getPrice() {
        return this.price;
    }
}




class stringOperation{
    constructor() {
        console.log("I am StringOperation Class Constructor");
    }


    reverseString(str) {
        let ans="";
        for (let index = str.length-1; index >=0; index--) {
             ans+= str[index];  
        }
        return ans;
    }
    getLength(str){
        return str.length;
    }
}




function print(str){
   console.log("Provided String ", str)
}


const date = new Date().toISOString();


module.exports = { Person ,Car,stringOperation,print,date};  //ES5


// export  {Person};  //ES6







