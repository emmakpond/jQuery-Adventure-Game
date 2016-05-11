$(document).ready(function(){
    $('#Btn1a').click(function(){
        $(".Part1").css("display", "none");
        $(".Part2a").css("display", "inline")
    });
    $('#Btn1b').click(function(){
        $(".Part1").css("display", "none");
        $(".Part2b").css("display", "inline")
    });
    $('#Btn2a1, #Btn2a2, #Btn2a3, #Btn2a4, #Btn2a5, #Btn2a6, #Btn2a7').click(function(){
        $(".Part2a").css("display", "none");
        $(".Part3a").css("display", "inline");
    });
    $('#Btn3a1').click(function(){
        $(".Part3a").css("display", "none");
        $(".Part4a1").css("display", "inline");
    });
    $('#Btn3a2').click(function(){
        $(".Part3a").css("display", "none");
        $(".Part4a2").css("display", "inline");
    });
    $('#Btn4a1').click(function(){
        $(".Part4a2").css("display", "none");
        $(".Part5a1").css("display", "inline");
    });
    $('#Btn2b1').click(function(){
        $(".Part2b").css("display", "none");
        $(".Part3b1").css("display", "inline");
    });
    $('#Btn3b1').click(function(){
        $(".Part3b1").css("display", "none");
        $(".Part4b1").css("display", "inline");
    });
    $('#Btn4b').click(function(){
        $(".Part4b1").css("display", "none");
        $(".Part4b2").css("display", "inline");
    });
    $('#Btn4b2').click(function(){
        $(".Part4b2").css("display", "none");
        $(".sandwichscramble").css("display", "inline");
    });
});
