$(document).ready(function () {

    $(window).click(function () {
        //$("[data-toggle-links].open").removeClass("open");
        console.log("click able for every thing in page");
    });

    // For toggle any menu depends on class [open]
    $("[data-toggle-links]").click(function () {
        if ($(this).hasClass("open")) {
            // This part for close menu
            $(this).removeClass("open");
            $($(this).data("toggle-links")).removeClass("open");
        } else {
            // This part for open menu
            $(this).addClass("open");
            $($(this).data("toggle-links")).addClass("open");          
        }
    });

    // Resize height for landing page
    $(".window-height").innerHeight($(window).innerHeight() - $(".header .nav-tip").innerHeight() - $(".header .nav-top").innerHeight());
    $(window).resize(function () {
        $(".landing-page").innerHeight($(window).innerHeight() - $(".header .nav-tip").innerHeight() - $(".header .nav-top").innerHeight());
    });


});