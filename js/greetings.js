const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// string만 포함된 변수는 대문자로 표기하여 저장
// 오타가 나면 확인 가능
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    // 브라우저가 기본 동작을 실행하지 못하게 막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);   //정보 저장
    paintGreetings(username);
  }

function paintGreetings(username) {
    const date = new Date();
    const hours = date.getHours();
    let mention = 'Hello';
    if(0<= hours && hours <= 4 || 20 < hours){
        mention = 'Good evening';
    } else if (hours < 12){
        mention = 'Good morning';
    } else{
        mention = 'Good afternoon';
    }
    greeting.innerText = `${mention}, ${username}.`;
    // greeting.innerText = "Hello " + username;
    // 1. 변수와 string을 결합하고 싶다면 또는 변수를 string 안에 집어넣고 싶다면
    // ${변수명} 사용
    // 2. ``(백틱)로 시작. ''나 ""가 아님(변수값이 반영되지 않음)
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);   //정보 불러옴

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
      // show the greetings
    paintGreetings(savedUsername);
  }
