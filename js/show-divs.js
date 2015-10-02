$(document).ready(function() {
    var delay = 100; //Time delay between scroll
    var nextScrollTime = Date.now();

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        if(Date.now() < nextScrollTime){
            return;
        }

        nextScrollTime = Date.now() + delay;

        /* Check the location of each desired element */
        $('.hidden').each( function(i){
            
            var top_of_object = $(this).position().top + 150;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            console.log("top_of_object: "+top_of_object+" bottom_of_window: "+bottom_of_window);
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                
                console.log("show me");
            }
        });
    });
});