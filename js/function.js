// var flag = true;

// function X() {
//     if (flag == true) {
//         flag = false;
//         document.getElementById("nav-x-a").style.margin = "0";
//         document.getElementById("nav-x-b").style.margin = "0";
//         var c = document.getElementById("ul").children;
//         for (var i = 0; i < c.length; i++) {
//             c[i].style.marginTop = "0";
//         }

//         setTimeout("Change()", 100);
//     } else {
//         flag = true;
//         document.getElementById("nav-x-a").style.transform = "rotate(0deg)";
//         document.getElementById("nav-x-b").style.transform = "rotate(0deg)";
//         var c = document.getElementById("ul").children;
//         for (var i = 0; i < c.length; i++) {
//             c[i].style.marginTop = "-45px";
//         }

//         setTimeout("Close()", 100);
//     }
// }
// function Change() {
//     document.getElementById("nav-x-a").style.transform = "rotate(45deg)";
//     document.getElementById("nav-x-b").style.transform = "rotate(-45deg)";
// }
// function Close() {
//     document.getElementById("nav-x-a").style.marginTop = "-7px";
//     document.getElementById("nav-x-b").style.marginBottom = "-7px";
// }

var flag = true;

// 获取y轴上的滚动位置
function X() { 
    // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (flag == true) {
        flag = false;
        document.getElementById("nav-x-a").style.margin = "0";
        document.getElementById("nav-x-b").style.margin = "0";

        document.getElementById("ul").style.height = "calc(100vh - 50px)";
        // document.getElementById("ul").style.width = "100%";

        // console.log("body滚动距离" + scrollTop);
        document.getElementById("content").style.display = "none";
        // console.log("body滚动距离" + scrollTop);
        setTimeout("Change()", 100);
        
    } else {
        flag = true;
        document.getElementById("nav-x-a").style.transform = "rotate(0deg)";
        document.getElementById("nav-x-b").style.transform = "rotate(0deg)";
        document.getElementById("ul").style.height = "0";


        document.getElementById("content").style.removeProperty("display");

        // window.scrollTo({ 
        //     top: scrollTop, 
        //     behavior: "smooth" 
        // });

        setTimeout("Close()", 100);
    }
}
function Change() {
    document.getElementById("nav-x-a").style.transform = "rotate(45deg)";
    document.getElementById("nav-x-b").style.transform = "rotate(-45deg)";
}
function Close() {
    document.getElementById("nav-x-a").style.marginTop = "-7px";
    document.getElementById("nav-x-b").style.marginBottom = "-7px";
}
