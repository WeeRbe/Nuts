const card = document.querySelector('.swiper-card');

const newsSwiper = new Swiper(card, {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next__card',
        prevEl: '.swiper-button-prev__card',
      },
});

const listCard = document.querySelectorAll('.card-nav li')
listCard.forEach(item =>{
item.addEventListener('click', (e) =>{
listCard.forEach(el=>{ el.classList.remove('active'); });
item.classList.add('active')
})
})