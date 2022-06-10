$(function () {

  $(".menu__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.burger, .menu__link').on('click', function () {
    $('.menu').toggleClass('menu__list--active');
    $('.burger').toggleClass('active');
    //  $('.burger__line').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $window = $(window);
  $window.scroll(function () {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__inner').addClass('header__inner--bg');
    } else {
      $('.header__inner').removeClass('header__inner--bg');
    }
  })

});

var mixer = mixitup('.portfolio__content');

