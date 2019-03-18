"use strict";

$( document ).ready( function(){
    /*
    $("#HW").click( function(){
        console.log("HW is clicked!");

        console.log( $(this) );

        $( this ).hide();
    });

    $(".epicClass:odd").click( function(){
        console.log("Awesome click!");
    });

    $( "tr:even" ).css( "background-color","red" );

    
    $( "*" ).click(function(){
        console.log( "All element selector" );
    });
    */

    $( "div>span" ).css( "color","red" );
    
    $( "p" ).css( "font-size","24px" );

    $( "div[target='_blank']" ).click(function(){
        console.log("Targt is blank~")
    });

    $( ":button" ).click(function(){
        console.log( "Button is clicked" );
    });

    $( ":input" ).click(function(){
        console.log( "Input is clicked" );
    });

    $( "p:contains(i)" ).css( "color","blue" );

    var titleVar=$( "div" ).attr( "title" );
    console.log( titleVar );
} );

/*
$( function (){
    console.log("I am ready!");
});
*/