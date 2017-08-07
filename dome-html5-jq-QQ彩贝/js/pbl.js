/*要utf-8格式才可以 读入中文*/
//https://www.ancii.com/qianduan/30608.html
//jquery实现简单瀑布流布局
/*
数据哪里来？

这里用的是wookmark的数据接口。 http://www.wookmark.com/api/json/popular?page=1


    点开url得到是一个json。 信息量很大。怎么分析？ 一般可以看文档。但是手头没有文档的情况下，可以看看链接。返回是什么鬼。


function createUrl(num){
    return 'http://www.wookmark.com/api/json/popular?page='+num+'&callback=?';
}

$(function(){
    $.getJSON(createUrl(),function(data){
        console.log(data);
    })
})
*/

PBL('showpic','box');
//模拟数据
var data = [
    [
        {'src':'img/pbl/5.jpg','title':'采用顶级的羊皮材料，更时尚，更有格调！搭配秋冬服饰更有独特的韵味！'},
        {'src':'img/pbl/6.jpg','title':'慢跑鞋无疑是整个2014年的时尚宠儿。除却功能性以及对足部的保护之外，选择一双款型时尚，配色亮眼的慢跑鞋绝对是您对自己时尚之道最好的诠释。乔丹时尚功能休闲慢跑鞋以出色的性能，时尚的造型'},
        {'src':'img/pbl/7.jpg','title':'圣迩尼—让你怦然心动，2014最新潮流性感个性款式，穿出不一样的时尚！'},
        {'src':'img/pbl/8.jpg','title':'潮男时尚T台秀'},
        {'src':'img/pbl/9.jpg','title':'潮流荧光色系'},
        {'src':'img/pbl/10.jpg','title':'新款男士商务几何图案修身夹克'},
        {'src':'img/pbl/11.jpg','title':'精梳棉面料，柔软舒适透气。'},
        {'src':'img/pbl/12.jpg','title':'舒适轻薄款，穿着轻薄，无负担感。修身版型，起到了很好的修身的效果，更加塑型。'},
    ],
    [
        {'src':'img/pbl/13.jpg','title':'丝质柔滑面料 干净舒适。衣襟拼色，时尚有型，金属质地纽扣，完美细节品质。'},
        {'src':'img/pbl/14.jpg','title':'运用时兴的对比拼色元素，中袖设计与弹力袖口的组合既显瘦又端庄，散发都市丽人的知性气质。'},
        {'src':'img/pbl/15.jpg','title':'干练利落的尖领融合复古的做旧蓝色，于撞色对比间营造视觉冲击力，展现鲜明的时尚态度。'},
        {'src':'img/pbl/16.jpg','title':'鲜嫩的鹅黄色圆领配以拉链前襟十分吸引眼球，亲肤丝棉材质舒适贴合肌肤，恰到好处的休闲造型极富亲和力。'},
        {'src':'img/pbl/17.jpg','title':'淡雅桃与经典黑色的撞色拼接，展现大气利落气质。'},
        {'src':'img/pbl/18.jpg','title':'清新利落的白色衬衫小翻领设计，平添一份邻家女孩般清爽干净的气质。'},
        {'src':'img/pbl/19.jpg','title':'简约圆领，凸显优雅大方气质。裙身采用有浮雕质感的花型，更添女性柔美浪漫的古典气质。'},
        {'src':'img/pbl/20.jpg','title':'胸前以沙漏式的剪裁以及颇具设计感的隐形开叉设计，轻松衬出姣美丰满的胸型。'},
    ],
    [
        {'src':'img/pbl/21.jpg','title':'甜美的白色波点，加上薄荷绿的清新映衬，简约中透漏女神气质。上班约会都是不错的选择。'},
        {'src':'img/pbl/22.jpg','title':'宽松的H版型连衣裙，腰部可自由调节，轻松藏起身体小赘肉。'},
        {'src':'img/pbl/23.jpg','title':'新款骷髅印花宽松无袖圆领连衣裙，穿出潮流范儿。'},
        {'src':'img/pbl/24.jpg','title':'天丝牛仔连衣裙，比雪纺更柔软透气，比棉更具光泽。'},
        {'src':'img/pbl/25.jpg','title':'独特的露背设计，展现女性妩媚性感的背部线条。'},
        {'src':'img/pbl/26.jpg','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
        {'src':'img/pbl/27.jpg','title':'上身宽松有型，下身包臀设计，简洁大方的设计，流露出性感修身的好身材，得体大方。'},
        {'src':'img/pbl/28.jpg','title':'主珠为天然红玛瑙佛珠，加以天然蓝绿松顶珠为配珠，绿松石象征着“信赖和信任”，也给远征的人带来吉祥和好运，被誉为成功幸运之石。'},
    ],
    [
        {'src':'img/pbl/29.jpg','title':'采用吸湿速干面料，穿着舒适，圆领设计，简洁大方；图案独有新疆风貌垂钓活动，彰显Discovery Expedition品牌非凡探索的户外精神。'},
        {'src':'img/pbl/30.jpg','title':'使用仿棉感速干面料，加入吸湿速干整理，含有碳素有除臭抗菌的功能。适合徒步、穿越、露营、日常等环境穿着。'},
        {'src':'img/pbl/31.jpg','title':'行走在野外，再不怕清晨露珠或是突如其来的毛毛雨打湿衣服，时刻保持舒爽。'},
        {'src':'img/pbl/32.jpg','title':'平整的领口，匀密的双车线，在这个短袖衬衫解禁的夏天显得精致而精神。'},
        {'src':'img/pbl/33.jpg','title':'撞色拼接，弹力面料，弹力包边下摆，后背均带有3M反光，增加骑行过程的安全性。'},
        {'src':'img/pbl/34.jpg','title':'面料凉爽顺滑，整体设计特别女人味。'},
        {'src':'img/pbl/35.jpg','title':'你可以穿着它去散步，去骑车，去户外，去郊游，晒着太阳而无需担心晒伤。'},
        {'src':'img/pbl/36.jpg','title':'拼色款式设计，透气轻薄的超轻面料，带给您完美舒适的质感，腋下面料冲孔设计，方便排汗与换气，更有利于户外活动穿着。'},
    ],
    [
        {'src':'img/pbl/37.jpg','title':'王者之气尽显无疑，体现男人魅力。'},
        {'src':'img/pbl/38.jpg','title':'胸针采用的优质合金，经过精湛的电镀和抛光处理，呈现出华丽的光泽，手感顺滑不易生锈。长时间使用依旧持久弥新。'},
        {'src':'img/pbl/39.jpg','title':'造型精美，作为点缀出席各种场合。'},
        {'src':'img/pbl/40.jpg','title':'被用于出席颁奖典礼和参与派对的装扮眼镜。'},
        {'src':'img/pbl/41.jpg','title':'性感的大红在春夏季大放异彩，不再那么闪耀而浓重，转而以一种淡淡的姿态唤醒人们的感官视觉。'},
        {'src':'img/pbl/42.jpg','title':'潮流百搭，遮阳、修脸神奇，适合各种场合佩带。'},
        {'src':'img/pbl/43.jpg','title':'最具代表色彩的眼镜，一如既往的为年轻人增光。商务、休闲、驾车、运动，每一个户外场合都是最佳的搭配宠儿'},
        {'src':'img/pbl/44.jpg','title':'用黑色蕾丝做腰带，有很好的收腰效果，合体修身，简洁中透露随性感。'},
    ],
    [
        {'src':'img/pbl/45.jpg','title':'豪放派展现内涵的首选。'},
        {'src':'img/pbl/46.jpg','title':'而立之年，终因一串友人相赠的佛珠心平气和，离苦得乐。'},
        {'src':'img/pbl/47.jpg','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
        {'src':'img/pbl/48.jpg','title':'COACH 蔻驰 女士PVC经典LOGO卡其蓝色手提肩背包'},
        {'src':'img/pbl/49.jpg','title':'2014新品俏皮清新马卡龙拼色色系轻薄大容量长款钱包'},
        {'src':'img/pbl/50.jpg','title':'COACH 女款皮革十字花纹柿红色手提肩背斜挎包'},
        {'src':'img/pbl/51.jpg','title':'每个包包都有其独特的风采，捧在手心里，随意搭配，精致可爱。'},
        {'src':'img/pbl/52.jpg','title':'镜面合成革易于清洁打理，金属后跟时尚潮流，款型简约，适于职场或宴会穿着。'},
    ],
    [
        {'src':'img/pbl/53.jpg','title':'女士精品'},
        {'src':'img/pbl/54.jpg','title':'雀仔飞鸟灵感仿佛来自于法国田园风情的家居用品。艳红、薄荷绿以及暖粉的色彩应用在蓝调针织裙上，热烈之外更具浪漫气息。'},
        {'src':'img/pbl/55.jpg','title':'经典圆领设计，简单大方，宽松袖口，舒适大方。花鸟织锦缎拼接，复古典雅。细腻质地，手感弹滑，光泽柔和均匀，温和亲肤。'},
        {'src':'img/pbl/56.jpg','title':'宽松休闲给人带来自在穿着体验，彰显大方知性的文艺韵味。'},
        {'src':'img/pbl/57.jpg','title':'柔软顺滑，吸湿透气，一如第二层肌肤般，极为适合贴身穿着。'},
        {'src':'img/pbl/58.jpg','title':'至美简约，没有任何多余的装饰，凸显干练气质。'},
        {'src':'img/pbl/59.jpg','title':'永久典型的黑白条纹控，穿出潮男小清新。'},
        {'src':'img/pbl/60.jpg','title':'运动元素是不可替代的“范儿”，摆脱束缚，带着欢快的心情，在街头、户外随心游走。'},
    ],
    [
        {'src':'img/pbl/61.jpg','title':'清甜马卡龙色系，是春夏不可或缺的主打元素。色调鲜活，条纹肌理自然，极具品质感。轻而易举地掠获少女芳心。'},
        {'src':'img/pbl/62.jpg','title':'阿玛尼休闲夏日时尚阿玛尼型男短袖 大经典logo腰带 阳光百搭牛仔裤 过一个轻松阳光夏日'},
        {'src':'img/pbl/63.jpg','title':'拼色连衣裙绝对是今夏的流行款'},
        {'src':'img/pbl/64.jpg','title':'时尚名媛黑色静谧显瘦'},
        {'src':'img/pbl/65.jpg','title':'甜美 休闲 名媛 OL 休闲 经典'},
        {'src':'img/pbl/66.jpg','title':'中微喇收紧腰腹线条的同时，宽阔的小腿裤腿遮掩腿型，重塑小腿线条。'},
        {'src':'img/pbl/67.jpg','title':'职业男人着装导师，让不修边幅SAY GOODBYE。'},
        {'src':'img/pbl/68.jpg','title':'不同色彩的拼接，彰显潮流风尚，无形中增添了几分青春活力。'},
    ]
];

var indexScroll = 0;
var scrollB = true;
//设置滚动加载

/*当用户滚动指定的元素时，会发生 scroll 事件。
scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
scroll() 方法触发 scroll 事件，或规定当发生 scroll 事件时运行的函数。*/
$(window).scroll(function(){
    /**
     * 校验数据请求
     * 布尔值：判断是否滚动条到达最后一个box"元素"
     * true : 向wrap添加模拟数据   false:不进行任何操作
     */
    if(!scrollB) return;
    if(getCheck()){
        scrollB=false;
        setTimeout(function(){
            for(i in data[indexScroll]){
                //创建新的bpx
                var newHtml = $('<div class = "box"><div class="info"><div class="pic"><img src="'+data[indexScroll][i].src+'"/></div><div class="title">'+data[indexScroll][i].title+'</div></div></div>');
                $('#showpic').append(newHtml);
            }
            setTimeout(function(){
                PBL('showpic','box');
                indexScroll++;
                scrollB = true;
                if(indexScroll == data.length){
                    scrollB = false;
                }
            },200);
        },10);
    }
});

/*
 瀑布流主函数
 wrap [str] 外层元素的ID
 box [str] 每一个box的类名
 */

function PBL(wrap,box){
    //1.获取外层以及每个box
    var wrap = document.getElementById(wrap);
    var boxs = getClass(wrap,box);//获取存储box元素的数组
    //2.获取屏幕可现实的列数
    var boxW = boxs[0].offsetWidth;
    var closNum = 4;
    wrap.style.width = boxW*closNum+'px';//为外层赋值宽度
    // 3.循环出所有的box并按照瀑布流排列
    var everyH = [];//定义一个数组存储每一列的高度
    for(var i = 0;i < boxs.length;i++){
        //everyH数组的长度等于列数
        if(i<closNum){
            //将每一列的其实高度存储,(列数-1)之前的box元素的高度赋给相应的每一列
            everyH[i] = boxs[i].offsetHeight;
        }else{
            //小标大于列数的 Box元素，获得最小列的高度，添加到该列，并将该列的高度改变
            var minH = Math.min.apply(null,everyH); //获得最小列的高度
            var minIndex = getIndex(minH,everyH); //获得最小列的索引
            getStyle(boxs[i],minH,boxs[minIndex].offsetLeft,i);//设置box元素的位置
            everyH[minIndex] += boxs[i].offsetHeight;//更新最小列的高度（ 然后就会下次循环在去找最小列 然后以此重复）
        }
    }
    var maxH = Math.max.apply(null,everyH);
    wrap.style.height = maxH + "px"; /*最外层的盒子高度更新*/
}
/**
 * 获取类元素
 *  warp [obj]外层
 *  className [str]类名
 */

function getClass(wrap,className){
    //1.获取wrap下所有的元素
    var obj = wrap.getElementsByTagName('*');
    //2.设置存储box元素的数组
    var arr= [];
    //3.循环wrap下所有的元素
    for(var i=0;i<obj.length;i++){
        //如果wrap下的元素是box
        if(obj[i].className == className){
            //将box添加到数组arr
            arr.push(obj[i]);
        }
    }
    //返回数组arr
    return arr;
}
/**
 * 获取最小列的索引
 * minH [Num]最小宽度
 * everyH [Arr] 所有列高度的数组
 */
function getIndex(minH,everyH){
    //循环存放高度的数组everyH
    for(index in everyH){
        //找到everyH数组里等于最小高度的下标值index,并返回
        if(everyH[index] == minH)
            return index;
    }
}

/**
 * 数据请求检验，滚动条底部否达到最后一个元素的位置
 */
function getCheck(){
    //1.获取屏幕高度
    var documentH = document.documentElement.clientHeight;
    //2.获取滚动条高度
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;  /*表示屏幕被滑动的高度（卷去的高度）  两个是为了兼容性*/
    //3.如果滚动条底部达到最后一个元素的位置返回布尔值（屏幕+屏幕卷去的高度（继续滑动滚动条 卷去高度会变）>= 图片+图片的上边离最顶部的高度就开始加载图片（继续滑动滚动条 高度不会变））
    return documentH+scrollH>=getLastH()?true:false; /*true可以加载啦*/
}

/**
 * 获取最后一个box所在列的高度
 */
function getLastH(){
    var wrap = document.getElementById("showpic");
    var boxs = getClass(wrap,'box');
    /*offset().top图片距离最顶上的距离（不管滑不滑动浏览器）*/
    /*offsetHeight 图片的高度*/
    /*boxs.length-1就是 box（即加载过了的图片的最后一张） 因为数组从0开始*/
    return $(boxs[boxs.length-1]).offset().top+boxs[boxs.length-1].offsetHeight-100;
}

/**
 * 设置加载样式
 *  box [obj] 设置Box
 *  top [Num] box的top值
 *  left [Num] box的left值
 *  index[Num] box的第几个
 */

var getStarNum = 0; //设置请求加载的条数的位置
function getStyle(box,top,left,index){
    if(getStarNum>=index) return;
    //设置box元素的位置
    $(box).css({
        'position':'absolute',
        'top':top,
        "left":left
    });
    getStartNum = index;//更改请求数据的条数位置
}























