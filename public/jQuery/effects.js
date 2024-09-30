$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar-header");
        $nav.toggleClass("scrolling", $(this).scrollTop() > $nav.height());
    });
});