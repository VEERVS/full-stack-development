let a = [23,53,63,75,34,57]

// for(let i=0; i<a.length; i++){
//     element = a[i]
//     console.log(element)
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const i of a) {
    console.log(i)
}