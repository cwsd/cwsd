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
        $('html,body').animate({scrollTop: $("#videoHomepage").offset().top},'slow');
    });

    $('#clickPres').click(function() {
        $('html,body').animate({scrollTop: $("#presH2").offset().top},'slow');
    });


    $('#clickSer').click(function() {
        $('html,body').animate({scrollTop: $("#serh2").offset().top},'slow');
    });

    $('#clickRea').click(function() {
        $('html,body').animate({scrollTop: $("#reah2").offset().top},'slow');
    });

    $('#clickDis').click(function() {
        $('html,body').animate({scrollTop: $("#dish2").offset().top},'slow');
    });

    $('#clickCon').click(function() {
        $('html,body').animate({scrollTop: $("#conh2").offset().top},'slow');
    });

    $('#glyphiconDown2').click(function() {
        $('html,body').animate({scrollTop: $("#conh2").offset().top},'slow');
    });

    $('#SlideH2Text').click(function() {
        $('html,body').animate({scrollTop: $("#presH2").offset().top},'slow');
    });

    $('#glyphiconUp').click(function() {
        $('html,body').animate({scrollTop: $("#videoHomepage").offset().top},'slow');
    });








});

