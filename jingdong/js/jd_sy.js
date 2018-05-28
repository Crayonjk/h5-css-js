var ufl=document.querySelector("#banner>.banner_left>ul>:first-child");
console.log(ufl.innerHTML);
var hid=document.querySelector("#hide");
//鼠标移入
ufl.onmouseover=function () {
    hid.style.display="block";
}
hid.onmouseover=function () {
    hid.style.display="block";
    ufl.style.background="#fff"
    ufl.style.zIndex="9999";
    ufl.style.position="relative";
}
ufl.onmouseout=function () {
    hid.style.display="none";
}
hid.onmouseout=function () {
    hid.style.display="none";
}

var bannertu=document.querySelector("#banner>.banner_center>.banner_center_top ul");
var number=0;
var time=setInterval(function () {
    // console.log("aa");

    bannertu.style.left=number+"px";
    if(number==-2680||number<-2680){
        number=670;
    }
    number-=670;
},1000);