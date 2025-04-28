
// Primitive

// 7 Types: String , Number, boolean , null, undefined , Symbol, BigInt

const score= 100
const scoreValue = 100.3

const isLogedIn = false

const outsidetemp= null

let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id===anotherId)
// const bigNumber = 123454553787787n
//  reference (non primitive)

// array , object, Functions

const heros = ["shaktiman", "nagraj","doga"]

let myobj = {

    name:"hitesh",
    age:22
}

const myFunction = function(){
    console.log("hello world")
}


console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3