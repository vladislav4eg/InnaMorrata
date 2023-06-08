$(function() {

//------------------------------slider-----------------------------
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

//------------------------------more-----------------------------
  $('.more').click(function() {
    $('.portfolio__item').toggleClass('portfolio__item--active');
    $('.more').toggleClass('more--active');
    $('.more').text('загрузить больше фото');
    $('.more--active').text('Спрятать фото');
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+375 (00) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{3}\s\([0-9]{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),

          size: jQuery('.form-' + index).find("input[name=size]:checked").val(),
          type: jQuery('.form-' + index).find("input[name=type]:checked").val(),
          // baseone: jQuery('.form-' + index).find("input[name=baseone]").val(),
          // basetwo: jQuery('.form-' + index).find("input[name=basetwo]").val(),

          option_one: jQuery('.form-' + index).find("input[name=option_one]:checked").val(),
          option_two: jQuery('.form-' + index).find("input[name=option_two]:checked").val(),
          option_three: jQuery('.form-' + index).find("input[name=option_three]:checked").val(),
          option_four: jQuery('.form-' + index).find("input[name=option_four]:checked").val(),
          option_five: jQuery('.form-' + index).find("input[name=option_five]:checked").val(),

          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }


  // $( "#radio1 input" ).on( "click", function() {
  //   $( "#base" ).val( $( ".size:checked" ).val());
  // });

  // $( "#radio2 input" ).on( "click", function() {
  //   $( "#basetwo" ).val( $( ".type:checked" ).val());
  // });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  });

  
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(3000).fadeOut('slow');
  });
