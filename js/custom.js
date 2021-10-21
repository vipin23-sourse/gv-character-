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

  // video gallery
  $('.modal').on('shown.bs.modal', function (e) {
    
    $('.slidervideo-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-video-gallery',
      dots: false,
      focusOnSelect: true,
      infinite: false,
      arrows:false,
    });
  
    $('.slider-video-gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
      asNavFor: '.slidervideo-nav',
      autoplay: false,
      arrows:true,
    });
  })




  
$('.media-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
  arrows: true,
  // variableWidth: true,
   

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
 console.log(document.querySelector('path').getTotalLength())

  var $dashOffset = $(".line-main").css("stroke-dashoffset");

  $(window).scroll(function() { 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 120);
    console.log($percentageComplete);
    var $newUnit = parseInt($dashOffset, 10);
    var $offsetUnit = $percentageComplete * ($newUnit / 60);
    $(".line-main").css("stroke-dashoffset", $newUnit - $offsetUnit);
    $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
  });
 
});






// function lineTwo(){
	
//   var $dashOffset = $(".line-main2").css("stroke-dashoffset");

//   $(window).scroll(function() { 
//     var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 20);
//     console.log($percentageComplete);
//     var $newUnit = parseInt($dashOffset, 10);
//     var $offsetUnit = $percentageComplete * ($newUnit / 20);
//     $(".line-main2").css("stroke-dashoffset", $newUnit - $offsetUnit);
//     $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
//   });	
// }

// lineTwo();



let ticking = false;
let last_known_scroll_position = 0;
let updatePath = false;

const element = document.querySelector('svg');
const path = element.querySelector('#Path_15');
const path1 = element.querySelector('#Path_16');
let totalLength = 0;

initPath(path)

function initPath(path){
   totalLength = path.getTotalLength();
   path.style.strokeDasharray = `${totalLength}`;
   path.style.strokeDashoffset = totalLength;
}




function handleEntries(entries) {
  console.log(entries)
   entries.forEach(entry => {
    console.log(entry)
    if(entry.isIntersecting) {
      console.log(entry.target)
    }
    
  })
}

let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry);
      updatePath = true;
		} else {
      updatePath = false;
    }
		});
	}, {rootMargin: "0px 0px 0px 0px"});


  observer.observe(element);

function doSomething(scroll_pos) {
  if(!updatePath) {
    return;
  }
  window.requestAnimationFrame(()=>{
    const center = window.innerHeight / 2;
    const boundaries = path.getBoundingClientRect();
    const top = boundaries.top;
    const height = boundaries.height;
    const percentage = (center - top ) / height;
    const drawLength = percentage > 0 ? totalLength * percentage : 0;
    path.style.strokeDashoffset = drawLength < totalLength ? totalLength - drawLength : 0;
 
  })

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});







// function lineOne(){
//   $(window).scroll(function() { 
  
      
//       var windowHeight = window.innerHeight; 
//       var pathHeight = document.getElementById("Path_8").getBBox(); 
//       var scrolledheight =  $percentageComplete;
      
//       var $dashOffset = $(".line-main").css("stroke-dashoffset");

//       $(window).scroll(function() { 
//         var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 120);
//         console.log($percentageComplete);
//         var $newUnit = parseInt($dashOffset, 10);
//         var $offsetUnit = $percentageComplete * ($newUnit / 60);
//         $(".line-main").css("stroke-dashoffset", $newUnit - $offsetUnit);
//         $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
//       });
     

      
//       if(scrolledheight >= pathHeight){
//       	lineTwo();
//       }
//   });
// }

// lineOne();




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