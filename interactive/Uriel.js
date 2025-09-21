let chosenType = "";
function setReminder(type) {
  chosenType = type;

  if (type === "Custom") {
    document.getElementById("custom-input").style.display = "block";
  } else {
    document.querySelector(".reminder-buttons").style.display = "none";
    document.getElementById("time-input").style.display = "block";
  }
}

function confirmCustom() {
  const input = document.getElementById("custom-reminder").value.trim();
  if (!input) {
    alert("Please enter a reminder name!");
    return;
  }
  chosenType = input;

  document.querySelector(".reminder-buttons").style.display = "none";
  document.getElementById("custom-input").style.display = "none";
  document.getElementById("time-input").style.display = "block";
}

function finalizeReminder() {
  const time = document.getElementById("reminder-time").value;
  const container = document.getElementById("reminder-container");

  if (!time) {
    alert("Please select a time!");
    return;
  }

  container.innerHTML = `
    <p class="reminder-header">
      Reminder set for <strong>${chosenType}</strong> at <strong>${time}</strong>
    </p>
  `;
}
