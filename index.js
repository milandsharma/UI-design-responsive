//jshint esversion: 6
let sidebarlogo = document.querySelector(".sidebarlogo");
let sideBar = document.querySelector(".sidebar");

let count = 0;

if(window.innerWidth < 500){
    sidebarlogo.addEventListener("click",function(){
        if(count == 0){
            sideBar.style.visibility = "visible";
            setTimeout(function(){
                sideBar.style.visibility = "hidden";
            },5000);
            count = 1;
        }else{
            sideBar.style.visibility = "hidden";
            count = 0;
        }
    }
    );
}else{
    sidebarlogo.addEventListener("click",function(){
        if(count == 0){
            sideBar.style.width = "20%";
            setTimeout(function(){
                sideBar.style.width = "5%";
            },5000);
            count = 1;
        }else{
            sideBar.style.width = "5%";
            count = 0;
        }
    });
}

