console.log("Lets do operations!")

let a = 5;
var b = 10;
var c = "Veer";

// var _yo = 6; Allowed
// var 53rrr = 7; Not allowed

console.log(a+b);
console.log(typeof a, typeof b, typeof c)

// const d = 5;
// d = d + 1; //not allowed d is constant

{
    let a = 90
    console.log(a)
}
console.log(a)

console.log("Primitive DataTypes:-")

let x = "VVS";
let y = 55;
let z = 22.22;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

console.log("Objects:-")

let o = {
    "name": "Veer",
    "age": 18,
    "isGAMER": true
}

console.log(o);
o.salary = "100 crores"
console.log(o);