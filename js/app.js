let header = document.querySelector("header")
window.addEventListener("scroll",  function(event){
    if (this.scrollY > 100){
        header.classList.add("bg-andela")
        console.log(34)
    }else{
        header.classList.remove("bg-andela")
    }
})
console.log(34)