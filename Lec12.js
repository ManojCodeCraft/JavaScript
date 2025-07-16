
// 1. Callback
// 2. Exception Handling

// When one Function is called inside onother function by parameter called callback function

function getSum(a, b) {
    return a + b;
}

function myCallback(a, b) {
    console.log("A");  // 1
    setTimeout(() => {
        console.log("B");
    }, 2000)   // 4
    console.log("C");  //2


    return 10;
}

// Asyncrhonous  or Synchronous
const sum = myCallback(10, 20)
console.log("D", sum)  // 3
// 1. Create 10 Program using Asyncrhonous  Prorgamming
// 2. Research About the Event Loop
// 3. Understand the Role of Callback Function in Asyncrhonous Programming
// 4. Create 5 Program using callback
// 5. Understand Execution  flow of  JavaScript
// 1. async & await
// 2. Promises
// 3. Exception handling




onsole.log("Async and Await in JavaScript")




//  async function Asyncrhonous(){
//     console.log("This is Process A");  //linear
//     await setTimeout(()=>{
//      console.log("This is Process B");
//     },3000);
//     console.log("This is Process C");  //Sync
// }








//acdb
//dacb
//A


// Asyncrhonous().then(()=>{
//    console.log("This is Then Block ")
// }).catch(()=>{
//   console.log("This is Catch Block ")
// })




async function myFunc(){
    return "My Child Callback";
}


 async function printName() {
    let v = 10;
    return sum+ v;
}
printName().then((value) => {
    console.log("My Process is Success  ", value)
}).catch((error) => {
    console.log("My Process is getting Failed : ", error.message)
}).finally(()=>{
    console.log("I am Funally Block of Promise  --> I am Always Executable Block ")
})






// console.log("I am Process D ")





// Create 10 Program using async await 
// Create 10 program using then catch and finally 


