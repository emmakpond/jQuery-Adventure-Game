$(document).ready(function(){
    $('#BtnStartPage').click(function(){
        $("#StartPage").addClass('Hidden');
        $("#Home").removeClass('Hidden');
    });
    $('#Btn1a').click(function(){
        $("#Home").addClass('Hidden');
        $("#Lunch").removeClass('Hidden');
        $("body").css("background-image", "url('bhs.jpg')")
        $("body").css("background-size", "cover")
    });
    $('#Btn1b').click(function(){
        $("#Home").addClass('Hidden');
        $("#NotBHS").removeClass('Hidden');
        $("body").css("background-image", "url('shattuck.jpg')")
    });
    $('#Btn2a2, #Btn2a3, #Btn2a4, #Btn2a7').click(function(){
        $("#PartLunch").addClass('Hidden');
        $("#PartLunch2").removeClass('Hidden');
    });
    $('#Btn2a1, #Btn2a6').click(function(){
        $("#Lunch").addClass('Hidden');
        $("#PartSandwich1").removeClass('Hidden');
        $("body").css("background-image", "url('sandwich.png')");
    });
    $('#Btn2a2').click(function(){
        $("body").css("background-image", "url('burgerm.jpg')");
    });
    $('#Btn2a3').click(function(){
        $("body").css("background-image", "url('clem.jpg')");
    });
    $('#Btn2a4').click(function(){
        $("body").css("background-image", "url('arinell1.jpg')");
    });
    $('#Btn3a1').click(function(){
        $("#Lunch2").addClass('Hidden');
        $("#Line-Long").removeClass('Hidden');
    });
    $('#Btn3a2').click(function(){
        $("#Lunch2").addClass('Hidden');
        $("Lunch-Over").removeClass('Hidden');
    });
    $('#Btn4a1').click(function(){
        $("#Part4a2").addClass('Hidden');
        $("#Part5a1").removeClass('Hidden');
    });
    $('#Btn2b1').click(function(){
        $("#NotBHS").addClass('Hidden');
        $("#Dimension").removeClass('Hidden');
        $("body").css("background-image", "none");
    });
    $('#Btn2b2').click(function(){
        $("#NotBHS").addClass('Hidden');
        $("#White-House1").removeClass('Hidden');
        $("body").css("background-image", "none");
    });
    $('#Btn3b1').click(function(){
        $("#Part3b1").addClass('Hidden');
        $("#Part4b1").removeClass('Hidden');
    });
    $('#Btn4b1').click(function(){
        $("#Dimension").addClass('Hidden');
        $("#Game-Snake").removeClass('Hidden');
    });
    $('#Btn4b2').click(function(){
        $("#Part4b").addClass('Hidden');
        $("#Part4b2").removeClass('Hidden');
    });
    $('#playagain').click(function(){
        location.reload();
    })
});
