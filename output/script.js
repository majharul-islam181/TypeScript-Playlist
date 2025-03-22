"use strict";
/*
````````` Basic Type ````````

let playerName = "Mashrafi";
console.log(playerName)

playerName = "12"
console.log(playerName)


function multiply(a: number , b: number){ //Explecit Type
    return a * b;
}
console.log(multiply(2,3))


//array
let fruits = ['apple', 'banana', 'orange']  // [[Prototype]] : Array
fruits.push('dd')
console.log(fruits)

let mixed = ["banana",23,false]; // [[Prototype]] : Array
mixed.push(12.22)
console.log(mixed)

let person = {
    name : "Majharul",
    age : 22,
    isCaptain : false,
}  // [[Prototype]] : Object

// person.age = "masjdfa",  // this got error
person.age = 20;
console.log(person)

*/
// Explicit Type
// Variable
let a;
// a = 23 // it got error
a = "Majharul islam";
console.log(a);
// this variable can be string or number
let b; /* Union Type */
b = 23;
b = "majharul";
// Array
let person;
person = ["jodu", "modu", "kola"];
console.log(person);
// if array need more type
let newArr; /* Union Type */
newArr = ["Majharul", 12];
newArr.push(2, "islam");
console.log(newArr);
console.log(newArr.length);
//Object
//normall declare object without specefic type
let obj;
obj = {
    name: "majharul",
    age: 23,
};
//with specefic type
let object;
object = {
    name: "Majharul",
    age: 23,
    adult: false,
};
