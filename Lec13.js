

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


console.log("Promise In JavaScript")


// Stage of Promise
 
/**
 *  Pending Stage   --> There
 *  FullFill  --> Success
 *  Rejected -->   Rejected
 */


let myPromise= new Promise ((resolve,reject)=>{
    let a=10;
    let b=20;
    const sum=a+b;
     if(sum>20){
        resolve("Promise Resolved Successfully");
     }
     else{
        reject("Failed to Resolve Promise");
     }
})




myPromise.then((value)=>{
    console.log("Promise Successfully Resolved",value)
}).catch((error)=>{
    console.log(" There is Somthing Wrong with Promise : ",error)


}).finally(()=>{
    console.log("I am Always Executable")
})


// console.log("My Promise State is This --> ",myPromise)
