// today's date function
function getTheDate() {
  let today = new Date().toString();
  let dateSplit = today.split(" ");
  let organizeDate =
    dateSplit[0] + " " + dateSplit[1] + " " + dateSplit[2] + " " + dateSplit[3];
  document.getElementById("todays-date").innerText = organizeDate;
}
getTheDate();

