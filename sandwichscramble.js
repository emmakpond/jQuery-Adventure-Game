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
    var body=$("body");
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
        $("#startmessage").fadeOut();
        $("#order").delay(500).fadeIn();
        $(body).css("background-size", "contain")
        $(body).css("background-image", "url('menu.jpg')");
    });
    $('#readyss').click(function(){
        $("#order").fadeOut();
        $("#firstingredient").delay(500).fadeIn();
        $(body).css("background-image", "url('plate.jpg')");
        $(body).css("background-size", "cover")
    });
    $(firstright).click(function(){
        $("#firstingredient").fadeOut();
        $("#secondingredient").delay(500).fadeIn();
    });
    $('.wrong1').click(function(){
        $("#firstingredient").fadeOut();
        $("#wrongmessage").delay(500).fadeIn();
    });
    $('.wrong2').click(function(){
        $("#secondingredient").fadeOut();
        $("#wrongmessage").delay(500).fadeIn();
    });
    $('.wrong3').click(function() {
        $("#thirdingredient").fadeOut();
        $("#wrongmessage").delay(500).fadeIn();
    });
    $('.wrong4').click(function() {
        $("#fourthingredient").fadeOut();
        $("#wrongmessage").delay(500).fadeIn();
    });
    $('.wrong5').click(function() {
        $("#fifthingredient").fadeOut();
        $("#wrongmessage").delay(500).fadeIn();
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
        $("#fourthingredient").fadeOut();
        $("#fifthingredient").delay(500).fadeIn();
    });
    $(win).click(function() {
        $("#fifthingredient").fadeOut();
        $("#uwin").delay(500).fadeIn();
        $("body").css("background-image", "url('fw.jpg')")
    });
    $('.sameorder').click(function() {
        $("#wrongmessage").fadeOut();
        $("#startmessage").delay(500).fadeIn();
        $("body").css("background-image", "url('restaurant-carousel-1.jpg')")
    });
    $('.neworder').click(function(){
        location.reload();
    })
});
