// const a = 5;    //변경 불가능한 값 const, 기본
// const b = 2;    //규칙이 없는 값 var, 사용X
// let myName = "nico";    //변경 가능한 값 let, 선택

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName="nicolas";

// console.log("your new name is "+myName);

// ---------------------------------------------
// //boolean : true 참, 1 / false 거짓, 0
// const amIFat = null;    //null 비어있는 값
// let something;  //undefined 정의되지 않은 값

// console.log(amIFat);
// console.log(something);

// ----------------------------------------------
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //array

// // Get Item from Array
// console.log(daysOfWeek);

// // Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");
// console.log(toBuy[2]);

// ----------------------------------------------
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };

// console.log(player.points);
// player.points += 15;
// console.log(player);

// ----------------------------------------------
// // function: 캡슐화, 여러번 사용
// function sayHello(nameOfPerson, age){
//     console.log("Hello! my name is " + 
//         nameOfPerson + "and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a, b){
//     console.log(a + b);
// }
// function divide(a, b){
//     console.log(a / b);
// }
// plus(8, 60);
// divide(98, 20);

// ----------------------------------------------
// const player1 = {
//     name: "nico",
//     sayHello: function(otherPersonName){
//         console.log("hello " + otherPersonName + " nice to meet you!");
//     },

// }

// console.log(player1.name);
// player1.sayHello("lynn");

// ----------------------------------------------
// const calculator1 = {
//     plus: function(a, b){
//         console.log(a + b);
//     },
//     minus: function(a, b){
//         console.log(a - b);
//     },
//     times: function(a, b){
//         console.log(a * b);     // 곱하기
//     },
//     divide: function(a, b){
//         console.log(a / b);
//     },
//     power: function(a, b){
//         console.log(a ** b);    // 제곱
//     },
// };

// calculator1.plus(2, 3);
// calculator1.minus(2, 3);
// calculator1.times(2, 3);
// calculator1.divide(2, 3);
// calculator1.power(2, 3);

// ----------------------------------------------
// const age = 96;
// function calculageKrAge(ageOfForeigner){
//     ageOfForeigner + 2;
//     return "hello";
// }

// const krAge = calculageKrAge(age);
// console.log(krAge);

// ----------------------------------------------
// const calculator2 = {
//     plus: function(a, b){
//         return a + b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     times: function(a, b){
//         return a * b; 
//     },
//     divide: function(a, b){
//         return a / b;
//     },
//     power: function(a, b){
//         return a ** b;   
//     },
// };

// const plusResult = calculator2.plus(2, 3);  //5
// const minusResult = calculator2.minus(plusResult, 10);   //-5
// const timesResult = calculator2.times(10, minusResult); //-50
// const divideResult = calculator2.divide(timesResult, plusResult);   // -10
// const powerResult = calculator2.power(divideResult, minusResult);   // -0.000009999999999999999

// ----------------------------------------------
// const age1 = prompt("How old are you?");

// console.log(parseInt(age1), age1);  // parseInt() : string -> number
// console.log(typeof(parseInt(age1)), typeof age1);   // typeof: age1의 type 확인

// const age2 = parseInt(prompt("How old are you?"));
// console.log(isNaN(age2));   // isNaN은 Boolean을 반환, true: 숫자x, false: 숫자o
//                             // NaN: Not a Number

// if(isNaN(age2)){  //condition = boolean 형식(true, false)
//     // condition === true
//     console.log("Please write a number.");
// } else {
//     //condition === false
//     console.log("Thank you for writing your age.")
// }

// const age3 = parseInt(prompt("How old are you?"));  //= : value 할당

// if(isNaN(age3) || age3< 0){
//     console.log("Please write a real positive number.");
// }else if(age3 < 18){
//     console.log("You are too young.");
// }else if(age3 >= 18 && age3 <=50){    // &&: AND, ||: OR
//     console.log("You can drink.");
// }else if(age3 > 50 && age3 <=80){
//     console.log("You should exercise.");
// }else if(age3 === 100){ // ===: 같음, !==: 같지 않음
//     console.log("wow you are wise.")
// }else if(age3 > 80){
//     console.log("You can do whatever you want.");
// }

// ----------------------------------------------
// <js element>

// const title = document.getElementById("title");
// getElementById: id로 element 검색

// const hellos = document.getElementsByClassName("hello");
// classname을 array로 반환

// const title = document.getElementsByTagName("h1");
// tag: anchor, div, section, button / array로 반환

// const title = document.querySelector(".hello h1");
// querySelector: element를 css 방식으로 검색⭐
// 첫번째 element만 return
// querySelectorAll: selector 안의 조건에 부합하는 모든 element 가져옴

// console.log(title);

// ----------------------------------------------
// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);
// // 사용가능한 event를 찾을 수 있음

// function handleTitleClick(){
//     h1.style.color = "blue";
// }

// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnline(){
//     alert("ALL Good");
// }

// // title.addEventListener("click", handleTitleClick);
// // // 유저가 title을 click(event listen)할 경우 javascript가 함수 실행버튼을 눌러줌
// // // handleTitleClick()를 사용하지 않음

// h1.onclick = handleTitleClick;   //로도 사용할 수 있음
// h1.addEventListener("mouseenter", handleMouseEnter); //마우스 포인트에 들어감
// h1.addEventListener("mouseleave", handleMouseLeave); //마우스 포인트가 벗어남

// window.addEventListener("resize", handleWindowResize);  // 윈도우창의 사이즈를 변경하면 색변경
// window.addEventListener("copy", handleWindowCopy);      // 복사
// window.addEventListener("offline", handleWindowOffline);    // wifi가 꺼짐
// window.addEventListener("online", handleWindowOnline);      //wifi가 켜짐

// ----------------------------------------------
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)){    //clickedClass가 h1의 classList에 포함되어 있다면
//         h1.classList.remove(clickedClass);  //제거
//     }else{
//         h1.classList.add(clickedClass);     //추가
//     }

//     h1.classList.toggle("clicked");
//     //h1의 classList에 cliked class가 있는지 확인
//     //있다면 toggle이 clicked를 제거
//     //없다면 toggle이 clicked를 classList에 추가
    
// }

// h1.addEventListener("click", handleTitleClick);

// ----------------------------------------------
// const link = document.querySelector("a");

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
// }

// link.addEventListener("click", handleLinkClick)
// handleLinkClick({information about the event that just happened})

// ----------------------------------------------
// loginForm.addEventListener("submit", onLoginSubmit);
// function에 ()을 더하면 브라우저가 보자마자 자동으로 function 실행

// addEventListenr를 활용할 때는 function의 이름만 적어주고
// 지정한 이벤트가 발생했을 때만 function 실행

// 모든 EventListener function의 첫번째 argument는 항상
// 방금 실행된 event에 대한 정보가 됨