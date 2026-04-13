const heroBnr = document.querySelector('.hero_bnr');
console.log(heroBnr);
const heroSwiper = new Swiper(heroBnr,{
    autoplay:{
        delay:4000,
    },
    effect:'fade',
    navigation:{
        prevEl:'.hero_bnr .prev',
        nextEl:'.hero_bnr .next',
    }
});