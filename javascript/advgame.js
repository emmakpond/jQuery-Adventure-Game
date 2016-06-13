$(document).ready(function(){
    var body=$("body");
    $('#Btn1a').click(function(){
        $("#Home").fadeOut();
        $("#Lunch").delay(500).fadeIn();
        $(body).css("background-image", "url('image/bhs.jpg')");
        $(body).css("background-size", "cover");
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
    $('#Btn2a5').click(function(){
        $(body).css("background-image", "none");
    });
    $('#Btn3a1').click(function(){
        $("#Lunch2").fadeOut();
        $("#Line-Long").delay(500).fadeIn();
        $(body).css("background-image", "url('image/death.png')");
        $(body).css("background-size", "contain");
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
        $(body).css("background-image", "url('image/whinside.jpg')");
        $(body).css("background-size", "1500px");
    });
    $("#talkitout").click(function(){
        $("#meetthepres").fadeOut();
        $("#talk").delay(500).fadeIn();
        $(body).css("background-image", "url('image/security.jpg')");
        (body).css("background-size", "1500px");
    });
    $("#ducks").click(function(){
        $("#whitehouse").fadeOut();
        $("#feedducks").delay(500).fadeIn();
        $(body).css("background-image", "url('image/ducks.JPG')");
    });
    $("#gohome, #gohome1, #gohome2").click(function(){
        $("#whitehouse").fadeOut();
        $("#believe").fadeOut();
        $("#feedducks").fadeOut();
        $("#athome").delay(500).fadeIn();
        $(body).css("background-image", "url('image/oak.jpg')");
        $(body).css("background-size", "1500px")
    });
    $("#backtowh").click(function(){
        $("#feedducks").fadeOut();
        $("#whitehouse").delay(500).fadeIn();
        $(body).css("background-image", "url('image/whitehouse.jpg')");
    });
    $("#leftwh").click(function(){
        $("#whenurun").fadeOut();
        $("#security").delay(500).fadeIn();
        $(body).css("background-image", "url('image/security.jpg')");
    });
    $("#rightwh").click(function(){
        $("#whenurun").fadeOut();
        $("#madeitout").delay(500).fadeIn();
        $(body).css("background-image", "url('image/whitehouse.jpg')")
    });
    $("#explain").click(function(){
        $("#security").fadeOut();
        $("#talk").delay(500).fadeIn();
        $(body).css("background-image", "url('image/security.jpg')");
    });
    $("#lie").click(function(){
        $("#talk").fadeOut();
        $("#lies").delay(500).fadeIn();
    });
    $("#truth").click(function(){
        $("#talk").fadeOut();
        $("#telltruth").delay(500).fadeIn();
    });
    $("#findout").click(function(){
        $("#lies").fadeOut();
        $("#believe").delay(500).fadeIn();
        $(body).css("background-image", "url('image/whitehouse.jpg')");
    });
    $('#playagain').click(function(){
        location.reload();
    });
    $("#backtobhs").click(function(){
        location.reload();
    });
    $("#jail").click(function(){
        $("#tellthetruth").fadeOut();
        $("#jaill").delay(500).fadeIn();
    });
    $("button").hover(function(){
        $(this).addClass("hover");},
        function(){$(this).removeClass("hover");}
    );
});
