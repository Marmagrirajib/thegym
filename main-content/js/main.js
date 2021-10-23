$(document).ready(function () {

// mixitup plagin  
var mixer=mixitup(".gallery-item");  



// 

$(window).scroll(function(){
  var ourwindow= $(this).scrollTop();
  
 if(ourwindow>400){
   $("body").addClass('fixed');
 }
 else{
  $("body").removeClass('fixed');
 }

});





$(".top").click(function(){
  $("html, body").animate({
      scrollTop:0
  });
});



$(window).scroll(function(){
 var ourwindow= $(this).scrollTop();
 if (ourwindow<400) {
     $(".top").fadeOut();
 }
 else{
   $(".top").fadeIn();
 }



});


$('.main-menu li').click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
})



new WOW().init();


});
alert("Created By Developer Rajib Marmagri");
var loder=document.querySelector(".loder")


function loderfunction(){
 loder.style.display = "none";
}
 










