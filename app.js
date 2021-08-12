const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const reset = document.getElementById('reset')
const h2El = document.getElementById('h2')


let counter = 0

plus.addEventListener('click', ()=> {
    counter++
    h2El.textContent = counter

    if (counter > 0) {
        h2El.style.color = `green`
    } else if (counter == 0) {
        h2El.style.color = `black`
    }
})

minus.addEventListener('click', ()=> {
    counter--
    h2El.textContent = counter

    if (counter < 0) {
        h2El.style.color = `red`
    }  else if (counter == 0) {
        h2El.style.color = `black`
    }
})

reset.addEventListener('click', ()=> {
    counter = 0
    h2El.textContent = 0
    h2El.style.color = `black`
})