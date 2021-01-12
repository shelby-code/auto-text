const speed = document.getElementById('speed')
const main = document.getElementById('main')
const h1 = document.querySelector('h1')
let value = 300 / speed.value
const text = 'ADEWALE SHELBY!'


let number = 1

displayName()

function displayName(){
    h1.innerText = text.slice(0, number)

    number++

    if(number > text.length){
        number = 1
    }
    
    setTimeout(displayName, value)
}

speed.addEventListener('input', (e)=>{
    value = 300 / e.target.value
    
})