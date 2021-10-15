// window.onscroll = function() {myFunction()};

// var header = document.querySelector(".header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


  
$('.media-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
   

    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        
      },

      breakpoint: 1024,
      settings: {
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
      
      }
    }]
});

// $('.chara-item-slider').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows: false,
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
  
//     responsive: [{
//       breakpoint: 500,
//       settings: {
//         centerMode: false,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         variableWidth: true,
//       }
//     }]
 
// });
  

$('.video-pop').click(function () {
  
  $('.video-playBtn').addClass('popupVisible');
});



$(function() {
  $(".video-pop").on("click", function(e) {
    $(".video-playBtn").addClass("popupVisible");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".video-playBtn") === false) {
      $(".video-playBtn").removeClass("popupVisible");
    }
  });
});

      