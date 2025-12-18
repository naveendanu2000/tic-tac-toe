const Types = () => {
  return <div></div>;
};

export default Types;

// Annotations in type script
// const variable : number = 31;  type script variable annotation
// const array : string[] = ['This', 'That', 'we']
// const existingObject : Date = new Date();
// Class Car :  {}
// let car : Car // here we used the Car class and the let car is an instace of type Car
// let point : {x: number; y: number} = {
// x: 10,
// y: 20
// }

//                       parameters               return type
// const logFunction : {i: number , y: number } => void = (i:number ) => {
// console.log(i);
// }

// another way of using type for functions:
// const logFunction = (i:number, y: number):void => {
//  console.log(i, " & ",y ," are numbers ");
// }
// use the properties that you care about.

// if we initialize the variable then type script automatically sets the type for the variable this is called type script, ex: let variable = 4 ---> this is equal to let variable :number = 4
// this behaviour is called Inference in typescript, where typescript determines the type.

// THE ANY TYPE
// any type is used when we are not sure what type of value the function might return.
// for ex: JSON.parse() might return a string, or an object or a number, so for those cases the any type is used.

//Strictness in Type Script
// Strictness is the degree of type checking in TS, it is a dial to increase the type checking behaviour in TS, can be by doing "strict": true in in the tsconfig.json file.
// there are a lot of type checking flags, Two biggest ones are:
// noImplicitAny and strictNullChecks

// noImplicitAny: Typescript inference many times results in specifying the any type to the variables, objects, etc. but that is a linient way, although its not a problem, but as this is a stictness flag, so if we apply this flag, then TS will not assign the Any type implicitly, that is using the TS inference.

// strictNullChecks: null and undefined are assignable to any other type. this can make writing some code easier, but fogetting to handle Null and undefined is the cause of countless bugs, the strictNullChecks flag makes handling null and undefined more explicit.

// static type- checking
//ex: const message = "hello"
//    message(); - this is an error because message is not callable, as it is a string.
//we could have a tool that helps us find these bugs before our code runs. That’s what a static type-checker like TypeScript does. Static type systems describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

//array types - const array : string[] = ['a', 'b', 'c'];
//object types - const date : {day: number, month: string, year: number} = {day : 11, month : 'Feb', year: 2000}
//function types - const function: (a : 'string') => void = (a) => {console.log(`hello ${a}`)}
//union types - const id : number | string = 'asdasd';

// Interfaces
//interface Point {
// x : number;
//  y : number;
//}

//Types or Aliases
//type Point {
// x: number;
// y: number;
//}

// function pinterCoords( pt : Point){
// console.log("x: " + pt.x + " & y: " + pt.y);
//}

//NOTE: both interface(using extends) and aliases(using intersections) can be inherited BUT only interface can be duplicated or overLoaded.

// extending an Interface
// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;


// extending an Alias
// type Animal = {
//   name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;


// generics in TS
// generics in TS are similar to java, since JS array might contain diferent types of data in a single array, so in type script we can define or set the type of data we want the array to be filled with using Generics. basically generics are the ways we define the type of data to be stored in the data stucture.

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// const str = identity<string>("hello World!!!");