// Constants that won't change through the script
// #hour - target id for hour hand in the svg
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function run_the_clock(){
  HOURHAND.style.transform = "rotate(" + new Date().getHours()*360/12 + ((new Date().getMinutes() * 360/60)/12) + "deg)";
  MINUTEHAND.style.transform = "rotate(" + (new Date().getMinutes() * 360/60) + (new Date().getSeconds()* 360/60)/60 + "deg)";
  SECONDHAND.style.transform = "rotate(" + new Date().getSeconds() * 360/60 + "deg)";
}


var interval = setInterval(run_the_clock, 1000);
