$(document).ready(function(){
    $('.slick-slideshow').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        customPaging: (_slider, i) => '<div id="dot' + (i + 1) + '"><svg viewBox="0 0 40 40" class="spinner" width="20" height="20" style="--duration: 15.046667s;"><circle cx="20" cy="20" r="12" class="outer" opacity="0.5"></circle><circle cx="20" cy="20" r="5.5" class="inner" opacity="0.5"></circle></svg></div>'
      });
      var currentVideo;
      $('.slick-slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          if(currentVideo !== undefined){
              currentVideo.pause();
          }
      });
      $('.slick-slideshow').on('afterChange', function(event, slick, currentSlide, nextSlide){
          var video = $(slick.$slides[currentSlide]).find('.slider-video');
          if(video.length > 0){
              video.get(0).play();
              currentVideo = video.get(0);
          }
      });
    // scroll menu
      const nav = document.querySelector('.navbar.homepage');
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos && currentScrollPos > 75) {
            nav.style.top = '-75px';
        } else {
            nav.style.top = '0';
        }
        prevScrollpos = currentScrollPos;
    }
    // Scroll xuống  "home-news"
    var arrowLink = document.querySelector('a.arrow');
    arrowLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    var homeNews = document.querySelector('.home-news');
    homeNews.scrollIntoView({ behavior: 'smooth' });
    });
    // scroll up
      $(".scrolltop").click(function(event){
        $('html, body').animate({ scrollTop: 0 }, 500);
       });
      AOS.init();
});