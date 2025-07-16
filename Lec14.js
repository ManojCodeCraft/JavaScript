// console.log("Lecture 16 ")


/**
 *
 Array destructuring
 Default parameters
 forEach method
 find method
 
 */


 const arr1 = [1, 3, 5, 6, 7, 8];
 const arr2 = [6, 8, 5, 7, 8];
 
 
 
 
 //  const ans=arr1.concat(arr2);
 
 
 const ans = [...arr1, ...arr2];
 
 
 
 
 const name = ["a", "b", "c", "d", "e", "f"];
 const lastName = ["g", "h", "u", "y", "m", "k"];
 
 
 const combinedArray = [...name, ...lastName];
 //  console.log("There is Merged Array",ans);
 // console.log("My Combined Name ",combinedArray);
 
 
 
 
 ///   Default Parameter in Function
 
 
 // console.log("Default Parameter in Function")
 
 
 
 
 function defaultParameter(name = "Mayur ", phone = 65776775) {
     console.log("My name is ", name);
     console.log("Contact Number is ", phone);
 }
 
 
 // defaultParameter();
 
 
 
 
 // for(let i=0; i<arr1.length; i++) {
 //     console.log(arr1[i]);
 // }
 
 
 
 
 // arr1.forEach((value,index)=>{
 //     console.log("Index : ",index,"Value : ",value);
 // })
 
 
 const myData = [
     {
         "userId": 1,
         "id": 1,
         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
     },
     {
         "userId": 1,
         "id": 2,
         "title": "qui est esse",
         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
     },
     {
         "userId": 1,
         "id": 3,
         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
     },
     {
         "userId": 1,
         "id": 4,
         "title": "eum et est occaecati",
         "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
     },
     {
         "userId": 1,
         "id": 5,
         "title": "nesciunt quas odio",
         "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
     },
     {
         "userId": 1,
         "id": 6,
         "title": "dolorem eum magni eos aperiam quia",
         "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
     },
     {
         "userId": 1,
         "id": 7,
         "title": "magnam facilis autem",
         "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
     }
 ]
 
 
 
 
 // console.log("Using For loops")
 
 
 // for (let i = 0; i < myData.length; i++) {
 //     console.log(myData[i].title);
 // }
 
 
 
 
 //  console.log("Using forEach method")
 
 
 
 
 // const idArray=[];
 //  myData.forEach((value,index)=>{
 //     if(value.body){
 //           idArray.push(value.id);
 //     }
 
 
 //  })
 
 
 //  console.log("Id's Array ",idArray);
 
 
 
 
 
 
 const findArray=[1,3,5,6,7,8,9];
 
 
 console.log("Find Method of Array");
 
 
 const data=findArray.find((value)=>{
       return value==10;
 })
 
 
 
 
 
 
 console.log("I Found Value for Given charecter ",data)
 
// Create - 10 Program using array Destructuring 
// Create - 10 Program using array Find Method
// Create - 10 Program using array forEach Method
// Create - 10 Program using Default Parameter

