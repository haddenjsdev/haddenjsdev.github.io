(function($) {
    "use strict"; // strict mode

    // Smooth scrolling - jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 54)
                    }, 1000, "easeInOutExpo");
                    return false;
            }
        }
    });

    // Scroll = Activate scrollspy to add active class to navbar items 
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Link Click = Close responsive menu 
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Page Scroll = Collapse the navbar 
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict




//var frameSrc = "/login";

// $('#openBtn').click(function(){
//    $('#myModal').on('show', function () {

//        $('iframe').attr("src",frameSrc);
      
//	});
//    $('#myModal').modal({show:true})
//});
