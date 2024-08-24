const currenttime = document.querySelector("h1"),
contant = document.querySelector(".contant"),
 selectmenu = document.querySelectorAll("select"),
 setAlarmBtn =  document.querySelector("button");

let alarmtime, isAlarmSet = false,
ringtone = new Audio("./tone.mp3")


for(let i = 12; i>0; i--){
   i = i < 10? "0" + i : i;
   let option = `<option value="${i}">${i}</option>`;
   selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}
for(let i = 59; i>0; i--){
   i = i < 10? "0" + i : i;
   let option = `<option value="${i}">${i}</option>`;
   selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}
for(let i = 2; i>0; i--){
    let ampm = i == 1 ? "PM" : "AM";
   let option = `<option value="${ampm}">${ampm}</option>`;
   selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}

setInterval(() =>{
let date = new Date(),
h = date.getHours(),
m = date.getMinutes(),
s = date.getSeconds(),
ampm = "AM";
if(h >= 12){
    h = h - 12
    ampm = "PM"
}
h = h == 0 ? h = 12 : h;

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s <  10 ? "0" + s : s;
currenttime.innerText =`${h}:${m}:${s} ${ampm}`;

if(alarmtime == `${h}:${m}:${ampm}`){
   ringtone.play()
   ringtone.loop = true
}
},1000)

function setAlarm(){

  
   if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        contant.classList.remove("disable")
        setAlarmBtn.innerText= "Set Alarm"
        return isAlarmSet = false;
      }
    
   let time = `${selectmenu[0].value}:${selectmenu[1].value}:${selectmenu[2].value}`
   if( time.includes("Hour")||  time.includes("minute") ||  time.includes("AM/PM")){
      return alert("Please, Select a Voild Time To Set Alarm")
   }
   isAlarmSet = true
   alarmtime = time;
   contant.classList.add("disable")
   setAlarmBtn.innerText= "Clear Alarm"
}
setAlarmBtn.addEventListener("click", setAlarm)