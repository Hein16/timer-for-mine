const hourDisplay = document.querySelector("#forHr");
const minuteDisplay = document.querySelector("#forMin");
const secondDisplay = document.querySelector("#forSec");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#restart");


let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
        startBtn.textContent="Start";
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
        startBtn.textContent="Resume";
    }
    
});
resetBtn.addEventListener("click", () => {
    startBtn.textContent="Start";
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    hourDisplay.textContent = "00";
    minuteDisplay.textContent= "00";
    secondDisplay.textContent="00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    hourDisplay.textContent = hrs;
    minuteDisplay.textContent= mins;
    secondDisplay.textContent=secs;
   

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 600 );
}