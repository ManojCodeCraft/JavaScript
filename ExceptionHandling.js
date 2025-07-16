console.log("Let's Start Exception Handling in JavaScript");




const getSum =(a)=>{
    try{


        // console.log("Sum of Given Number is ",a+b);
        // console.log(" I want to access B  ",b+a)
       
       
        throw new  ReferenceError("I am Reference Error")
     
    }
    catch(error){
        console.log("Error: ",error.message);
        return error.message;
    }
    finally{
        console.log("I am Finally Block")
    }


}






const sum =getSum(10);
console.log("Sum  ",sum);