const forHeader=document.querySelector("#breakHeader");
const forDisplay=document.querySelector("#breakdisplay");
const startBut=document.querySelector("#startBreak");
const resetBut=document.querySelector("#resetBreak");

const alarm=new Audio("sound/ringtone-126505.mp3")

let min=9;
let sec=60;
let breakInterval;


startBut.addEventListener("click", () => {
   
      if(min==0&&sec==1){
         min=9;
         sec=60;
         alarm.pause();
      }
      else{
         breakInterval=setInterval(tenminsBreak,1000);
         forHeader.innerHTML="Enjoy the break&#9829";
         alarm.pause();
      }
   
});

resetBut.addEventListener("click", () => {
   pause=true;
   alarm.pause();
   min=9;
   sec=60;
   clearInterval(breakInterval);
   forDisplay.innerHTML="10:00";
   forHeader.innerHTML="Enjoy the break&#9829";

   
});

function tenminsBreak(){
   if(min ==0 && sec==1){
      alarm.play();
      forHeader.innerHTML="Break is over!!!<br>Time to Focus again&#9829";
      forDisplay.innerHTML="00:00";
   }else{
      sec--;
      if(sec==0){
         min--;
         sec=60;
         if(min==0){
            min=min;
         }
      }
      function pad(unit){
         return (("0") + unit).length > 2 ? unit : "0" + unit;
     }
     min=pad(min);
     sec=pad(sec);
      forDisplay.innerHTML=min+":"+sec;
   }
}