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

$('.category a').on('click', function(e){
    e.preventDefault();

    let idx = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');
    $('.product_slide').removeClass('active').eq(idx).addClass('active');

    // swiper 업데이트
    if(idx === 0) tonerSwiper.update();
    if(idx === 1) ampouleSwiper.update();

    console.log(idx);
});