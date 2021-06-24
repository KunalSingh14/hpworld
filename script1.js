const tick = document.querySelector('.tick')
document.querySelector('.deactivate').addEventListener('click',() => {
    tick.classList.toggle('click');
})

const labels =document.querySelectorAll('.no-good')

labels.forEach(label => {
    
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')

})