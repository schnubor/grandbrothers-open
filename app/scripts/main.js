'use strict';
$( document ).ready( function(){
    $('body').on( 'click', '.main-border.clickable', function() {
        $(this).toggleClass( 'active' );
        $(this).removeClass( 'clickable' );

        setTimeout( function() {
            $('.content-wrapper').fadeIn();
        }, 1000 ); // 1s CSS transition time
    } );
} );

$(window).on('load', function() {
    setTimeout( function() {
        $('.main-border .spinner').fadeOut();
        $('.main-border').addClass('clickable');
    }, 1000 );
} );