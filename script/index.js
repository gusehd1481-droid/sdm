const heroBnr = document.querySelector('.hero_bnr');
const bestSeller = document.querySelector('.best_swiper');
const newProduct = document.querySelector('.new_swiper');
console.log(heroBnr,bestSeller,newProduct);
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
const bestSwiper = new Swiper(bestSeller,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#best_wrap .product_slide .swiper-scrollbar',
    },
});
const newSwiper = new Swiper(newProduct,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#new_wrap .product_slide .swiper-scrollbar',
    },
});