// Site-wide behavior: keep content below the fixed navbar, set the footer year, enable tooltips.
$(function () {
    function padForNavbar() {
        $('body').css('padding-top', $('#navbar').outerHeight(true));
    }
    padForNavbar();
    $(window).on('resize', padForNavbar);

    $('#footer-year').text(new Date().getFullYear());

    $('[data-toggle="tooltip"]').tooltip();
});
