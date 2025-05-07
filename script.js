$(document).ready(function () {
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 70) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    });
});
