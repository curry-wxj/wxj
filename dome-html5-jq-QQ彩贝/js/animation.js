var ani= document.getElementsByClassName("ani");

ani[0].addEventListener('mouseenter', function (evt) {
    $(".anima").addClass(function(index){   /* index - ���ؼ�����Ԫ�ص� index λ�á�*/
       if(0==index){
           return "anima1";
       }
    });
});
ani[0].addEventListener('mouseleave', function (evt) {
$(".anima").removeClass("anima1");
});

ani[1].addEventListener('mouseenter', function (evt) {
    $(".anima").addClass(function(index){  /*���һ������������ class ���ԡ�*/
        if(1==index){
            return "anima1";
        }
    });
});
ani[1].addEventListener('mouseleave', function (evt) {
    $(".anima").removeClass("anima1");
});

ani[2].addEventListener('mouseenter', function (evt) {
    $(".anima").addClass(function(index){
        if(2==index){
            return "anima1";
        }
    });
});
ani[2].addEventListener('mouseleave', function (evt) {
    $(".anima").removeClass("anima1");
});

ani[3].addEventListener('mouseenter', function (evt) {
    $(".anima").addClass(function(index){
        if(3==index){
            return "anima1";
        }
    });
});
ani[3].addEventListener('mouseleave', function (evt) {
    $(".anima").removeClass("anima1");
});

ani[4].addEventListener('mouseenter', function (evt) {
    $(".anima").addClass(function(index){
        if(4==index){
            return "anima1";
        }
    });
});
ani[4].addEventListener('mouseleave', function (evt) {
    $(".anima").removeClass("anima1");
});

ani[5].addEventListener('mouseenter', function (evt) {
    $(".anima").addClass(function(index){
        if(5==index){
            return "anima1";
        }
    });
});
ani[5].addEventListener('mouseleave', function (evt) {
    $(".anima").removeClass("anima1");
});

