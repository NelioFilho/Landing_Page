const swiper = new Swiper('.swiper', {

    direction: 'vertical',
    loop: true,
    grabCursor: true,
  

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    },
  );