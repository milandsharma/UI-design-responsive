//jshint esversion: 6
let sidebarlogo = document.querySelector(".sidebarlogo");
let sideBar = document.querySelector(".sidebar");
let page = document.querySelector(".pages h3");
let dashboard_nav_card = document.querySelector(".dashboard-nav-card");
let dashboard_card = document.querySelector(".dashboard-card");
let count = 0;

if(window.innerWidth <= 600){
    
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
    page.style.display = "none";
    sidebarlogo.addEventListener("click",function(){
        if(count == 0){
            sideBar.style.width = "16vw";
            page.style.display = "block";
            setTimeout(function(){
                sideBar.style.width = "5vw";
            },5000);
            count = 1;
        }else{
            page.style.display = "none";
            sideBar.style.width = "5vw";
            count = 0;
        }
    });
}


dashboard_nav_card.addEventListener("mouseover",()=>{
    dashboard_card.style.display = "block";
});
dashboard_nav_card.addEventListener("mouseout",()=>{
    dashboard_card.style.display = "none";
});
dashboard_card.addEventListener("mouseover",()=>{
    dashboard_card.style.display = "block";
});
dashboard_card.addEventListener("mouseout",()=>{
    dashboard_card.style.display = "none";
}
);






if(sideBar.style.width <= "8vw" || sideBar.style.width == "5%"){
    page.style.display = "none";
}else{
    page.style.display = "block";
}
