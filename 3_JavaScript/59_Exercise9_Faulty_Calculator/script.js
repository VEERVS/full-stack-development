console.log("Welcome to the faulty calculator")

let a = 3;
let b = 2;

let r = Math.random();

if(r<0.1){
    console.log("The sum of a and b is ", a+b)
    console.log("The product of a and b is ", a*b)
    console.log("The difference of a and b is ", a-b)
    console.log("The division of a and b is ", a/b)
}else{
    console.log("The sum of a and b is ", a-b)
    console.log("The product of a and b is ", a+b)
    console.log("The difference of a and b is ", a/b)
    console.log("The division of a and b is ", a**b)
}
