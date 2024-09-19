//import { apiKey} from "./util.js";

//import apiKey from './util.js';
//import{apiKey,abc} from "./util.js";
//import * as util from "./util.js";
//import {apiKey, abc as content} from "./util.js";

//console.log(util.apiKey);
//console.log(util.abc);

//console.log(content);

//variables-uses
let userMessage = "Hello World!";
console.log(userMessage);
console.log(userMessage);

//constants
const userMessage2="Hello World again";
console.log(userMessage2);


//Values and operators
console.log("Hello"+"Maria");
console.log(10===5);
console.log(10===10);
console.log(10<=10);
console.log(10>=10);

if(10===10){
    console.log("works");
}


//functions and parameters
function greet(){
    console.log("hello!");
}

greet();
greet();
greet();
greet();

function greetUser(userName, message="Hello"){
    console.log(userName);
    console.log(message);
}

greetUser("Max");
greetUser("Manuel","Hello, what's up");


function greetUser2(userName, message="Hello!"){
    return "Hi, I am " + userName + ". " + message;
}

const greeting1 = greetUser2("Max");
console.log(greeting1);

const greeting2= greetUser2("Manuel","Hello, what's up");
console.log(greeting2);


//arrow functions

//export default function (){
  //  console.log('hello anonymous function');
//}


//omit function word

export default (username, message) => {
    console.log('Hello arrow');
    return username + message;
}

//-------Objects-----------
console.log("********Objects********")
const user={
    name:"max",
    age:"34",
    greet(){
        console.log("Hello!");
        console.log(this.age);
    }
}
console.log(user.name);
user.greet();

//object base in a blueprint

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hi!!");
    }
}

const user1 = new User("Manuel", 45);
console.log(user1);
user1.greet();

//------Arrays---------------
console.log("********Arrays********")
const hobbies = ["Sports","Cooking","Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index= hobbies.findIndex((item)=>{
    return item === "Sports";
});

console.log(index);

const editedHobbies= hobbies.map((item)=> item + "!");
console.log(editedHobbies);

const editedHobbies2 = hobbies.map((item)=> ({text: item}));
console.log(editedHobbies2);