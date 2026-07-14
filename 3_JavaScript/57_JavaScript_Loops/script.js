console.log("Time for loops!")

let a = 1;

console.log(a)
console.log(a+1)
console.log(a+2)

for(i=0; i<100; i++){
    console.log(a+i)
}

let obj = {
    name: "VEER",
    company: "Microsoft",
    age: "18"
}

for(const key in obj){
    const element = obj[key];
    console.log(key, element)
}

for(const key in obj){
    console.log(key)
}

for(const c of "VeerVS"){
    console.log(c)
}

i = 0;
while(i<6){
    console.log(i)
    i++;
}

i = 0;
do {
    console.log(i)
    i++;
} while (i<0);
