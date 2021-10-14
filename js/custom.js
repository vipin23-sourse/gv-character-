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
    // variableWidth: true
  });
      