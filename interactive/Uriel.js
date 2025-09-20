function setReminder(type) {
  const container = document.getElementById("reminder-container");
  container.innerHTML = `
  <div>
    <p class="reminder-header">When do you want Uriel to remind about <strong>${type}</strong>?</p>
    <input type="time" id="reminder-time" />
    <button onclick="finalizeReminder('${type}')">Set Reminder</button>
  </div>
  `;
}
