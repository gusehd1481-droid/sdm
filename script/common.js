const header = document.querySelector('header');
console.log(header);
window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        //console.log('스크롤중');
        header.classList.add('scrolled');
    }
    else(
        header.classList.remove('scrolled')
    )
})