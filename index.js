let input = document.getElementById('todo')
let btn = document.getElementById('btn')
let conatainer = document.getElementById('down')

btn.addEventListener('click', () => {
    if (input.value === '') {
        alert('TYPE TO DO ')
    } else {
        let text = document.createElement('li')
        text.innerText = input.value
        conatainer.appendChild(text)
        input.value = ''
        text.addEventListener('click', () => {
            text.style.textDecoration = 'line-through'
            text.style.color = 'black'
        })
        text.addEventListener('dblclick', () => {
            conatainer.removeChild(text)
        })
    }

})