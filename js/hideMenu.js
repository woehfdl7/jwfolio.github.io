var logoBtn = document.getElementById("footer");
var menuBtn = document.getElementById("menu-btn2");
var menu = document.getElementById("menu-wrap");

function showMenu() {
    menu.style.display = 'block';
}
function hideMenu() {
    menu.style.display = 'none';
}

// 기능 실행 
logoBtn.addEventListener('click', showMenu);
menuBtn.addEventListener('click', hideMenu);