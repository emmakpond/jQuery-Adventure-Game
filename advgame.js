$(document).ready(function(){

});
//start adventure game js//
$(document).ready(function(){
    var body=$("body");
    $('#Btn1a').click(function(){
        $("#Home").fadeOut();
        $("#Lunch").delay(500).fadeIn();
        $(body).css("background-image", "url('bhs.jpg')");
        $(body).css("background-size", "cover")
    });
    $('#Btn1b').click(function(){
        $("#Home").fadeOut();
        $("#NotBHS").delay(500).fadeIn();
        $(body).css("background-image", "url('shattuck2.jpg')");
        $(body).css("background-size", "cover")
    });
    $('#Btn2a2, #Btn2a3, #Btn2a4, #Btn2a7').click(function(){
        $("#Lunch").fadeOut();
        $("#Lunch2").delay(500).fadeIn();
    });
    $('#Btn2a1, #Btn2a6').click(function(){
        $("#Lunch").fadeOut();
        $("#Sandwich1").delay(500).fadeIn();
        $(body).css("background-image", "url('sandwich.png')");
    });
    $('#Btn2a2').click(function(){
        $(body).css("background-image", "url('burgerm.jpg')");
    });
    $('#Btn2a3').click(function(){
        $(body).css("background-image", "url('clem.jpg')");
    });
    $('#Btn2a4').click(function(){
        $(body).css("background-image", "url('arinell1.jpg')");
    });
    $('#Btn3a1').click(function(){
        $("#Lunch2").fadeOut();
        $("#Line-Long").delay(500).fadeIn();
    });
    $('#Btn3a2').click(function(){
        $("#Lunch2").fadeOut();
        $("#Lunch-Over").delay(500).fadeIn();
    });
    $('#Btn4a1').click(function(){
        $("#Part4a2").fadeOut();
        $("#Part5a1").delay(500).fadeIn();
    });
    $('#Btn2b1').click(function(){
        $("#NotBHS").fadeOut();
        $("#Dimension").delay(500).fadeIn();
        $(body).css("background-image", "url('dimension.jpg')");
    });
    $('#Btn2b2').click(function(){
        $("#NotBHS").fadeOut();
        $("#White-House1").delay(500).fadeIn();
        $(body).css("background-image", "url('whitehouse.jpg')");
    });
    $('#Btn3b1').click(function(){
        $("#Part3b1").fadeOut();
        $("#Part4b1").delay(500).fadeIn();
    });
    $('#Btn4b2').click(function(){
        $("#Part4b").fadeOut();
        $("#Part4b2").delay(500).fadeIn();
    });
    $("#sandwichscramble").click(function(){
        $("#Sandwich1").fadeOut();
        $(".startmessage").delay(500).fadeIn();
        $(body).css("background-image", "url('restaurant-carousel-1.jpg')");
        $(body).css("background-size", "1500px")
    });
    $('#playagain').click(function(){
        location.reload();
    });
});
