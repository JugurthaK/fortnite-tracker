$('document').ready(function(){
    var isScrollPos = 0;

    $(window).scroll(function(){
        var iCurScrollPos = $(this).scrollTop();
        
        if(iCurScrollPos != isScrollPos){
            $(".transparent").css('background','linear-gradient(to right, #917dbc 0%, #d280be 50%, #ef84b8 100%)');
            /* $('nav').removeClass('transparent');
            $('nav').addClass('skyline', 200, 'linear'); */
        } else {
            $(".transparent").css('background','transparent');

        }
    })
});