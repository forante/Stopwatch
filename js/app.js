const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const lap = document.querySelector(".lap");
const stop = document.querySelector(".stop");
const results = document.querySelector(".results__item");
const clear = document.querySelector(".clear");

let block;
let hr = 0,
  min = 0,
  sec = 0,
  mil = 0,
  interval,
  num = 0;

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startWatch, 10);
});

pause.addEventListener("click", () => {
  clearInterval(interval);
  pauseWatch();
});

stop.addEventListener("click", () => {
  stopWatch();
});

lap.addEventListener("click", () => {
  lapResult();
});

clear.addEventListener("click", () => {
  clearResults();
});

function startWatch() {
  mil++;
  if (mil < 9) {
    milliseconds.innerText = "0" + mil;
  }
  if (mil > 9 && mil < 100) {
    milliseconds.innerText = mil;
  }
  if (mil > 99) {
    mil = 0;
    milliseconds.innerText = "0" + mil;
    sec++;
    seconds.innerText = "0" + sec;
  }
  if (sec > 9 && sec < 60) {
    seconds.innerText = sec;
  }
  if (sec > 59) {
    sec = 0;
    seconds.innerText = "0" + sec;
    min++;
    minutes.innerText = "0" + min;
  }
  if (min > 9 && min < 60) {
    minutes.innerText = min;
  }
  if (min > 59) {
    min = 0;
    minutes.innerText = "0" + min;
    hr++;
    hours.innerText = "0" + hr;
  }
  if (hr > 9 && hr < 100) {
    hours.innerText = hr;
  }
  if (hr > 99) {
    hr = 0;
    hours.innerText = "0" + hr;
  }
  start.classList.remove("active");
  pause.classList.remove("active");
  pause.removeAttribute("disabled");
  lap.removeAttribute("disabled");
  stop.removeAttribute("disabled");
  start.setAttribute("disabled", "true");
}

function pauseWatch() {
  pause.classList.add("active");
  start.classList.add("active");
  start.removeAttribute("disabled");
  lap.setAttribute("disabled", "true");
}

function stopWatch() {
  clearInterval(interval);
  hr = 0;
  min = 0;
  sec = 0;
  mil = 0;
  milliseconds.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
  start.classList.add("active");
  pause.setAttribute("disabled", "true");
  lap.setAttribute("disabled", "true");
  stop.setAttribute("disabled", "true");
  start.removeAttribute("disabled");
}

function lapResult() {
  num++;
  block = document.createElement("div");
  block.classList.add("laps");
  let hr1, min1, sec1, mil1;
  hr1 = "0" + hr;
  min1 = "0" + min;
  sec1 = "0" + sec;
  mil1 = "0" + mil;
  block.innerText = `Result №${num}: ${hr1.slice(-2)}:${min1.slice(
    -2
  )}:${sec1.slice(-2)}:${mil1.slice(-2)}`;
  results.append(block);
}

function clearResults() {
  num = 0;
  const laps = document.querySelectorAll(".laps");
  laps.forEach((elem) => elem.remove());
}
