
$(document).ready(function(){


  $('.slider').bxSlider({
    controls: true, 
    pager: false,
		// slideWidth: 940,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1
	});

  var text = $('.news-wrapp .link-2').html();
  console.log(text);

  $(document).on('click', '.link-2', function(e) {
    e.preventDefault();
    if ( !$(this).hasClass('active') ) {
      $(this).addClass('active').closest('.news-text').find('.hide').slideDown();
      $(this).html('свернуть');
    } else {
      $(this).removeClass('active').closest('.news-text').find('.hide').slideUp();
      $(this).html(text);
    }
  });

 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true

 // });


// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });


//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });
//  FORM MASK


});