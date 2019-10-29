const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetB = document.querySelector("#redemarer");
const chronometre = document.querySelector(".time");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    chronometre.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    chronometre.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "rgb(224, 224, 224)";
}
testArea.addEventListener("keypress", function() {let textEnterdLength = testArea.value.length;if (textEnterdLength === 0 && !timerRunning) {timerRunning = true;interval = setInterval(runTimer, 10);}console.log(textEnterdLength);});
testArea.addEventListener("keyup", function() {let textEntered = testArea.value;if (textEntered == originText) {clearInterval(interval);}});
resetB.addEventListener("click", reset);
