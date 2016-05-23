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
}
$(document).ready(function(){
    var indexes= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    var firstindex=indexes[Math.floor((Math.random()*indexes.length))];
    indexes.splice(indexes.indexOf(firstindex),1);
    var secondindex=indexes[Math.floor((Math.random()*indexes.length))];
    indexes.splice(indexes.indexOf(secondindex),1);
    var thirdindex=indexes[Math.floor((Math.random()*indexes.length))];
    indexes.splice(indexes.indexOf(thirdindex),1);
    var fourthindex=indexes[Math.floor((Math.random()*indexes.length))];
    indexes.splice(indexes.indexOf(fourthindex),1);
    var fifthindex=indexes[Math.floor((Math.random()*indexes.length))];
    indexes.splice(indexes.indexOf(fifthindex),1);
    var firstingredient=foods[firstindex];
    var secondingredient=foods[secondindex];
    var thirdingredient=foods[thirdindex];
    var fourthingredient=foods[fourthindex];
    var fifthingredient=foods[fifthindex];
    document.getElementById('firstitem').innerHTML=firstingredient;
    document.getElementById('seconditem').innerHTML=secondingredient;
    document.getElementById('thirditem').innerHTML=thirdingredient;
    document.getElementById('fourthitem').innerHTML=fourthingredient;
    document.getElementById('fifthitem').innerHTML=fifthingredient;
    document.getElementById('wrong11').innerHTML=foods[Math.floor((Math.random()*foods.length))];

    var indexeswrong1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    indexeswrong1.splice(firstindex, 1);
    indexeswrong1.shuffle();
//    $("#wrong11").text(foods[indexeswrong1[1]]);
    document.getElementById('wrong11').innerHTML=foods[indexeswrong1[1]];
    document.getElementById('wrong12').innerHTML=foods[indexeswrong1[2]];
    document.getElementById('wrong13').innerHTML=foods[indexeswrong1[3]];
    document.getElementById('wrong14').innerHTML=foods[indexeswrong1[4]];

    var indexeswrong2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    indexeswrong2.splice(secondindex, 1);
    indexeswrong2.shuffle();
    document.getElementById('wrong21').innerHTML=foods[indexeswrong2[1]];
    document.getElementById('wrong22').innerHTML=foods[indexeswrong2[2]];
    document.getElementById('wrong23').innerHTML=foods[indexeswrong2[3]];
    document.getElementById('wrong24').innerHTML=foods[indexeswrong2[4]];

    var indexeswrong3=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    indexeswrong3.splice(thirdindex, 1);
    indexeswrong3.shuffle();
    document.getElementById('wrong31').innerHTML=foods[indexeswrong3[1]];
    document.getElementById('wrong32').innerHTML=foods[indexeswrong3[2]];
    document.getElementById('wrong33').innerHTML=foods[indexeswrong3[3]];
    document.getElementById('wrong34').innerHTML=foods[indexeswrong3[4]];

    var indexeswrong4=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    indexeswrong4.splice(fourthindex, 1);
    indexeswrong4.shuffle();
    document.getElementById('wrong41').innerHTML=foods[indexeswrong4[1]];
    document.getElementById('wrong42').innerHTML=foods[indexeswrong4[2]];
    document.getElementById('wrong43').innerHTML=foods[indexeswrong4[3]];
    document.getElementById('wrong44').innerHTML=foods[indexeswrong4[4]];

    var indexeswrong5=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    indexeswrong5.splice(fifthindex, 1);
    indexeswrong5.shuffle();
    document.getElementById('wrong51').innerHTML=foods[indexeswrong5[1]];
    document.getElementById('wrong52').innerHTML=foods[indexeswrong5[2]];
    document.getElementById('wrong53').innerHTML=foods[indexeswrong5[3]];
    document.getElementById('wrong54').innerHTML=foods[indexeswrong5[4]];

    document.getElementById('firstright').innerHTML=firstingredient
    document.getElementById('secondright').innerHTML=secondingredient
    document.getElementById('thirdright').innerHTML=thirdingredient
    document.getElementById('fourthright').innerHTML=fourthingredient
    document.getElementById('win').innerHTML=fifthingredient
    $('#start').click(function(){
        $(".startmessage").css("display", "none");
        $(".order").css("display", "inline");
        $("body").css("background-image", "url('menu.jpg')")
        $("body").css("background-size", "contain")
    });
    $('#readyss').click(function(){
        $(".order").css("display", "none");
        $(".firstingredient").css("display", "inline");
        $("body").css("background-image", "url('plate.jpg')")
        $("body").css("background-size", "cover")
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
        $("body").css("background-image", "url('face-palm.jpg')")
        $("body").css("background-size", "1300px")
    })
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
        $(".startmessage").css("display", "inline")
        $("body").css("background-image", "url('restaurant-carousel-1.jpg')")
    });
    $('.neworder').click(function(){
        location.reload();
    })
});
