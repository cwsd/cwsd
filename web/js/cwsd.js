/**
 * Created by root on 12/06/18.
 */
$(document).ready(function(){


    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });

    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });

    $('#clickAcc').click(function() {
        $('html,body').animate({scrollTop: $("#videoHomepage").offset().top}, 'slow'      );
    });

    $('#clickPres').click(function() {
        $('html,body').animate({scrollTop: $("#presH2").offset().top}, 'slow'      );
    });


    $('#clickSer').click(function() {
        $('html,body').animate({scrollTop: $("#serh2").offset().top}, 'slow'      );
    });






});

