const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // string의 길이가 2가 되지 않는다면 앞쪽에 0을 추가한다.
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //즉시 호출
setInterval(getClock, 1000);    //매 초마다 다시 호출
// setTimeout(getClock, 1000);     //일정시간이 지난 뒤 한 번 호출
