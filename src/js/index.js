const text = "Hello, I'm Arthur."
const title = document.querySelector(".main__title")
let sleep = 100

let letter = 0
function writeText(){
    if( letter < text.length){
        title.textContent += text.charAt(letter)
        letter++
        setTimeout(writeText, sleep)
    }

}

writeText()