var courseStartDate = new Date(2021, 7, 1, 19, 0, 0);

var daysElement = document.getElementById("timer-days-value");
var hoursElement = document.getElementById("timer-hours-value");
var minutesElement = document.getElementById("timer-minutes-value");
var secondsElement = document.getElementById("timer-seconds-value");

var interval = setInterval(doByInterval, 1000);

function doByInterval() {
  var now = new Date();
  var diffDate = courseStartDate - now;

  if (diffDate < 0) {
    daysElement.innerText = 0;
    daysElement.style.color = "red";
    hoursElement.innerText = 0;
    hoursElement.style.color = "red";
    minutesElement.innerText = 0;
    minutesElement.style.color = "red";
    secondsElement.innerText = 0;
    secondsElement.style.color = "red";
    clearInterval(interval);
    return;
  }

  var diffDays = Math.round(diffDate / (1000 * 60 * 60 * 24));
  var diffHours = Math.round(
    (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var diffMinutes = Math.round((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  var diffSeconds = Math.round((diffDate % (1000 * 60)) / 1000);

  daysElement.innerText = diffDays;
  hoursElement.innerText = diffHours;
  minutesElement.innerText = diffMinutes;
  secondsElement.innerText = diffSeconds;
}
