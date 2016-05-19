/**
 * Created by h205p3 on 5/13/16.
 */

function fillall() {
    for (var i = 0; i < 24; i++) {
        document.lightsform.elements[i].checked=1;
    }
}
function clearall() {
    for (var i = 0; i < 24; i++) {
        document.lightsform.elements[i].checked=0;
    }
}
function level1() {
    clearall();
    document.lightsform.elements[10].checked=1;
    document.lightsform.elements[12].checked=1;
    document.lightsform.elements[14].checked=1;
}
function level2() {
    clearall();
    document.lightsform.elements[12].checked=1;
    document.lightsform.elements[16].checked=1;
    document.lightsform.elements[17].checked=1;
    document.lightsform.elements[18].checked=1;
    document.lightsform.elements[20].checked=1;
    document.lightsform.elements[21].checked=1;
    document.lightsform.elements[22].checked=1;
    document.lightsform.elements[23].checked=1;
    document.lightsform.elements[24].checked=1;
}
function level3() {
    fillall();
    document.lightsform.elements[4].checked=0;
    document.lightsform.elements[6].checked=0;
    document.lightsform.elements[7].checked=0;
    document.lightsform.elements[8].checked=0;
    document.lightsform.elements[11].checked=0;
    document.lightsform.elements[12].checked=0;
    document.lightsform.elements[13].checked=0;
    document.lightsform.elements[16].checked=0;
    document.lightsform.elements[17].checked=0;
    document.lightsform.elements[18].checked=0;
    document.lightsform.elements[24].checked=0;
}
function level4() {
    clearall();
    document.lightsform.elements[2].checked=1;
    document.lightsform.elements[6].checked=1;
    document.lightsform.elements[8].checked=1;
    document.lightsform.elements[10].checked=1;
    document.lightsform.elements[12].checked=1;
    document.lightsform.elements[14].checked=1;
    document.lightsform.elements[16].checked=1;
    document.lightsform.elements[18].checked=1;
    document.lightsform.elements[22].checked=1;
}
function level5() {
    clearall();
    document.lightsform.elements[11].checked=1;
    document.lightsform.elements[16].checked=1;
    document.lightsform.elements[21].checked=1;
}
function checkall() {
    var win=1;
    for (var i = 0; i < 24; i++) {
        if (document.lightsform.elements[i].checked==1) {
            win=0;
        }
    }
    if (win==1){
        alert("\nYou Won!!\n")
    }
}
function check(v){
    q=5;
    w=1;
    row=parseInt(v/q)+w;
    if (isNaN(row)) {
        row=1;
    }
    intv = parseInt(v);
    a=eval(intv+q);
    b=eval(intv-q);
    c=eval(intv+w);
    d=eval(intv-w);
    if (a<0 || a>24){
        a=25;
    }
    if (b<0 || b>24){
        b=25;
    }
    if (c<0 || c>24){
        c=25;
    }
    if (d<0 || d>24){
        d=25;
    }
    kc = (parseInt(c/q)+w)
    kd = (parseInt(d/q)+w)
    kv = row;
    if (kc != kv){
        c=25;
    }
    if (kd != kv){
        d=25;
    }
    if (v==5) d=25; // correction for strange bug

    if (document.lightsform.elements[a].checked == 1) {
        document.lightsform.elements[a].checked=0;
    }
    else {
        document.lightsform.elements[a].checked=1;
    }
    if (document.lightsform.elements[b].checked == 1) {
        document.lightsform.elements[b].checked=0;
    }
    else {
        document.lightsform.elements[b].checked=1;
    }
    if (document.lightsform.elements[c].checked == 1) {
        document.lightsform.elements[c].checked=0;
    }
    else {
        document.lightsform.elements[c].checked=1;
    }
    if (document.lightsform.elements[d].checked == 1) {
        document.lightsform.elements[d].checked=0;
    }
    else {
        document.lightsform.elements[d].checked=1;
    }
    checkall();
}
