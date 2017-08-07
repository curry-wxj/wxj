
$(function(){
    var oul=$(".focus .silde"); /*注意两个相同的ul class不一样*/
    var ali=$(".focus .silde li");
    var numLi=$(".focus .silde-page li");
    //获取ul li的宽度
    var aliWidth=$(".focus .silde li").eq(0).width();
    //times
    var times=0;//控制数字样式的计数器
    var times2=0;//控制图片运动距离的计数器
    var timesId;

    numLi.mouseover(function(){
        var index=$(this).index();
        //图片和数字按钮同步
        times=index;
        times2=index;
        $(this).addClass('on').siblings().removeClass();
        oul.animate({"left":-aliWidth*index},666);
    });
    //图片滑动函数
    function setInt(){
        if(times==numLi.size()-1){
            //此处开始实行无缝滚动；
            ali.eq(0).css({
                "position":"relative",
                "left":oul.width()       /* 总2000+width  一个图片666width hidden来隐藏多余的 通过改变定位里的left来滚动  */
            });
            times=0;
        }else{
            times++;
        }
        times2++;
        numLi.eq(times).addClass('on').siblings().removeClass();
        oul.animate({"left":-aliWidth*times2},666,function(){
            if(times==0){
                ali.eq(0).css("position","static");
                oul.css("left",0);
                times2=0;
            }
        });
    }

    timesId=setInterval(setInt,3000);
    //鼠标移动到图片上停止滑动
    $(".focus").mouseover(function(){
        clearInterval(timesId);
    });

    $(".focus").mouseout(function(){
        timesId=setInterval(setInt,1500);
    });
});

/*快速入口*/

