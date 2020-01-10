let pauseBtn = document.querySelector(".pause");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let timerDisplay = document.querySelector('.time');
let running = false;
let paused = false;
let startTime;
let updatedTime;
let interval;
let difference;
let savedTime;

function startTimer() {
  if (!running) {
      startTime = new Date().getTime();
      interval = setInterval(getTime, 1);
      paused = false;
      running = true;
  }
}

function pauseTimer() {
    if (!difference) {
    } else if (!paused) {
      clearInterval(interval);
      savedTime = difference;
      paused = true;
      running = false;
    } else {
      startTimer();
    }

}

function resetTimer() {

  clearInterval(interval);
  paused = false;
  difference = 0;
  savedTime = 0;
  running = false;


}

function getTime() {
    updatedTime = new Date().getTime();
    if (savedTime) {
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference = updatedTime - startTime;
  }

  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    // milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
   if (milliseconds < 100) {
      if (milliseconds < 10) {
          milliseconds = "00" + milliseconds;
      } else {
        milliseconds = "0" + milliseconds;
      }
    } else {
     milliseconds
    }
    timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;

}
