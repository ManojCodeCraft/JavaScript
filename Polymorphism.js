console.log("Let's Start Polymorphism ");
// 1. Compile Time Polymorphism
// Run Time Polymorphism


// 1. Function Overloading
// 1. Function Overriding
//   class A{
//     speak(message,name){
//         console.log(name,"Animal is Speaking and saying ",message);
//     }
//   }


// class Animal  extends A{
//     constructor() {
//         super();
//      }


//     speak(message,name){
//        super.speak(message,name);
//         console.log(" I am Speak Function Overloading")
//     }
// }
class Polymorphism  {
    // constructor() {
    //     super();
    // }
    greet(message) {


        console.log("Hello everybody ", message)
    }


    speak() {
        console.log("Hello I am first Speak 1 ")
    }
    speak() {
        console.log("Hello I am second Speak  2")
    }
    speak() {
        console.log("Hello I am first Speak  3 ")
    }
    speak() {
        console.log("Hello I am second Speak 4 ")
    }
    speak() {
        console.log("Hello I am first Speak 5 ")
    }
    speak() {
        console.log("Hello I am second Speak 6")
    }
}






const obj = new Polymorphism();
obj.speak();
// const obj2 = new Animal();
// obj.speak();
// obj2.speak("Hii ", "I am there ");
// obj2.speak()
// obj2.speak("Mayur ","Hii");
