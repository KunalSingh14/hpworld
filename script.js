const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

document.querySelector(".wrong").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
  });

const container = document.querySelector('.container')
document.querySelector(".wrong").addEventListener("click",function(){
    container.classList.add('inactive')
});
   