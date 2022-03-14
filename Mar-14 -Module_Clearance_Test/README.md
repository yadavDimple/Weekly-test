Q1. What is ES6? and what are the new introductions in ES6? (Give your answer in points) *
Ans. -> ECMAScript (ES)  is a scripting language specification standardized by ECMAScript International.
->  It is used by applications to enable client-side scripting.
-> Languages like JavaScript, Jscript and ActionScript are governed by this specification.

The new introductions in ES6 are---

->  Keywords (let and const)
->  Block of Code -> Set of instructions within Curly brackets.
-> Scoping(var ,let, const)
-> Arrow Functions
-> Anonymous functions 
-> Callbacks 
-> IIFE (Depends)
-> Block Scope
-> Iterators
-> Multi-line Strings
-> Default Parameters
-> Template Literals
-> Extended Literals
-> Generators
-> Collections
-> Enhanced Object Properties
-> Destructuring Assignment
-> Enhanced Object Literals
-> Classes
-> Modules
-> Support for constants
-> Extended Parameter Handling
-> De-structuring Assignment

Q.2  Give the output and explain the reasoning behind such behavior. *
     for (var i = 0; i < 10; i++) {
            console.log("Hello");
      }
        console.log(i);
Ans. The output is : Hello
                     10
     Reason -> Object
       The console.log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message in double quotes("...") or that needs to be displayed to the user..

Q.3  Give the output and explain the reasoning behind such behavior. *
           let idx = {
    'name': "Aayush",
}
let idx1 = {
    'name': "Geekster",
}
let obj = {};

obj[idx] = "IDX";
obj[idx1] = "IDX1";

console.log(obj);

Ans.  The output is -> [object Object]: "IDX1"
Reason is -> Object
  The console.log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user or in defined object.
        
Q.4 Create a Weather Application using OpenWeather API ( https://openweathermap.org/ ) and give the functionality of showing weather with the help search to get weather of another city. consult the below checklist, for features you need to implement in the Web Application. (Complete the task and give hoisted site link here ) .

Ans. 

