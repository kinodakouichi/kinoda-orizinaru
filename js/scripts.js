/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

  //current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
    
    
    /*****************
     BUILD THE SLIDER
    *****************/
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
    
    //next slide    
    $('#next').click(function(){
        slideRight();
    });
    
    //previous slide
    $('#previous').click(function(){
        slideLeft();
    });
    
    
    
    /*************************
     //*> OPTIONAL SETTINGS
    ************************/
    //automatic slider
    var autoSlider = setInterval(slideRight, 3000);
    
    //for each slide 
    $.each($('#slider-wrap ul li'), function() { 
       //set its color
       var c = $(this).attr("data-color");
       $(this).css("background",c);
       
       //create a pagination
       var li = document.createElement('li');
       $('#pagination-wrap ul').append(li);    
    });
    
    //counter
    countSlides();
    
    //pagination
    pagination();
    
    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#slider-wrap').hover(
      function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
      function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
    );
    
    

});//DOCUMENT READY
    


/***********
 SLIDE LEFT
************/
function slideLeft(){
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));    
    
    //*> optional
    countSlides();
    pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
    
    //*> optional 
    countSlides();
    pagination();
}



    
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
    $('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
       
  