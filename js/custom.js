// Sets a wellness goal and displays it on the screen
function setGoal() {
    const goalInput = document.getElementById("goalInput").value
    const goalDisplay = document.getElementById("goalDisplay")
    goalDisplay.textContent = `Current Goal: ${goalInput}`
    document.getElementById("goalInput").value = ""
  }
  // Generate a basic 30-day calendar for simplicity
  function generateCalendar() {
    const calendar = document.getElementById("calendar")
    for (let day = 1; day <= 31; day++) {
      const dayElement = document.createElement("div")
      dayElement.classList.add("day")
      dayElement.textContent = day
      dayElement.addEventListener("click", () => toggleDose(dayElement))
      calendar.appendChild(dayElement)
    }
  }
  
  // Toggle the class to show the day has been logged for a dose
  function toggleDose(dayElement) {
    dayElement.classList.toggle("logged")
  }
  
  generateCalendar() // Call to initialize the calendar
  let logEntries = []
  
  // Save the log entry and display it
  function logEntry() {
    const logInput = document.getElementById("logInput").value
    if (logInput.trim()) {
      logEntries.push(logInput)
      displayLogs()
      document.getElementById("logInput").value = "" // Clear the input field
    } else {
      alert("Please enter a reflection before saving.")
    }
  }
  
  // Display the log entries on the screen
  function displayLogs() {
    const logDisplay = document.getElementById("logDisplay")
    logDisplay.innerHTML = "<h3>Your Reflections:</h3>"
    logEntries.forEach((entry, index) => {
      logDisplay.innerHTML += `<p><strong>Entry ${index + 1}:</strong> ${entry}</p>`
    })
  }