$(document).ready(function(){
    var body=$("body");
    $('#Btn1a').click(function(){
        $("#Home").fadeOut();
        $("#Lunch").delay(500).fadeIn();
        $(body).css("background-image", "url('image/bhs.jpg')");
        $(body).css("background-size", "cover")
    });
    $('#Btn1b').click(function(){
        $("#Home").fadeOut();
        $("#NotBHS").delay(500).fadeIn();
    });
    $('#Btn2a2, #Btn2a3, #Btn2a4, #Btn2a7').click(function(){
        $("#Lunch").fadeOut();
        $("#Lunch2").delay(500).fadeIn();
    });
    $('#Btn2a1, #Btn2a6').click(function(){
        $("#Lunch").fadeOut();
        $("#Sandwich1").delay(500).fadeIn();
        $(body).css("background-image", "url('image/sandwich.png')");
    });
    $('#Btn2a2').click(function(){
        $(body).css("background-image", "url('image/burgerm.jpg')");
    });
    $('#Btn2a3').click(function(){
        $(body).css("background-image", "url('image/clem.jpg')");
    });
    $('#Btn2a4').click(function(){
        $(body).css("background-image", "url('image/arinell1.jpg')");
    });
    $('#Btn3a1').click(function(){
        $("#Lunch2").fadeOut();
        $("#Line-Long").delay(500).fadeIn();
        $(body).css("background-image", "url('image/death.png')")
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
        $(body).css("background-image", "url('image/dimension.jpg')");
    });
    $('#Btn2b2').click(function(){
        $("#NotBHS").fadeOut();
        $("#whitehouse").delay(500).fadeIn();
        $(body).css("background-image", "url('image/whitehouse.jpg')");
    });
    $('#Btn3b1').click(function(){
        $("#Part3b1").fadeOut();
        $("#Part4b1").delay(500).fadeIn();
    });
    $("#sandwichscramble").click(function(){
        $("#Sandwich1").fadeOut();
        $("#startmessage").delay(500).fadeIn();
        $(body).css("background-image", "url('image/restaurant-carousel-1.jpg')");
        $(body).css("background-size", "1500px")
    });
    $("#pres").click(function(){
        $("#whitehouse").fadeOut();
        $("#meetthepres").delay(500).fadeIn();
        $(body).css("background-image", "url('image/obama.jpg')");
        $(body).css("background-size", "cover")
    });
    $("#run").click(function(){
        $("#meetthepres").fadeOut();
        $("#whenurun").delay(500).fadeIn();
        $(body).css("background-image", "url('image/whinside.jpg')")
        $(body).css("background-size", "1500px")
    });
    $("#ducks").click(function(){
        $("#whitehouse").fadeOut();
    });
    $("#gohome, #gohome1").click(function(){
        $("#whitehouse").fadeOut();
        $("#believe").fadeOut();
        $("#athome").delay(500).fadeIn();
        $(body).css("background-image", "url('image/oak.jpg')");
    });
    $("#leftwh").click(function(){
        $("#whenurun").fadeOut();
        $("#security").delay(500).fadeIn();
        $(body).css("background-image", "url('image/security.jpg')")
    });
    $("#rightwh").click(function(){
        $("#whenurun").fadeOut();
    });
    $("#explain").click(function(){
        $("#security").fadeOut();
        $("#talk").delay(500).fadeIn();
    });
    $("#lie").click(function(){
        $("#talk").fadeOut();
        $("#lies").delay(500).fadeIn();
    });
    $("#findout").click(function(){
        $("#lies").fadeOut();
        $("#believe").delay(500).fadeIn();
    });
    $('#playagain').click(function(){
        location.reload();
    });
    $("#backtobhs").click(function(){
        location.reload();
    });
    $("button").hover(function(){
        $(this).addClass("hover");},
        function(){$(this).removeClass("hover");}
    );
});
