$(window).on('load', function (){
    $('.loading_effect').show();
    $('main, nav').hide();

    setTimeout(function (){
        $('.page_loader').hide();
        $('.loading_effect').hide();
        $('main, nav').show();
    }, 2000);
});

// ---------------------------------------------- //

$(window).ready(function(){
    $('main').children().removeClass("loading_elem");
});


// -----------------------------------------------------//

$(".navbar").on("click",".nav_card",function(){
    $(this).addClass("active_nav_card").siblings().removeClass("active_nav_card");
})

// ---------------------------------------------------------//