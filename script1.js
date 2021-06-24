const tick = document.querySelector('.tick')
document.querySelector('.deactivate').addEventListener('click', () => {
    tick.classList.toggle('click');
})
const tick = document.querySelector('.tick')
document.querySelector('.deactivate').addEventListener('click', () => {
    tick.classList.toggle('click');
})

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

<<<<<<< HEAD
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
=======
const labels =document.querySelectorAll('.no-good')

labels.forEach(label => {
    
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')

})
>>>>>>> 29c122b10dc5b820220a652dcbf747fed2b8a3aa
