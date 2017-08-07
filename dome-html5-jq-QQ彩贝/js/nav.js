function nav_list(id){ //创建控件类
    var target = document.getElementById(id); //获取div的id （传进来的不能打引号）
    var navs = target.getElementsByClassName("side-menu");//获取主菜单的id
    var blocks = target.getElementsByClassName("menu-panel");//获取子菜单的id
    var findIndex = function(target, list){ //找是否是nav-item中的各项
        for(var i=0; i<list.length; i++){
            if(list[i] == target) return i;
        }
        return -1;
    }

    if(navs.length != blocks.length) throw "length of navigation not match";//如果主菜单与子菜单长度不匹配，则抛出异常

    for(var i=0; i<navs.length; i++){
        var nav = navs[i];

        nav.addEventListener('mouseenter', function(evt) {
            hideAll();
            var index = findIndex(evt.target, navs);//evt.target表示 nav-item中的各项
            showBlock(index);
            /*把blocks中的display改为block*/
        })

        target.addEventListener('mouseleave', function(){
            hideAll();
        })
    }

    var showBlock = function(index){
        blocks[index].style.display = "block";
    }
    var hideAll = function(){
        for(var i=0; i<blocks.length; i++){
            blocks[i].style.display = "none";
        }
    }

    for(var i=0; i<blocks.length; i++){ //让a标签在当前页面打开 即target改为_self
        var block = blocks[i];
        var links = block.getElementsByTagName('a');
        for(var j=0; j<links.length; j++){
            links[j].target = "_self";
        }
    }
}

var nav1 = new nav_list("sec-mainNav");//new出类 并把主div中的框架传进去