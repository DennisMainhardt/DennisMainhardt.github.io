$(document).ready(function () {


    /* Navagation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* ANIMATION ON SCROLL */
    $(".js--wp-1").waypoint(function (direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    $(".js--wp-2").waypoint(function (direction) {
        $(".js--wp-2").addClass("animated fadeInUp");
    }, {
        offset: "50%"
    });

    $(".js--wp-4").waypoint(function (direction) {
        $(".js--wp-4").addClass("animated pulse");
    }, {
        offset: "50%"
    });

});