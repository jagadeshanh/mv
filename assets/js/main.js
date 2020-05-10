
$('#myCarousel').carousel({
    interval: false
});

  $('.dropdown-submenu > a.dropdown-item').hover(function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });

  $('.dropdown-submenu ul.dropdown-menu').hover(function(e){
    $(this).toggle();
    e.stopPropagation();
    e.preventDefault();
  });

$("#seo_link").click(function(){
  window.location.href = 'seo.php';
})
$("#sem_link").click(function(){
  window.location.href = 'sem.php';
})
$("#smm_link").click(function(){
  window.location.href = 'smm.php';
})
$("#email_markt").click(function(){
  window.location.href = 'email_marketing.php';
})
$("#digital_link").click(function(){
  window.location.href = 'digital.php';
})

$("#erp_link").click(function(){
  window.location.href = 'ERP.php';
})
$("#erpaccount_link").click(function(){
  window.location.href = 'account_management.php';
})
$("#erphr_link").click(function(){
  window.location.href = 'hr_management.php';
})
$("#erpproject_link").click(function(){
  window.location.href = 'project_management.php';
})
$("#erpinventory_link").click(function(){
  window.location.href = 'inventory_management.php';
})


//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function(event){

    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});


$("#myCarousel1").on("touchstart", function(event){

    var yClick = event.originalEvent.touches[0].pageY;
    $(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});


//-------- navbar---------
$(document).ready(function(){
  $(window).on('load scroll resize' , function(){
    var scroll = $(window).scrollTop();
    if($(window).width() >= 768){
      if (scroll > 50) {
       $('.fixed-top').css("background" , "#fff");
       $('.fixed-top').css("border-bottom" , "1px solid #ccc");                                       
      }
      else{
       $('.fixed-top').css("background" , "transparent");
       $('.fixed-top').css("border-bottom" , "0px");                 
      }
    }
    else {
      if (scroll > 50) {
       $('.fixed-top').css("background" , "#fff");                                                
      }
      else{
       $('.fixed-top').css("background" , "#fff");                    
      }
    }
  });
	
	 $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:2000,
        autoPlay:true
    });
	
});