// Set the target date to apil 3 2023
const targetDate = new Date("2023-04-03T00:00:00Z");

const timeElapsed_ = Date.now() - targetDate.getTime();
var weeks_ = Math.floor(timeElapsed_ / (7 * 24 * 60 * 60 * 1000));
var days_ = Math.floor((timeElapsed_ % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
var hours_ = Math.floor((timeElapsed_ % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
var minutes_ = Math.floor((timeElapsed_ % (60 * 60 * 1000)) / (60 * 1000));
var seconds_ = Math.floor((timeElapsed_ % (60 * 1000)) / 1000);
var weekString_ = "LifeCD week:" + (weeks_ + 1);
var timeString_ =
  weeks_ +
  " weeks, " +
  days_ +
  " days, " +
  hours_ +
  " hours, " +
  minutes_ +
  " minutes";
document.getElementById("timer").innerHTML = timeString_;
document.getElementById("WeekCD").innerHTML = weekString_;

setInterval(updateTimer, 1000);
function updateTimer() {
  const timeElapsed = Date.now() - targetDate.getTime();
  var weeks = Math.floor(timeElapsed / (7 * 24 * 60 * 60 * 1000));
  var days = Math.floor(
    (timeElapsed % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  var hours = Math.floor(
    (timeElapsed % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  var minutes = Math.floor((timeElapsed % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((timeElapsed % (60 * 1000)) / 1000);
  var weekString = "LifeCD week:" + (weeks + 1);
  var timeString =
    weeks +
    " weeks, " +
    days +
    " days, " +
    hours +
    " hours, " +
    minutes +
    " minutes";
  document.getElementById("timer").innerHTML = timeString;
  document.getElementById("WeekCD").innerHTML = weekString;
}
