//food list and function for sandwich scramble//
var foods=['Penne Pasta', 'Parmesan Cheese', 'Anchovies', 'Kale', 'Cilantro', 'Bread', 'Cod', 'Turkey', 'Sliced Chicken', 'Apple Slices', 'Mustard', 'Mayonnaise', 'Ketchup', 'Chocolate', 'Shrimp', 'Hot Sauce', 'Burger', 'Cheddar Cheese', 'Pine Nuts', 'Sesame Seeds', 'Cashews', 'Tuna']
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};
//start adventure game js//
$(document).ready(function(){
    var body=$("body");
    $('#BtnStartPage').click(function(){
        $("#StartPage").fadeOut();
        $("#Home").delay(500).fadeIn();
    });
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
    $('#Btn4b1').click(function(){
        $("#Dimension").fadeOut();
        $("#Game-Snake").delay(500).fadeIn();
        $("#Dimension").addClass('Hidden');
        $("#Game-Snake").removeClass('Hidden');
        $(body).css("background-image", "none");
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

    //sandwich scramble js//
    var indexes= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    var chosen=[];
    for (var i=0; i<5; i++){
        chosen[i]=indexes[Math.floor((Math.random()*indexes.length))];
        indexes.splice(indexes.indexOf(chosen[i]),1);
    }
    var firstingredient=foods[chosen[0]];
    var secondingredient=foods[chosen[1]];
    var thirdingredient=foods[chosen[2]];
    var fourthingredient=foods[chosen[3]];
    var fifthingredient=foods[chosen[4]];
    $("#firstitem").text(firstingredient);
    $("#seconditem").text(secondingredient);
    $("#thirditem").text(thirdingredient);
    $("#fourthitem").text(fourthingredient);
    $("#fifthitem").text(fifthingredient);

    for (var e=1;e<6;e++){
        var indexeswrong=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        indexeswrong.splice(chosen[e-1], 1);
        indexeswrong.shuffle();

        for(var v=1;v<5;v++) {

            $("#wrong" + e.toString() + v.toString()).text(foods[indexeswrong[v]]);

        }
    }
    var firstright=$("#firstright");
    var secondright=$("#secondright");
    var thirdright=$("#thirdright");
    var fourthright=$("#fourthright");
    var win=$("#win");
    $(firstright).text(firstingredient);
    $(secondright).text(secondingredient);
    $(thirdright).text(thirdingredient);
    $(fourthright).text(fourthingredient);
    $(win).text(fifthingredient);

    $('#start').click(function(){
        $(".startmessage").fadeOut();
        $(".order").delay(500).fadeIn();
        $(body).css("background-size", "contain")
        $(body).css("background-image", "url('menu.jpg')");
    });
    $('#readyss').click(function(){
        $(".order").fadeOut();
        $(".firstingredient").delay(500).fadeIn();
        $(body).css("background-image", "url('plate.jpg')");
        $(body).css("background-size", "cover")
    });
    $(firstright).click(function(){
        $(".firstingredient").fadeOut();
        $(".secondingredient").delay(500).fadeIn();
    });
    $('.wrong1').click(function(){
        $(".firstingredient").fadeOut();
        $(".wrongmessage").delay(500).fadeIn();
    });
    $('.wrong2').click(function(){
        $(".secondingredient").fadeOut();
        $(".wrongmessage").delay(500).fadeIn();
    });
    $('.wrong3').click(function() {
        $(".thirdingredient").fadeOut();
        $(".wrongmessage").delay(500).fadeIn();
    });
    $('.wrong4').click(function() {
        $(".fourthingredient").fadeOut();
        $(".wrongmessage").delay(500).fadeIn();
    });
    $('.wrong5').click(function() {
        $(".fifthingredient").fadeOut();
        $(".wrongmessage").delay(500).fadeIn();
    });
    $('.wrong').click(function(){
        $(body).css("background-image", "url('face-palm.jpg')");
        $(body).css("background-size", "1300px")
    });
    $(secondright).click(function() {
        $(".secondingredient").fadeOut();
        $(".thirdingredient").delay(500).fadeIn();
    });
    $(thirdright).click(function() {
        $(".thirdingredient").fadeOut();
        $(".fourthingredient").delay(500).fadeIn();
    });
    $(fourthright).click(function() {
        $(".fourthingredient").fadeOut();
        $(".fifthingredient").delay(500).fadeIn();
    });
    $(win).click(function() {
        $(".fifthingredient").fadeOut();
        $(".win").delay(500).fadeIn();
        $("body").css("background-image", "url('fw.jpg')")
    });
    $('.sameorder').click(function() {
        $(".wrongmessage").fadeOut();
        $(".startmessage").delay(500).fadeIn();
        $("body").css("background-image", "url('restaurant-carousel-1.jpg')")
    });
    $('.neworder').click(function(){
        location.reload();
    })
});
