$(document).ready(function(){
    $('#Btn1a').click(function(){
        $("#Part1").addClass('Hidden');
        $("#Part2a").removeClass('Hidden');
    });
    $('#Btn1b').click(function(){
        $("#Part1").addClass('Hidden');
        $("#Part2b").removeClass('Hidden');
    });
    $('#Btn2a2, #Btn2a3, #Btn2a4, #Btn2a5, #Btn2a7').click(function(){
        $("#Part2a").addClass('Hidden');
        $("#Part3a").removeClass('Hidden');
    });
    $('#Btn2a1, #Btn2a6').click(function(){
        $("#Part2a").addClass('Hidden');
        $("#Part3a2").removeClass('Hidden');
    });
    $('#Btn3a1').click(function(){
        $("#Part3a1").addClass('Hidden');
        $("#Part4a1").removeClass('Hidden');
    });
    $('#Btn3a2').click(function(){
        $("#Part3a").addClass('Hidden');
        $("#Part4a2").removeClass('Hidden');
    });
    $('#Btn4a1').click(function(){
        $("#Part4a2").addClass('Hidden');
        $("#Part5a1").removeClass('Hidden');
    });
    $('#Btn2b1').click(function(){
        $("#Part2b").addClass('Hidden');
        $("#Part3b1").removeClass('Hidden');
    });
    $('#Btn3b1').click(function(){
        $("#Part3b1").addClass('Hidden');
        $("#Part4b1").removeClass('Hidden');
    });
    $('#Btn4b1').click(function(){
        $("#Part4b1").addClass('Hidden');
        $("#Part5b1").removeClass('Hidden');
    });
    $('#Btn4b2').click(function(){
        $("#Part4b").addClass('Hidden');
        $("#Part4b2").removeClass(Hidden);
    });
});
