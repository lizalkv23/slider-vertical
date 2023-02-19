document.querySelectorAll('.slider').forEach((n, i) => {
   window[`slider${i + 1}`] = new Swiper(n, {
      freeMode : true,
      centeredSlides: true,
      direction: 'vertical',
      mousewheel: true,
      slidesPerView: 1.7,
      slidesOffsetBefore: -130,
         breakpoints: {
      0: {
               slidesPerView: 2.8,
         slidesOffsetBefore: -50,
      },
      480: {
         slidesPerView: 1.7,
      }
   }
   }) 
});
   bindSwipers(slider1, slider2, slider3, slider4)