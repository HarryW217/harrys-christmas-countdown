const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.
  const date = new Date();
  let days = christmas - date.getDate();
  let hours = 24 - date.getHours();
  if (hours === 24) {
    hours = 0;
  }
  let minutes = 60 - date.getMinutes();
  if (minutes === 60) {
    minutes = 0;
  }
  let seconds = 60 - date.getSeconds();
  if (seconds === 60) {
    seconds = "0";
  }
  const countdown = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  return countdown;
}

function updateCountdown() {
  countdownDisplay.innerHTML = renderCountdown();
}

function startCountdown() {
  setInterval(updateCountdown, 1000);
}

updateCountdown();
startCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
