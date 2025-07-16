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
