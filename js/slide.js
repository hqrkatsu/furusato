$(function(){
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        centerPadding: '100px',
        focusOnSelect: true
    });

    $(".historySlider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        arrows: true,
        adaptiveHeight: true,
        infinite:true,
        responsive: [{
            breakpoint: 555,
                 settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
            }
       }]
    });
});