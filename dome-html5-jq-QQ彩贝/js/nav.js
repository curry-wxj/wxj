function nav_list(id){ //�����ؼ���
    var target = document.getElementById(id); //��ȡdiv��id ���������Ĳ��ܴ����ţ�
    var navs = target.getElementsByClassName("side-menu");//��ȡ���˵���id
    var blocks = target.getElementsByClassName("menu-panel");//��ȡ�Ӳ˵���id
    var findIndex = function(target, list){ //���Ƿ���nav-item�еĸ���
        for(var i=0; i<list.length; i++){
            if(list[i] == target) return i;
        }
        return -1;
    }

    if(navs.length != blocks.length) throw "length of navigation not match";//������˵����Ӳ˵����Ȳ�ƥ�䣬���׳��쳣

    for(var i=0; i<navs.length; i++){
        var nav = navs[i];

        nav.addEventListener('mouseenter', function(evt) {
            hideAll();
            var index = findIndex(evt.target, navs);//evt.target��ʾ nav-item�еĸ���
            showBlock(index);
            /*��blocks�е�display��Ϊblock*/
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

    for(var i=0; i<blocks.length; i++){ //��a��ǩ�ڵ�ǰҳ��� ��target��Ϊ_self
        var block = blocks[i];
        var links = block.getElementsByTagName('a');
        for(var j=0; j<links.length; j++){
            links[j].target = "_self";
        }
    }
}

var nav1 = new nav_list("sec-mainNav");//new���� ������div�еĿ�ܴ���ȥ