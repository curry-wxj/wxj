var show = document.getElementsByClassName("rightMenu");
var cb = document.getElementsByClassName("menu-edu");
var wx = document.getElementsByClassName("menu-wx");
var cb_dis = document.getElementsByClassName("edu-main");
var wx_dis = document.getElementsByClassName("edu-wx-img");
var ad = document.getElementsByClassName("ad");
document.documentElement.scrollTop || document.body.scrollTop;  /*��ʾ���Ϸ��ĸ߶�  ������Ϊ�˼�����*/
function getScrollTop()  /*ȡ���ڹ������߶�*/
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}

window.onscroll = function() {  /*onscroll�����¼�*/
    show[0].style.bottom = "30" + "px";
    ad[0].style.display = "none";
    if(getScrollTop()==0){   /*������������*/
        show[0].style.bottom = "-150" + "px";
        ad[0].style.display = "block";
    }
};

cb[0].addEventListener('mouseenter', function(evt) {
    cb_dis[0].style.display = "block";
})

cb[0].addEventListener('mouseleave', function(){
    cb_dis[0].style.display = "none";
})

wx[0].addEventListener('mouseenter', function(evt) {
    wx_dis[0].style.display = "block";
})

wx[0].addEventListener('mouseleave', function(){
    wx_dis[0].style.display = "none";
})