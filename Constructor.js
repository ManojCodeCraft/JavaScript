// class constructorLecture{
//     constructor(){  //1
//      console.log("This is default constructor   ") ;
//     }
//     constructor(name){   //2
//         console.log("This is Parameterized Constructor ");
//         console.log("My name is : ",name);
//     }
// }




class ParentClass {
    getSum(a,b){
     console.log("Sum of Given Number is ",a+b);
    }
    printName(name){
          console.log("My  Name is ",name);
    }
}


class ChildClass extends ParentClass {
    constructor(){
        super();
    }
     getData(){
         console.log("This is Child Class");
        this.getSum(10,20);
     }
}




class ParentClassB extends ParentClass {
    getSum(a,b){
     console.log("Sum of Given Number is ",a+b);
    }
    printName(name){
          console.log("My  Name is ",name);
    }
}
   //hY BRID


module.exports={ChildClass};


//Constructor    Type


// Default Constructor
// Parameterized constructor
// ES6-- import moduleName from 'module'   -- Frontend Development
// ES5 - const moduleName =require("");  -- Backend  Development


// ES6 export { module, moduleName } ;   --Frontend Development
// module.exports = { module, moduleName    }; --  Backend Development
