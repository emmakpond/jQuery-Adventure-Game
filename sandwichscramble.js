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
    document.getElementById('firstitem').innerHTML=firstingredient;
    document.getElementById('seconditem').innerHTML=secondingredient;
    document.getElementById('thirditem').innerHTML=thirdingredient;
    document.getElementById('fourthitem').innerHTML=fourthingredient;
    document.getElementById('fifthitem').innerHTML=fifthingredient;

    for (var e=1;e<6;e++){
        var indexeswrong=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        indexeswrong.splice(chosen[e-1], 1);
        indexeswrong.shuffle();

        for(var v=1;v<5;v++) {

            $("#wrong" + e.toString() + v.toString()).text(foods[indexeswrong[v]]);

        }
    }
    document.getElementById('firstright').innerHTML=firstingredient;
    document.getElementById('secondright').innerHTML=secondingredient;
    document.getElementById('thirdright').innerHTML=thirdingredient;
    document.getElementById('fourthright').innerHTML=fourthingredient;
    document.getElementById('win').innerHTML=fifthingredient;


    $('#start').click(function(){
        $(".startmessage").css("display", "none");
        $(".order").css("display", "inline");
        $(body).css("background-image", "url('menu.jpg')");
        $(body).css("background-size", "contain")
    });
    $('#readyss').click(function(){
        $(".order").css("display", "none");
        $(".firstingredient").css("display", "inline");
        $(body).css("background-image", "url('plate.jpg')");
        $(body).css("background-size", "cover")
    });
    $('#firstright').click(function(){
        $(".firstingredient").css("display", "none");
        $(".secondingredient").css("display", "inline");
    });
    $('.wrong1').click(function(){
        $(".firstingredient").css("display", "none");
        $("#wrong").css("display", "inline");
    });
    $('.wrong2').click(function(){
        $(".secondingredient").css("display", "none");
        $("#wrong").css("display", "inline");
    });
    $('.wrong3').click(function() {
        $(".thirdingredient").css("display", "none");
        $("#wrong").css("display", "inline");
    });
    $('.wrong4').click(function() {
        $(".fourthingredient").css("display", "none");
        $("#wrong").css("display", "inline");
    });
    $('.wrong5').click(function() {
        $(".fifthingredient").css("display", "none");
        $("#wrong").css("display", "inline");
    });
    $('.wrong').click(function(){
        $(body).css("background-image", "url('face-palm.jpg')");
        $(body).css("background-size", "1300px")
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
        $("body").css("background-image", "url('fw.jpg')")
    });
    $('.sameorder').click(function() {
        $("#wrong").css("display", "none");
        $(".win").css("display", "none");
        $(".startmessage").css("display", "inline");
        $("body").css("background-image", "url('restaurant-carousel-1.jpg')")
    });
    $('.neworder').click(function(){
        location.reload();
    })
});
