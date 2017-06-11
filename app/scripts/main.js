'use strict';

var scrollValue = 0;

$( document ).ready( function(){
    $('body').on( 'click', '.main-border.clickable', function() {
        $(this).addClass( 'active' );
        $(this).removeClass( 'clickable' );

        setTimeout( function() {
            $('.content-wrapper').fadeIn();
            $('body').mousewheel(function(event) {
                scrollValue += event.deltaY;
                if( scrollValue < 0 ) scrollValue = 0;
                console.log( scrollValue );

                // update bg positions
                $('.left, .right').css('backgroundPosition', '-' + scrollValue * 0.2 + 'px 0px');
            });
        }, 1000 ); // 1s CSS transition time
    } );

} );

$(window).on('load', function() {
    setTimeout( function() {
        $('.main-border .spinner').fadeOut();
        $('.main-border').addClass('clickable');
    }, 1000 );
} );

