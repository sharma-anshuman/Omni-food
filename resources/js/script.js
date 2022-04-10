$(document).ready(function() {
    
    /*for the sticky navigation*/
   $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }  else {
    $('nav').removeClass('sticky');
    }
    }, {
  offset: '60px'
});
    
 /*Scroll on buttons*/

$('.js--scroll-to-plans').click(function () {
    $('html , body').animate({scrollTop: $('.js--section-plans').offset().top} , 1000);   
});

$('.js--scroll-to-start').click(function () {
    $('html , body').animate({scrollTop: $('.js--section-features').offset().top} , 1000);   
});

 /*Navigation scroll*/
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
}); 
}); 


/*Animations on scroll */
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
}, {
    offset: '50%'
});

                            /*mobile nav*/

               
    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){$('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-ios-menu') && clicked == 'logo-black')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-md-close');
        }
    });


            nav.css("display", "block");
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-menu');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-md-close');
        }

    });