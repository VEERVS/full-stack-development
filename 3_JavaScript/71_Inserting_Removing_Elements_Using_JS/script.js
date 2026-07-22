// document.querySelector(".container").innerHTML
// '\n        <div class="box">Hey I am a BOX</div>\n        <div class="box">Hey I am a BOX</div>\n    '

// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">Hey I am a BOX</div>\n        <div class="box">Hey I am a BOX</div>\n    </div>'

// document.querySelector(".container").innerText
// 'Hey I am a BOX\nHey I am a BOX'

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").textContent
// '\n        Hey I am a BOX\n        Hey I am a BOX\n    '

// document.querySelector(".box").innerHTML = "Hey I am Veer I have hacked this successfully"
// 'Hey I am Veer I have hacked this successfully'

// document.querySelector(".box").hasAttribute("class")
// true

// document.querySelector(".box").getAttribute("class")
// 'box'

// document.querySelector(".box").setAttribute("class", "boxno1")

// document.querySelector(".box").removeAttribute("class")

// document.querySelector(".box").dataset
// DOMStringMap {coder: 'Veer'}

// let div = document.createElement("div")
// div.innerHTML = "Hey I am created"
// div.setAttribute("class", "created")
// document.querySelector(".container").append(div)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforeend", "<b>Hello This is GAMER VVS</b>")

// document.querySelector(".box").remove()
// undefined
// document.querySelector(".box").remove()
// undefined

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'blue', 'bg-re', value: 'container blue bg-re']

// document.querySelector(".container").className
// 'container blue bg-red'

// document.querySelector(".container").classList.add("right")
// undefined
// document.querySelector(".container").classList
// DOMTokenList(4) ['container', 'blue', 'bg-red', 'right', value: 'container blue bg-red right']

// document.querySelector(".container").classList.remove("blue")
// undefined
// document.querySelector(".container").classList
// DOMTokenList(2) ['container', 'bg-red', value: 'container bg-red']

// document.querySelector(".container").classList.toggle("red")
// true
// document.querySelector(".container").classList.toggle("red")
// false
