console.log("Let's Start Array ");

// const arr = ["Mayur", 44, { age: 67 }, true, "A"];
// const arr =new Array(1,2,3,4,6,7);

// const arr = [
//   { name: "amit", age: 34 },
//   { name: "John", age: 31 },
//   { name: "Patrick", age: 2 },
//   { name: "Ravi", age: 56 },
//   { name: "Nil", age: 41 },
//   { name: "Sam", age: 89 },
// ];
// const arr1 = [45, 23, 78, 91, 71];
// const arr2 = [1, 2, 3, 4, 5, 6];
// arr.push({ name: "mayur", age: 78 }); // Is used to Add new Element in array
// console.log(arr);
// arr.pop(); // it is used to remove element from array
// console.log("String ", arr.at(3));
// arr[7] = 67;

// console.log("Array Indexing : ", arr[7]);
// console.log("Array Lenght : ", arr.length);
// arr.shift();
// delete arr[0];
// const mergedArray = arr2.concat(arr1);
// console.log(mergedArray);
// const newArray = arr2.map((event) => {
//   return Number(event + 10);
// });

// console.log("Map Function of Array  ", newArray);

// const arr = [
//   { status: false, name: "amit", age: 34 },
//   { status: true, name: "John", age: 31 },
//   { status: true, name: "Patrick", age: 2 },
//   { status: false, name: "Ravi", age: 56 },
//   { status: true, name: "Nil", age: 41 },
//   { status: false, name: "Sam", age: 89 },
// ];
// const filteredArray = arr.filter((event) => {
//   return event.status;
// });

// console.log("Filtered Array", filteredArray);
const arr3 = ["my", "ab", "bc"];

// console.log("Reversed Array ", arr3.reverse());
// // arr3.toShorted();
// arr3.sort();
// console.log("Reversed Array ", arr3);

const total = arr3.reduce((b, a) => {
  return b + a;
}, 0);
// console.log("Slice method ",arr3.slice(3,7))

// 0+1=1
// 1+2=3
// 3+3

console.log("Total Sum of Array element ", total);

// 1. map
// 2. filter
// 3. reduce

// console.log("Array Indexing : ",mergedArray.join(","));
