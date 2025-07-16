//The combination of function we called Closure
console.log("The combination of function we called Closure");
function myfunc(a,b){
    // console.log("ManojKumar");
    function mcal(){
        return (Number(a)+Number(b));
    }
    function mcal1(){
        return (Number(a)-Number(b));
    }
    function mcal2(){
        return (Number(a)*Number(b));
    }
    const answer={
        sum:mcal(),
        sub:mcal1(),
        mul:mcal2()
    };
    //return mcal();
    return answer;
}
const res=myfunc("10","20");
// console.log(sum);
console.log("Subtraction: ",res.sub);
// The Combination of Function We Called Closure  


// console.log(" Combination of Function We Called Closure");


// function myFunction(a,b){


//     // console.log("I am Creating a new Closure ");
//     function getSum(){
//         return Number(a)+Number(b);
//     }
//     function getSubtraction(){
//         return Number(a)-Number(b);
//     }
//     function getMultiplication(){
//         return Number(a)*Number(b);
//     }
//    const answer ={
//     sum:getSum(),
//     subtraction:getSubtraction(),
//     multiplication:getMultiplication()
//    };
//    return answer;
// }


// // myFunction();


// const answer = myFunction("60","30");
// console.log("Sum of Given Value is ",answer.sum)
// console.log("Subtraction of Given Value is ",answer.subtraction)
// console.log("Multiplication  of Given Value is ",answer.multiplication)


// console.log("Answer Object ",answer)


