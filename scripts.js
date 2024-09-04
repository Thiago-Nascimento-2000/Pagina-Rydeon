

window.addEventListener('scroll', function(){
    let header = this.document.querySelector('.header')
    header.classList.toggle('showscroll',window.scrollY > 0)
})