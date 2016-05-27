//list and function for sandwich scramble//
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
$(document).ready(function(){

});
//start adventure game js//
$(document).ready(function(){
    var body=$("body");
    $('#BtnStartPage').click(function(){
        $("#StartPage").addClass('Hidden');
        $("#Home").removeClass('Hidden');
    });
    $('#Btn1a').click(function(){
        $("#Home").addClass('Hidden');
        $("#Lunch").removeClass('Hidden');
        $(body).css("background-image", "url('bhs.jpg')");
        $(body).css("background-size", "contain")
    });
    $('#Btn1b').click(function(){
        $("#Home").addClass('Hidden');
        $("#NotBHS").removeClass('Hidden');
        $(body).css("background-image", "url('shattuck2.jpg')");
        $(body).css("background-size", "cover")
    });
    $('#Btn2a2, #Btn2a3, #Btn2a4, #Btn2a7').click(function(){
        $("#Lunch").addClass('Hidden');
        $("#Lunch2").removeClass('Hidden');
    });
    $('#Btn2a1, #Btn2a6').click(function(){
        $("#Lunch").addClass('Hidden');
        $("#Sandwich1").removeClass('Hidden');
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
        $("#Lunch2").addClass('Hidden');
        $("#Line-Long").removeClass('Hidden');
    });
    $('#Btn3a2').click(function(){
        $("#Lunch2").addClass('Hidden');
        $("#Lunch-Over").removeClass('Hidden');
    });
    $('#Btn4a1').click(function(){
        $("#Part4a2").addClass('Hidden');
        $("#Part5a1").removeClass('Hidden');
    });
    $('#Btn2b1').click(function(){
        $("#NotBHS").addClass('Hidden');
        $("#Dimension").removeClass('Hidden');
        $(body).css("background-image", "url('dimension.jpg')");
    });
    $('#Btn2b2').click(function(){
        $("#NotBHS").addClass('Hidden');
        $("#White-House1").removeClass('Hidden');
        $(body).css("background-image", "none");
    });
    $('#Btn3b1').click(function(){
        $("#Part3b1").addClass('Hidden');
        $("#Part4b1").removeClass('Hidden');
    });
    $('#Btn4b1').click(function(){
        $("#Dimension").addClass('Hidden');
        $("#Game-Snake").removeClass('Hidden');
        $(body).css("background-image", "none");
        $(body).css("background-color", "white");
        $("*").css("padding", "0 0 0 0");
    });

    $('#Btn4b2').click(function(){
        $("#Part4b").addClass('Hidden');
        $("#Part4b2").removeClass('Hidden');
    });
    $("#sandwichscramble").click(function(){
        $("#Sandwich1").addClass("Hidden");
        $(".startmessage").removeClass("Hidden");
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
        $(".startmessage").addClass("Hidden");
        $(".order").removeClass("Hidden");
        $(body).css("background-image", "url('menu.jpg')");
        $(body).css("background-size", "contain")
    });
    $('#readyss').click(function(){
        $(".order").addClass("Hidden");
        $(".firstingredient").removeClass("Hidden");
        $(body).css("background-image", "url('plate.jpg')");
        $(body).css("background-size", "cover")
    });
    $(firstright).click(function(){
        $(".firstingredient").addClass("Hidden");
        $(".secondingredient").removeClass("Hidden");
    });
    $('.wrong1').click(function(){
        $(".firstingredient").addClass("Hidden");
        $(".wrongmessage").removeClass("Hidden");
    });
    $('.wrong2').click(function(){
        $(".secondingredient").addClass("Hidden");
        $(".wrongmessage").css("display", "inline");
    });
    $('.wrong3').click(function() {
        $(".thirdingredient").css("display", "none");
        $(".wrongmessage").css("display", "inline");
    });
    $('.wrong4').click(function() {
        $(".fourthingredient").css("display", "none");
        $(".wrongmessage").css("display", "inline");
    });
    $('.wrong5').click(function() {
        $(".fifthingredient").css("display", "none");
        $(".wrongmessage").css("display", "inline");
    });
    $('.wrong').click(function(){
        $(body).css("background-image", "url('face-palm.jpg')");
        $(body).css("background-size", "1300px")
    });
    $(secondright).click(function() {
        $(".secondingredient").addClass("Hidden");
        $(".thirdingredient").removeClass("Hidden");
    });
    $(thirdright).click(function() {
        $(".thirdingredient").addClass("Hidden");
        $(".fourthingredient").removeClass("Hidden");
    });
    $(fourthright).click(function() {
        $(".fourthingredient").addClass("Hidden");
        $(".fifthingredient").removeClass("Hidden");
    });
    $(win).click(function() {
        $(".fifthingredient").addClass("Hidden");
        $(".win").removeClass("Hidden");
        $("body").css("background-image", "url('fw.jpg')")
    });
    $('.sameorder').click(function() {
        $("#wrong").addCLass("Hidden");
        $(".win").addClass("Hidden");
        $(".startmessage").removeClass("Hidden");
        $("body").css("background-image", "url('restaurant-carousel-1.jpg')")
    });
    $('.neworder').click(function(){
        location.reload();
    })
});
