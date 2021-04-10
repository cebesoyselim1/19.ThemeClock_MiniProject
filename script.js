let digitalClock = document.querySelector(".date-partA");
let digitalDate = document.querySelector(".date-partB");

let secondLine = document.querySelector(".clock-second");
let minuteLine = document.querySelector(".clock-minute");
let hourLine = document.querySelector(".clock-hour");

let darkmode = document.querySelector(".btn-darkmode");
let body = document.body;
let status = 0;

//Darkmode
darkmode.addEventListener("click",(e) => {
    // 0 is lightMode 1 is darkMode
    if(status == 0){
        status = 1;
        darkmode.innerHTML = "Light Mode";
        body.classList.add("dark");
    }else{
        status = 0;
        darkmode.innerHTML = "Dark Mode";
        body.classList.remove("dark");
    }
    e.preventDefault();
})


function setTime(){
    let date = new Date();

    let pHour = date.getHours() < 10 ? `0${date.getHours()}`: `${date.getHours()}`;
    let pMinute = date.getMinutes() < 10 ? `0${date.getMinutes()}`: `${date.getMinutes()}`;
    let pSecond = date.getSeconds() < 10 ? `0${date.getSeconds()}`: `${date.getSeconds()}`;

    digitalClock.innerHTML = `
        ${pHour}:${pMinute}:${pSecond}
    `;

    digitalDate.innerHTML = `
        ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
    `;

    setClock(date.getHours(),date.getMinutes(),date.getSeconds());
}

function setClock(hours,minutes,seconds){

    hourLine.style.transform = `translate(-50%,-100%) rotate(${hours * 30 + minutes * 0.5}deg)`;
    minuteLine.style.transform = `translate(-50%,-100%) rotate(${minutes * 6}deg)`;
    secondLine.style.transform = `translate(-50%,-100%) rotate(${seconds * 6}deg)`;
}

setInterval(() => {
    setTime();
},1000)