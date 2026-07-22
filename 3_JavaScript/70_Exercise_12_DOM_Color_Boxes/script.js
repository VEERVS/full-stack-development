r = Math.random()

let boxes = document.getElementsByClassName("box")

console.log(boxes)

/*
Formula for random number:-
let a is min
let b is max
let r is random

min + random * (b-a)
a + r * (b-a)

So, for rgb(0 to 255) it should be :- 0 + r * (255 - 0)
*/

function getRandomColor(){ 
    let val1 = Math.random() * 255;
    let val2 = Math.random() * 255;
    let val3 = Math.random() * 255;
    return `rgb(${val1}, ${val2}, ${val3})`
}

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})