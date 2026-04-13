const heroBnr = document.querySelector('.hero_bnr');
console.log(heroBnr);
const heroSwiper = new Swiper(heroBnr,{
    autoplay:{
        delay:3000,
    },
    speed:2000,
    navigation:{
        prevEl:'.hero_bnr .prev',
        nextEl:'.hero_bnr .next',
    },
    pagination:{
        el:'.hero_bnr .swiper-pagination',
        type:'progressbar',
    },
});