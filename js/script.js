const btn =document.querySelector(".btn-cancal")
const nav =document.querySelector(".navbar-nav")
btn.addEventListener("click", function(){
        btn.classList.toggle('active')
        nav.classList.toggle('active')
})