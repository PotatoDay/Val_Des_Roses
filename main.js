$(document).ready(function(){
    $('.foto-kamer-1').slick({
      dots: false,
      prevArrow: false,
     nextArrow: false,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 2500,
    });
  });


  $(document).ready(function(){
    $('.foto-kamer-2').slick({
      dots: false,
      prevArrow: false,
      nextArrow: false,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 2500,
    });
  });


//smooth scroll

$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top 
    }, 1000 );
  });
  
})




$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

 $("#toggle li a").click(function() {
  $('#overlay').toggleClass('open');
  var element = document.getElementById("toggle");     //Remove Active 
    element.classList.remove("active");                //Remove Active 
 });










 