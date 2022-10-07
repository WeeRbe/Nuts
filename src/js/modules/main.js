const slider = document.querySelector('.about-slider');

const swiper = new Swiper(slider, {
    navigation: {
        nextEl: '.swiper-button-next__about',
        prevEl: '.swiper-button-prev__about',
      },
});

const newsSlider = document.querySelector('.news-contents');

const newsSwiper = new Swiper(newsSlider, {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next__news',
        prevEl: '.swiper-button-prev__news',
      },
});