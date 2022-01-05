export default 
{
    watchSlidesProgress: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    on: {
      progress: function (progress) {
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          var slideProgress = this.slides[i].progress;
          let modify = 1;
          if (Math.abs(slideProgress) > 1) {
            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
          }
          let translate = slideProgress * modify * 130 + "px";
          let scale = 1 - Math.abs(slideProgress) / 10;
          let translateY = 1 +'px'
          let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
          slide.transform(
            "translateX(" + translate + ") translateY(" + translateY + ") scale(" + scale + ")"
          );
          slide.css("zIndex", zIndex);
          slide.css("opacity", 1);
          if (Math.abs(slideProgress) > 3) {
            slide.css("opacity", 0);
          }
        }
      },
      setTransition: function (swiper, transition) {
        for (var i = 0; i < this.slides.length; i++) {
          var slide = this.slides.eq(i);
          slide.transition(transition);
        }
      },
      slideChange:function(swiper){
        var slideItems = document.getElementsByClassName('swiper-slide');
        for(var index in slideItems){
          if(slideItems[index].style){
            slideItems[index].style.color='#333'
          }
        }
        slideItems[this.activeIndex].style.color='red'
        focus2.value = this.realIndex 
        proValue.value = Math.floor(((this.realIndex+1)/slides.value.length)*100)
      }
    },
  }