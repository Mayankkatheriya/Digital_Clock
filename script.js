const hour = document.querySelector(".hour");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");
const zone = document.querySelector("h3");
const wish = document.querySelector(".wish");
let hours = Number(new Date().getHours());
if (hours <= 4 || hours >= 22) {
  document.body.style.backgroundImage = "url(./midnight.jpg)";
  wish.innerText = "Good Night";
} else if (hours >= 5 && hours <= 7) {
  document.body.style.backgroundImage = "url(./sunrise.jpg)";
  wish.innerText = "Good Morning";
} else if (hours >= 8 && hours <= 12) {
  document.body.style.backgroundImage = "url(./morning.jpg)";
  wish.innerText = "Good Morning";
} else if (hours >= 13 && hours <= 16) {
  document.body.style.backgroundImage = "url(./afternoon.jpg)";
  wish.innerText = "Good Afternoon";
} else if (hours >= 17 && hours <= 19) {
  document.body.style.backgroundImage = "url(./sunset.jpg)";
  wish.innerText = "Good Evening";
} else {
  document.body.style.backgroundImage = "url(./night.jpg)";
  wish.innerText = "Good Night";
}

function updateTime() {
  let d = new Date();
  let h = d.getHours(); // 0 - 23
  let m = d.getMinutes(); // 0 - 59
  let s = d.getSeconds();

  if (h >= "12") {
    h = h - 12;
    zone.innerText = "PM";
  } else {
    zone.innerText = "AM";
  }
  h = String(h).padStart("2", "0");
  m = String(m).padStart("2", "0");
  s = String(s).padStart("2", "0");
  hour.textContent = `${h}`;
  minute.textContent = `${m}`;
  second.textContent = `${s}`;
}

setInterval(updateTime, 1000);
