/**
 * Created by wxj1 on 2017/3/4.
 */


var search = document.getElementsByClassName("login-dis");
var box = document.getElementsByClassName("login-box");
box[0].addEventListener('mouseenter', function(evt) {
    search[0].style.display = "block";
})

box[0].addEventListener('mouseleave', function(){
    search[0].style.display = "none";
})