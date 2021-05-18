$(function(){
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrow: false,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true
    });

    $(".historySlider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
    });
});