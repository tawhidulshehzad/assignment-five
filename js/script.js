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

// blog file
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document.getElementById("bg-color").addEventListener("click", function () {
  let allLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += allLetters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
});

// main functions

const taskCounter = document.getElementById("task-counter");
const headerCounter = document.getElementById("nav-counter");
const activitySection = document.getElementById("activity-log");
const historyBtn = document.getElementById("clear-history");

const taskNumber = {
  1: "task-1",
  2: "task-2",
  3: "task-3",
  4: "task-4",
  5: "task-5",
  6: "task-6",
};

const cardButtons = document.querySelectorAll(".complete-task");
let taskCount = parseInt(taskCounter.innerText) || 0;
let navRightCount = parseInt(headerCounter.innerText) || 0;
let btnHittingCount = 0;

// Function to update counters
function refreshCountes() {
  taskCount--;
  navRightCount++;
  btnHittingCount++;
  taskCounter.innerText = taskCount;
  headerCounter.innerText = navRightCount;
}

//add activity log
function addActivityLog(assignName) {
  const time = new Date().toLocaleTimeString();
  const newLogAc = document.createElement("p");
  newLogAc.textContent = `You have completed the task "${assignName}" at ${time}`;
  newLogAc.classList.add(
    "text-gray-600",
    "font-semibold",
    "bg-[#f4f7ff]",
    "p-4",
    "rounded-lg",
    "my-3"
  );
  activitySection.appendChild(newLogAc);
}

for (let i = 0; i < cardButtons.length; i++) {
  cardButtons[i].addEventListener("click", function () {
    
    if (!cardButtons[i].disabled) {
      alert("Board updated successfully");
      refreshCountes();
      cardButtons[i].disabled = true;
      cardButtons[i].style.backgroundColor = "gray";
      const assignName = document.getElementById(taskNumber[i + 1]).innerText;
      addActivityLog(assignName);

      if (btnHittingCount === 6) {
        alert("Congratulations All tasks have finished.");
      }
    }
  });
}

// Clear history button
historyBtn.addEventListener("click", () => {
  activitySection.innerHTML = "";
});
