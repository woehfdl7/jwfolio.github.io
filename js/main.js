// 타이틀 문구 드래그해서 옮기기
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; // 해당 기능 전체에서 사용할 변수를 초기화 합니다.
    elmnt.onmousedown = dragMouseDown; // 요소를 마우스로 눌렀을 경우 dragMouseDown()을 실행

    function dragMouseDown(e) {
        e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음)
        e.preventDefault(); // 일단 e의 기본 수행을 막습니다.
        pos3 = e.clientX; // 마우스 이벤트가 발생할 떄 마다 당시의 마우스 x좌표를 pos3에 저장합니다.
        pos4 = e.clientY; // 마우스 이벤트가 발생할 떄 마다 당시의 마우스 y좌표를 pos4에 저장합니다.
        document.onmouseup = closeDragElement; // 마우스 클릭을 해제 했을 떄 closeDragElement()을 호출합니다 
        document.onmousemove = elementDrag; // 마우스를 움직일때 elementDrag()을 호출합니다.
    }

    function elementDrag(e) {
        e = e || window.event; // e값이 있는 경우 e 값을 그대로 사용하고 없는 경우 window.event값을 e 로 사용하겠다는 선언(Internet Explorer가 e가 없음)
        e.preventDefault(); // 일단 e의 기본 수행을 막습니다. 
        pos1 = pos3 - e.clientX; // 기존의 마우스 위치값을 비교하여 움직인 새로운 x좌표를 구하여 pos1에 저장합니다. 
        pos2 = pos4 - e.clientY; // 기존의 마우스 위치값을 비교하여 움직인 새로운 y좌표를 구하여 pos2에 저장합니다. 
        pos3 = e.clientX; // 다시 새로운 x좌표를 pos3에 저장합니다. 
        pos4 = e.clientY; // 다시 새로운 y좌표를 pos3에 저장합니다. 
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; // 요소의 y위치를 변경합니다. (마우스에 따라 요소가 y방향으로 움직입니다) 
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; // 요소의 x위치를 변경합니다. (마우스에 따라 요소가 x방향으로 움직입니다) 
    }

    function closeDragElement() {
        document.onmouseup = null; // onmouseup을 초기화
        document.onmousemove = null; // onmousemove을 초기화
        console.log("현재 요소의 위치 y는 " + elmnt.top +", x는" + elmnt.left + "입니다."); 
    }
}
// 기능 실행 
dragElement(document.getElementById("title-1"));
dragElement(document.getElementById("title-2"));
dragElement(document.getElementById("title-3"));