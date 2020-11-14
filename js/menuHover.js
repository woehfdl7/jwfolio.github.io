// 메뉴 오버 시 빙글빙글
function hoverMenu() {
    var menuImgContainer = document.getElementById("menu-img-container");
    var menuImg = document.getElementById("menu-img");
    var menuList = document.getElementById("menu-list");
    var nav = document.getElementById("nav");
    menuImg.onmouseover = hoverMenuList;
    nav.onmouseleave = closeMenuList;

    function hoverMenuList (e) {
        menuList.style.marginRight = 90 + "px";
        menuList.style.opacity = 1;
    }

    function closeMenuList (e) {
        menuList.style.marginRight = 70 + "px";
        menuList.style.opacity = 0;
    }
}
// 기능 실행 
hoverMenu(document.getElementById("menu-img"));