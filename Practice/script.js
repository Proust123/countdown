const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");
const year = document.getElementById("year");

const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
console.log(newYearTime);

// Set background Year
year.innerText = currentYear + 1;

// Update countdown time
function UpdateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  // console.log(diff/1000/60/60/24);
  // let difference = diff/1000/60/60
  // console.log(difference);
  // let mod = difference % 24
  // console.log(mod);

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add value to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
// show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(UpdateCountdown, 1000);
