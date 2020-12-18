var slideContent = document.getElementsByClassName("slide-content");
var slideImg = document.getElementsByClassName("slide-img");
var minSize = 330;
var minSize2 = 310;
var maxSize = 380;

function changeSlideImg() {
    slideContent[1].onmouseover = function() {
        slideImg[1].src = "../images/list-1-hover.png"
        slideImg[1].style.width = maxSize + 'px';
    }
    slideContent[2].onmouseover = function() {
        slideImg[2].src = "../images/list-2-hover.png"
        slideImg[2].style.width = maxSize + 'px';
    }
    slideContent[3].onmouseover = function() {
        slideImg[3].src = "../images/list-3-hover.png"
        slideImg[3].style.width = maxSize + 'px';
    }
    slideContent[4].onmouseover = function() {
        slideImg[4].src = "../images/list-4-hover.png"
        slideImg[4].style.width = maxSize + 'px';
    }
}
function changeSlideImg2() {
    if (document.body.offsetWidth > 1000) {
        slideContent[1].onmouseout = function() {
            slideImg[1].src = "../images/list-1.png"
            slideImg[1].style.width = minSize + 'px';
        }
        slideContent[2].onmouseout = function() {
            slideImg[2].src = "../images/list-2.png"
            slideImg[2].style.width = minSize + 'px';
        }
        slideContent[3].onmouseout = function() {
            slideImg[3].src = "../images/list-3.png"
            slideImg[3].style.width = minSize + 'px';
        }
        slideContent[4].onmouseout = function() {
            slideImg[4].src = "../images/list-4.png"
            slideImg[4].style.width = minSize + 'px';
        }
    }
    else if (document.body.offsetWidth <= 1000) {
        slideContent[1].onmouseout = function() {
            slideImg[1].src = "../images/list-1.png"
            slideImg[1].style.width = minSize2 + 'px';
        }
        slideContent[2].onmouseout = function() {
            slideImg[2].src = "../images/list-2.png"
            slideImg[2].style.width = minSize2 + 'px';
        }
        slideContent[3].onmouseout = function() {
            slideImg[3].src = "../images/list-3.png"
            slideImg[3].style.width = minSize2 + 'px';
        }
        slideContent[4].onmouseout = function() {
            slideImg[4].src = "../images/list-4.png"
            slideImg[4].style.width = minSize2 + 'px';
        }
    }
}
/*
function sizeUpImg() {
    for (var i=1; i<5; i++) {
        slideContent[i].onmouseover = function() {
            slideImg[i].style.width = maxSize + 'px';
        }
    }
}
function sizeDownImg() {
    for (var i=1; i<5; i++) {
        slideContent[i].onmouseout = function() {
            slideImg[i].style.width = minSize + 'px';
        }
    }
}
*/
// 기능 실행 
for (var i=1; i<5; i++) {
    slideContent[i].addEventListener('onmouseover', changeSlideImg());
    slideContent[i].addEventListener('onmouseout', changeSlideImg2());
}
