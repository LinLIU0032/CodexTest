const clockElement = document.getElementById("clock");

function pad(value) {
  return String(value).padStart(2, "0");
}

function renderTime() {
  const now = new Date();
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  clockElement.textContent = `${hh}:${mm}:${ss}`;
}

renderTime();
setInterval(renderTime, 1000);
