let arr = [1, 2, 4, 5, 7]

arr[0] = 23;

console.log(arr)
console.log(arr.length)
console.log(arr[3])

console.log(arr.toString())
console.log(arr.join(" and "))

let a = [1, 2, 3, 4, 5]
console.log(a.pop()) // remove and returns the last element
console.log(a)

a.push(23) //adds element at last
console.log(a)
a.push("Veer")
console.log(a)

console.log(a.shift()) // a and returns the last element
console.log(a)

console.log(a.unshift("ABC")) //adds the first element
console.log(a)

delete a[1]
console.log(a)
console.log(a[1])
console.log(a.length)

let b = [7,8,9]
let c = [17,18,19]
console.log(a.concat(b,c))

let d = [15, 6, 12, 54, 9, 1]
console.log(d)
// d.sort() alphabetical sorting
d.sort((a,b)=>a-b) //ascending numeric sort
d.sort((a,b)=>b-a) //descending numeric sort
console.log(d)

// d.splice(1,3, 34, 45, 64)
// console.log(d)
d.splice(1, 3)
console.log(d)

d.reverse()
console.log(d)

let e = [1,2,3,4,5]
console.log(e.slice(1,4))

