// today's date function
function getTheDate() {
  let today = new Date().toString();
  let dateSplit = today.split(" ");
  let organizeDate =
    dateSplit[0] + " " + dateSplit[1] + " " + dateSplit[2] + " " + dateSplit[3];
  document.getElementById("todays-date").innerText = organizeDate;
}
getTheDate();

// blog file
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

const taskCounter = document.getElementById("task-counter");
const navCounter = document.getElementById("nav-counter");
const activitySection = document.getElementById("activity-log");
const clearHistoryBtn = document.getElementById("clear-history");
