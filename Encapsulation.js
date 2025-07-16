// console.log("Encapsulation in JS ");


// Def  : Encapsulation helps in maintaining the Integrity of The Data and Improving resusablity of Code


// 1. Using Closure
// 2. Using Classes


// console.log("Encapsulation in Closure")


// 1. Show Bank Detail
// 2. Withdraw Amount
// 3. Deposit Amount
// name ,acc, balance,
//  Encapsulation with  Function  


// function BankAccount(accountNumber, acHolderName, balance) {
//     var _balance = balance;
//     var _name = acHolderName;
//     var _accNumber = accountNumber;
//     // cr , dr
//     function showBankDetails() {
//         console.log("Account Number ", _accNumber);
//         console.log("Account Holder Name  ", _name);
//         console.log("Bank Balance  ", balance);
//     }


//     function withdrawAmount(amount) {
//         console.log("Withdraw Amount ", amount);
//         if (Number(_balance) >= Number(amount)) {
//             _balance = Number(_balance) - Number(amount);
//             console.log("Amount Withdraw  Successfully ");
//             console.log("Your Bank Balance : ", _balance)
//         }
//         else {
//             console.log("Amount Withdraw Failed : Insufficient Amount");
//         }
//     }


//     function depositAmount(amount) {
//         _balance = Number(_balance) + Number(amount);
//         console.log(" Amount  Deposit Successfully");
//         console.log("Your Bank Balance : ", _balance)
//     }
//     return {
//         showBankDetails,
//         withdrawAmount,
//         depositAmount
//     }
// }






//  Encapsulation with  Classes
class BankAccount {


    constructor(accountNumber, acHolderName, balance) {
        if(!accountNumber || !acHolderName || !balance){
             console.log("All Bank Details Required");
         
        }
        this._balance = balance;
        this._name = acHolderName;
        this._accNumber = accountNumber;
    }
     showBankDetails() {
        console.log("Account Number ", this._accNumber);
        console.log("Account Holder Name  ", this._name);
        console.log("Bank Balance  ", this._balance);
    }


     withdrawAmount(amount) {
        console.log("Withdraw Amount ", amount);
        if (Number(this._balance) >= Number(amount)) {
            this._balance = Number(this._balance) - Number(amount);
            console.log("Amount Withdraw  Successfully ");
            console.log("Your Bank Balance : ", this._balance)
        }
        else {
            console.log("Amount Withdraw Failed : Insufficient Amount");
        }
    }
   
     depositAmount(amount) {
        this._balance = Number(this._balance) + Number(amount);
        console.log(" Amount  Deposit Successfully");
        console.log("Your Bank Balance : ", this._balance)
    }
}


const bank = new BankAccount("5785378478", "Manoj Kumar", "1000");
bank.depositAmount("200000");  
bank.withdrawAmount("150000");


// 201000-150000 =51000


bank.showBankDetails();






