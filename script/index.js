/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */

const bestToner = document.querySelector('.toner .best_toner_swiper');
const bestAmpoule = document.querySelector('.ampoule .best_ampoule_swiper');
const bestLotion = document.querySelector('.best_lotion_swiper');
const bestCream = document.querySelector('.best_cream_swiper');
const bestSunCare = document.querySelector('.best_sun_care_swiper');
const newToner = document.querySelector('.toner .new_toner_swiper');
const newAmpoule = document.querySelector('.ampoule .new_ampoule_swiper');
const newLotion = document.querySelector('.lotion .new_lotion_swiper');
const newCream = document.querySelector('.cream .new_cream_swiper');
const newSunCare = document.querySelector('.suncare .new_sun_care_swiper');
const foryouTrouble = document.querySelector('.for_you_trouble_swiper');
const foryouWhite = document.querySelector('.for_you_white_swiper');
const foryouAntiAging = document.querySelector('.for_you_anti-aging_swiper');
const foryouPores = document.querySelector('.for_you_pores_swiper');
const foryouSunCare = document.querySelector('.for_you_sun_care_swiper');
const eventBeauty = document.querySelector('.beauty_1st_swiper');
const heroBnr = document.querySelector('.hero_bnr');
const bar = document.querySelector('#hero_wrap .player_bar');
const barFill = bar.querySelector('.player_fill');
const pauseBtn = document.querySelector('#hero_wrap .pause_btn');
const playerIcon = pauseBtn.querySelector('img');
const prevBtn = document.querySelector('#hero_wrap .prev');
const nextBtn = document.querySelector('#hero_wrap .next');
console.log(bestToner,bestAmpoule,newToner,newAmpoule,foryouTrouble,foryouWhite,eventBeauty,heroBnr,bar,pauseBtn,playerIcon,barFill,foryouAntiAging,foryouPores,foryouSunCare,prevBtn,nextBtn);
const heroSwiper = new Swiper('.hero_bnr',{
    loop:true,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    effect:'fade',
    navigation:{
        prevEl: document.querySelector('#hero_wrap .prev'),
        nextEl: document.querySelector('#hero_wrap .next'),
    },
});    
//console.log(heroSwiper.autoplay.running);
let heroStatus = heroSwiper.autoplay.running;
//console.log(heroStatus);
pauseBtn.addEventListener('click', function(){
    if(heroStatus == true){
        heroSwiper.autoplay.pause();
        playerIcon.src = 'images/common/play.png';
        heroStatus = !heroStatus;
    }
    else if(heroStatus == false){
        heroSwiper.autoplay.start();
        playerIcon.src = 'images/common/pause.png';
        heroStatus = !heroStatus;
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
const bestLotionSwiper = new Swiper(bestLotion,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#best_wrap .lotion .swiper-scrollbar',
    },
});
const bestCreamSwiper = new Swiper(bestCream,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#best_wrap .cream .swiper-scrollbar',
    },
});
const bestSunCareSwiper = new Swiper(bestSunCare,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#best_wrap .suncare .swiper-scrollbar',
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
const newLotionSwiper = new Swiper(newLotion,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#new_wrap .lotion .swiper-scrollbar',
    },
});
const newCreamSwiper = new Swiper(newCream,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#new_wrap .cream .swiper-scrollbar',
    },
});
const newSunCareSwiper = new Swiper(newSunCare,{
    slidesPerView:5,
    spaceBetween:20,
    scrollbar:{
        el:'#new_wrap .suncare .swiper-scrollbar',
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
const foryouAntiSwiper = new Swiper(foryouAntiAging,{
    slidesPerView:3.5,
    spaceBetween:20,
    scrollbar:{
        el:'#for_you_wrap .anti-aging_box .swiper-scrollbar',
    },
});
const foryouSunCareSwiper = new Swiper(foryouSunCare,{
    slidesPerView:3.5,
    spaceBetween:20,
    scrollbar:{
        el:'#for_you_wrap .sun_care_box .swiper-scrollbar',
    },
});
const foryouPoresSwiper = new Swiper(foryouPores,{
    slidesPerView:3.5,
    spaceBetween:20,
    scrollbar:{
        el:'#for_you_wrap .pores_box .swiper-scrollbar',
    },
});
const eventBeautySwiper = new Swiper(eventBeauty, {
    direction:'vertical',
    slidesPerView:2,
    spaceBetween:20,
    mousewheel:true,
    navigation:{
        prevEl:'.vertical_box .prev',
        nextEl:'.vertical_box .next',
    },
})
//===================================================================상품 슬라이드 product_slide 

$('.best_box .category a').on('click', function(e){
    e.preventDefault();
    let idx = $(this).index();
    //console.log(idx);
    $(this).addClass('active').siblings().removeClass('active');
    $('.best_box .product_slide').removeClass('active').eq(idx).addClass('active');
    // swiper 업데이트
    if(idx === 0) bestTonerSwiper.update();
    if(idx === 1) bestAmpouleSwiper.update();
    if(idx === 2) bestLotionSwiper.update();
    if(idx === 3) bestCreamSwiper.update();
    if(idx === 4) bestSunCareSwiper.update();
});
$('#for_you_wrap .action_btn_box .category a').on('click', function(e){
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
    $(this).addClass('active').siblings().removeClass('active');
    $('#for_you_wrap .wide_box').removeClass('active').eq(idx).addClass('active');
    if(idx === 0) foryouTroubleSwiper.update();
    if(idx === 1) foryouWhiteSwiper.update();
    if(idx === 2) foryouAntiSwiper.update();
    if(idx === 3) foryouPoresSwiper.update();
    if(idx === 4) foryouSunCareSwiper.update();
})
$('.new_box .category a').on('click', function(e){
    e.preventDefault();
    let idx = $(this).index();
    console.log(idx);
    $(this).addClass('active').siblings().removeClass('active');
    $('.new_box .product_slide').removeClass('active').eq(idx).addClass('active');
    // swiper 업데이트
    if(idx === 0) newTonerSwiper.update();
    if(idx === 1) newAmpouleSwiper.update();
    if(idx === 2) newLotionSwiper.update();
    if(idx === 3) newCreamSwiper.update();
    if(idx === 4) newSunCareSwiper.update();
});

