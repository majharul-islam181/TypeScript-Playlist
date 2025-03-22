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

