const header = document.querySelector('header');
const openMenu = header.querySelector('.open_menu_bg');
const closeBtn = openMenu.querySelector('.close_btn');
const menuBtn = header.querySelector('.menu');
console.log(header,openMenu,closeBtn,menuBtn);
window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        //console.log('스크롤중');
        header.classList.add('scrolled');
    }
    else(
        header.classList.remove('scrolled')
    )
})
menuBtn.addEventListener('click', function(e){
    e.preventDefault();
    openMenu.style.display = 'block';
});
closeBtn.addEventListener('click', function(){
    openMenu.style.display = 'none';
});
openMenu.addEventListener('click', function(){
    openMenu.style.display = 'none';
});