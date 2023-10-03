window.onload = function () {

    //1.获取需要的标签
    // var nav = $("nav")
    // var t_mall = nav.children[0];
    // var ul = nav.children[1];
    var allLis = ul.getElementsByTagName("li");

    //纪录鼠标点击的位置

    // var obj_lis = document.getElementById("ul").getElementsByTagName("li");
    // for (i = 0; i < obj_lis.length; i++) {
    //     obj_lis[i].onclick = function () {
    //         alert(this.innerHTML);
    //     }
    // }


    //检测当前网页title
    var beginX = 0, begin = 0, end = 0;
    //2.遍历
    for (var i = 0; i < allLis.length; i++) {
        var li = allLis[i];
        var a = li.getElementsByTagName("a");
        //2.1监听鼠标进入
        li.onmouseover = function () {
            console.log('进入');
            //获取当前li左边的距离
            end = this.offsetLeft;
        }
        // 2.2监听鼠标按下事件
        li.onmousedown = function () {
            console.log('按下');
            beginX = this.offsetLeft;
        }
        //2.3监听鼠标离开
        li.onmouseout = function () {
            console.log('离开');
            end = beginX;
        }

    }
    //3.试下缓动动画
    // var begin = 0, end = 0;
    setInterval(function () {
        begin = begin + (end - begin) * 0.1;
        mask.style.left = begin + "px";

    }, 1);

    // 如果id的数据类型是string 就返回 对应的id的html元素，否则返回id本身的值
    function $(id) {
        return typeof id == 'string' ? document.getElementById(id) : null;
    }

    // var title = document.title;
    // document.getElementById("path").innerHTML = title;
}

window.onscroll = function () {
    var H_header = document.getElementById("header").offsetHeight;
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= H_header) {
        document.getElementById("header").style.position = "fixed";
    } else {
        document.getElementById("header").style.removeProperty("position");
    }

    console.log("滚动距离" + scrollTop + "高度" + H_header);
}
