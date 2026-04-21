
const bestToner = document.querySelector('.toner .best_toner_swiper');
const bestAmpoule = document.querySelector('.ampoule .best_ampoule_swiper');
const bestLotion = document.querySelector('.best_lotion_swiper');
const bestCream = document.querySelector('.best_cream_swiper');
const bestSunCare = document.querySelector('.best_sun_care_swiper');
const newToner = document.querySelector('.toner .new_toner_swiper');
const newAmpoule = document.querySelector('.ampoule .new_ampoule_swiper');
const foryouTrouble = document.querySelector('.for_you_trouble_swiper');
const foryouWhite = document.querySelector('.for_you_white_swiper');
const eventBeauty = document.querySelector('.beauty_1st_swiper');
const hero = document.querySelector('#hero_wrap');
const heroBnr = hero.querySelector('.hero_bnr');
const bar = hero.querySelector('.player_bar');
const btn = hero.querySelector('.pause_btn');
console.log(bestToner,bestAmpoule,newToner,newAmpoule,foryouTrouble,foryouWhite,eventBeauty,hero,heroBnr,bar,btn);
const heroSwiper = new Swiper(heroBnr,{
    loop:true,
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
    effect:'fade',
    navigation:{
        prevEl: hero.querySelector('.prev'),
        nextEl: hero.querySelector('.next'),
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
const newTonerSwiper = new Swiper(newToner,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#new_wrap .toner .swiper-scrollbar',
    },
});
const newAmpouleSwiper = new Swiper(newAmpoule,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#new_wrap .ampoule .swiper-scrollbar',
    },
});
const foryouTroubleSwiper = new Swiper(foryouTrouble,{
    slidesPerView:3.5,
    spaceBetween:20,
    scrollbar:{
        el:'#for_you_wrap .trouble_box .swiper-scrollbar',
    },
});
const foryouWhiteSwiper = new Swiper(foryouWhite,{
    slidesPerView:3.5,
    spaceBetween:20,
    scrollbar:{
        el:'#for_you_wrap .white_box .swiper-scrollbar',
    },
});
const eventBeautySwiper = new Swiper(eventBeauty, {
    direction:'vertical',
    slidesPerView:2,
    spaceBetween:20,
    mousewheel:true,
    pagination:{
        prevEl:'event_box .vertical_box .prev',
        nextEl:'event_box .vertical_box .next',
    },
})

//===================================================================상품 슬라이드 product_slide 

$('.best_box .category a').on('click', function(e){
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
    $(this).addClass('active').siblings().removeClass('active');
    $('.best_box .product_slide').removeClass('active').eq(idx).addClass('active');
    // swiper 업데이트
    if(idx === 0) bestTonerSwiper.update();
    if(idx === 1) bestAmpouleSwiper.update();
});
$('.new_box .category a').on('click', function(e){
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
    $(this).addClass('active').siblings().removeClass('active');
    $('.new_box .product_slide').removeClass('active').eq(idx).addClass('active');
    // swiper 업데이트
    if(idx === 0) newTonerSwiper.update();
    if(idx === 1) newAmpouleSwiper.update();
});
$('#for_you_wrap .action_btn_box .category a').on('click', function(e){
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
    $(this).addClass('active').siblings().removeClass('active');
    $('#for_you_wrap .wide_box').removeClass('active').eq(idx).addClass('active');
    if(idx === 0) foryouTrouble.update();
    if(idx === 1) foryouWhite.update();
})