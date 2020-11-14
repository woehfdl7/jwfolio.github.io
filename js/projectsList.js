// 버튼 클릭하면 div opcity 변경

var prevBtn = document.getElementById('button-1');
var nextBtn = document.getElementById('button-2');

var projects = new Array();
projects[0] = document.getElementById('projects-1');
projects[1] = document.getElementById('projects-2');
projects[2] = document.getElementById('projects-3');
projects[3] = document.getElementById('projects-4');
projects[4] = document.getElementById('projects-5');
projects[5] = document.getElementById('projects-6');

var isCheck = false;

// 이전 버튼을 클릭했을 때
function clickPrevBtn(e) {
    // display가 block인 div의 이전 배열을 block으로 바꾸고 현재 div는 none으로 변경
    for (var i = 0; i<projects.length; i++) {
        for (var i = 0; i<projects.length; i++) {
            if (projects[i].style.display == 'block' && isCheck == false) {
                if (projects[0].style.display !== 'block') {
                    projects[i].style.display = 'none';
                    projects[i-1].style.display = 'block';
    
                    isCheck = true;
                }
            }
        }
        isCheck = false;
    }
}

// 다음 버튼을 클릭했을 때
function clickNextBtn(e) {
    // display가 block인 div의 다음 배열을 block으로 바꾸고 현재 div는 none으로 변경
    for (var i = 0; i<projects.length; i++) {
        if (projects[i].style.display == 'block' && isCheck == false) {
            if (projects[5].style.display !== 'block') {
                projects[i].style.display = 'none';
                projects[i+1].style.display = 'block';

                isCheck = true;
            }
        }
    }
    isCheck = false;
}

// 기능 실행 
prevBtn.addEventListener('click', clickPrevBtn(e));
nextBtn.addEventListener('click', clickNextBtn(e));

