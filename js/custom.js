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
  



       
$(document).ready(function() { 
  
  /* get the real length of the path and set it for dasharray and dashoffset */
  // console.log(document.querySelector('path').getTotalLength())

  var $dashOffset = $(".line-main").css("stroke-dashoffset");

  $(window).scroll(function() { 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 120);
    var $newUnit = parseInt($dashOffset, 10);
    var $offsetUnit = $percentageComplete * ($newUnit / 60);
    $(".line-main").css("stroke-dashoffset", $newUnit - $offsetUnit);
    $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
});






// // Get the position on the page of the SVG
// var svgLocation = document.getElementById("svg-anim").getBoundingClientRect();

// // Scroll offset that triggers animation start.
// // In this case it is the bottom of the SVG.
// var offsetToTriggerAnimation = svgLocation.y + svgLocation.height;

// // Function to handle the scroll event.
// // Add an event handler to the document for the "onscroll" event
// function scrollAnimTriggerCheck(evt)
// {
//   var viewBottom = window.scrollY + window.innerHeight;
//   if (viewBottom > offsetToTriggerAnimation) {
//     // Start the SMIL animation
//     document.getElementById("round1").beginElement();
//     // Remove the event handler so it doesn't trigger again
//     document.removeEventListener("scroll", scrollAnimTriggerCheck);
//   }
// }

// // Add an event handler to the document for the "onscroll" event
// document.addEventListener("scroll", scrollAnimTriggerCheck);