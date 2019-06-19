// import { random } from "./lib";
import a = require('./lib')
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//       this.greeting = message;
//   }

//   @enumerable(false)
//   greet() {
//       return "Hello, " + this.greeting;
//   }
// }
// function enumerable(value: boolean) {
//   console.log(value)
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(descriptor)
//     descriptor.enumerable = value;
//   };
// }
// random()
// console.log(a)

let button = document.querySelector('.button')

console.log('button', button)
button.addEventListener('click', function(this: void, e) {
  console.log(this, '&&', e)
})

// 函数模块

function addZero(x:string){
  return 
}