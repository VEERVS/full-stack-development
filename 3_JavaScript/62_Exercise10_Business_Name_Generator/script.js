let first, second, third;

let r1 = Math.random()

if(r1<=0.33){
    first = "Crazy";
}
else if(r1>0.33 && r1<=0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}

let r2 = Math.random()

if(r2<=0.33){
    second = "Engine";
}
else if(r2>0.33 && r2<=0.66){
    second = "Foods"
}
else{
    second = "Garments"
}

let r3 = Math.random()

if(r3<=0.33){
    third = "Bros";
}
else if(r3>0.33 && r3<=0.66){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
