$(document).ready(function(){
    $('#start').click(function(){
        $(".startmessage").css("display", "none");
        $(".order").css("display", "inline");
    });
    $('#readyss').click(function(){
        $(".order").css("display", "none");
        $(".firstingredient").css("display", "inline");
    });
    $('#firstright').click(function(){
        $(".firstingredient").css("display", "none");
        $(".secondingredient").css("display", "inline");
    });
    $('.wrong1').click(function(){
        $(".firstingredient").css("display", "none");
        $(".wrong").css("display", "inline");
    });
    $('.wrong2').click(function(){
        $(".secondingredient").css("display", "none");
        $(".wrong").css("display", "inline");
    });
    $('.wrong3').click(function() {
        $(".thirdingredient").css("display", "none");
        $(".wrong").css("display", "inline");
    });
    $('.wrong4').click(function() {
        $(".fourthingredient").css("display", "none");
        $(".wrong").css("display", "inline");
    });
    $('.wrong5').click(function() {
        $(".fifthingredient").css("display", "none");
        $(".wrong").css("display", "inline");
    });
    $('#secondright').click(function() {
        $(".secondingredient").css("display", "none");
        $(".thirdingredient").css("display", "inline");
    });
    $('#thirdright').click(function() {
        $(".thirdingredient").css("display", "none");
        $(".fourthingredient").css("display", "inline");
    });
    $('#fourthright').click(function() {
        $(".fourthingredient").css("display", "none");
        $(".fifthingredient").css("display", "inline");
    });
    $('#win').click(function() {
        $(".fifthingredient").css("display", "none");
        $(".win").css("display", "inline");
    });
    $('.tryagain').click(function() {
        $(".wrong").css("display", "none");
        $(".win").css("display", "none");
        $("startmessage").css("display", "inline")
    });
});
