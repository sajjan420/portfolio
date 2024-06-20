$(document).ready(function(){
    $(window).scroll(function(){
        $('.navbar').toggleClass("sticky", $(this).scrollTop() > 20);
        $('.scroll-up-btn').toggleClass("show", $(this).scrollTop() > 500);
    });

    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });

    $('.navbar .menu li a').click(function(){
        var target = $($(this).attr('href'));
        $('html, body').animate({scrollTop: target.offset().top}, 'slow');
        return false;
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing, .typing-2", {
        strings: ["Student", "Developer", "Programmer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
