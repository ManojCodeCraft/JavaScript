/*
Destructure
Spread Operator
Chaining Operator


Exception Handling


*/


console.log("Destructuring ");


// const person ={
//     name:"Mayur Adlak",
//     clg:"OIST Indore",
//     age:"424",
//     designation:"DevOps Engineer",
//     phone:"753768792",
//     email:"test@gmail.com",
//     address:{
//         city:"Indore",
//         state:"Madhya Pradesh",
//         pincode:"452001"
//     }
// }


// //Destructuring information


// const {name,email,age,address}=person;
// const {city,state,pincode}=address;




const data = [
    {
        name: "Mayur Adlak",
        clg: "OIST Indore",
        age: "424",
        designation: "DevOps Engineer",
        phone: "753768792",
        email: "test@gmail.com",
        address: {
            // city: "Indore",
            state: "Madhya Pradesh",
            pincode: "452001"
        }
    },
    {
        name: "Olisia Adlak",
        clg: "OIST Indore",
        age: "424",
        designation: "DevOps Engineer",
        phone: "753768792",
        email: "test@gmail.com",
        address: {
            city: "Indore",
            state: "Madhya Pradesh",
            pincode: "452001"
        }
    },
    {
        name: "John Adlak",
        clg: "OIST Indore",
        age: "424",
        designation: "DevOps Engineer",
        phone: "753768792",
        email: "test@gmail.com",
        address: {
            // city: "Indore",
            state: "Madhya Pradesh",
            pincode: "452001"
        }
    },
]




const dataCopy = data.map((event) => {
 
    return { ...event, department: "CSE" };
})








// console.log("Updated Data ", dataCopy);






const city ={
    pincode:"4353454",
    state:"M.P",
    coutry:"INDIA",
    address: {
        city: "Indore",
        state: "Madhya Pradesh",
        pincode: "452001"
    }
}




const updatedCity={...city,pincode:"9834753",gdp:"100B",state:"U.P",address:{...city.address,city:"Pune"}};
const newKey="year";
const newValue="2024";


updatedCity[newKey]=newValue;


// console.log("Updated Data ", updatedCity);


// for(let i of  data ){
//     const {name,email,age,phone,address}=i;
//     const {city}=address;
//     console.log("Data of Ith Person: " , city)
// }


// console.log("My name is ",name,email,age)




// ---------------------------------------Chaining------------------------------






for(let i of  data ){
    const {name,email,age,phone,address}=i;
    //  const {city}=address;
    //  console.log("Data of Ith Person: " , city)
    console.log("City Address : " , address?.city?address?.city:"No City")
}
/*
1. Create Program using Destructuring  5
2. Create Program using Spread Operator  5
3. Create Program using Chaining Operator 5


*/




