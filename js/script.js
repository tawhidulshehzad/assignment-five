// today's date function
function getTheDate() {
  let today = new Date().toString();
  let dateSplit = today.split(" ");
  let organizeDate =
    dateSplit[0] + " " + dateSplit[1] + " " + dateSplit[2] + " " + dateSplit[3];
  document.getElementById("todays-date").innerText = organizeDate;
}
getTheDate();
// bg color
document.getElementById("bg-color").addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// blog file
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

const taskCounter = document.getElementById("task-counter");
const navCounter = document.getElementById("nav-counter");
const activitySection = document.getElementById("activity-log");
const historyBtn = document.getElementById("clear-history");

const taskMap = {
  1: "task-1",
  2: "task-2",
  3: "task-3",
  4: "task-4",
  5: "task-5",
  6: "task-6",
};
