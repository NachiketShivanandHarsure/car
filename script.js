var header= document.getElementById("header");
        var ms= document.getElementById("PORSCHE");
        var m3= document.getElementById("AUDI");
        var mx= document.getElementById("BMW");
        var my= document.getElementById("MERCEDES");
        var model= document.getElementById("model");
        var mph= document.getElementById("mph");
        var speed= document.getElementById("speed");
        var range= document.getElementById("range");
        let popup=document.getElementById("ReserveNow");
 
ms.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

    model.innerHTML="PORSCHE";
    mph.innerHTML="1s";
    speed.innerHTML="210 mph";
    range.innerHTML="400 mi";
}

m3.onclick=function(){
    header.style.backgroundImage="url(https://wallpapersmug.com/large/b32a75/orange-audi-r8.jpg)";

    model.innerHTML="AUDI";
    mph.innerHTML="1.9s";
    speed.innerHTML="499 mph";
    range.innerHTML="510 mi";
} 
mx.onclick=function(){
    header.style.backgroundImage="url(https://c4.wallpaperflare.com/wallpaper/272/37/106/bmw-japan-car-black-wallpaper-preview.jpg)";

    model.innerHTML="BMW";
    mph.innerHTML="2s";
    speed.innerHTML="450 mph";
    range.innerHTML="555 mi";
}
my.onclick =function (){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

    model.innerHTML = "MERCEDES";
    mph.innerHTML = "2.5s";
    speed.innerHTML = "600 mph";
    range.innerHTML = "400 mi";
}

