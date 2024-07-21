const accountId=18138
let accountEmail="manojkumar@gmail.com"
var accountPassword="12345"
accountCity="Kurnool"
/*Prefer not to use var because of issue in block scope and functional scope */
let accountState;
// accountId=4
accountEmail="manu@gmail.com"
accountPassword="87245"
accountCity="Hyd"
console.log(accountId);
// console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);