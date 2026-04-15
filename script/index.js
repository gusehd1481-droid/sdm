const heroBnr = document.querySelector('.hero_bnr');
const bestToner = document.querySelector('.toner .best_toner_swiper');
const bestAmpoule = document.querySelector('.ampoule .best_ampoule_swiper');
console.log(heroBnr,bestToner,bestAmpoule);
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
const bestTonerSwiper = new Swiper(bestToner,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#best_wrap .toner .swiper-scrollbar',
    },
});
const bestAmpouleSwiper = new Swiper(bestAmpoule,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#best_wrap .ampoule .swiper-scrollbar',
    },
});



//===================================================================상품 슬라이드 product_slide 

const bestProductSlide = document.querySelectorAll('#best_wrap .product_slide');
const category = document.querySelectorAll('#best_wrap .category a');
console.log(bestProductSlide,category);
for(let i of category){
    i.addEventListener('click',function(){
        i.classList.remove('active');
        i.classList.add('active');
        productSlideHide();
        bestProductSlide.style.display = 'block';
    })
};
function productSlideHide(){
    bestProductSlide.style.display = 'none';
}
//집에서 다시 ㄱ