// JavaScript code to generate calendar and handle click events

// Function to generate a calendar
function generateCalendar(year, month) {
    const calendarContainer = document.getElementById("calendar");
    const daysInMonth = new Date(year, month, 0).getDate(); // Get total days in month
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); // Get day of the week for the first day of the month
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Display current month and year
    calendarContainer.innerHTML = `<h2>${monthNames[month - 1]} ${year}</h2>`;

    // Generate calendar grid
    let calendarHTML = '<div class="calendar-grid">';
    calendarHTML += '<div class="day-labels">Sun</div><div class="day-labels">Mon</div><div class="day-labels">Tue</div><div class="day-labels">Wed</div><div class="day-labels">Thu</div><div class="day-labels">Fri</div><div class="day-labels">Sat</div>';

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += '<div class="empty-cell"></div>';
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarHTML += `<div class="calendar-day">${day}</div>`;
    }

    calendarHTML += '</div>'; // Close calendar-grid div
    calendarContainer.innerHTML += calendarHTML;
}

// Function to display to-do list for selected day
function displayToDoList(day, month, year) {
    const todoListContainer = document.getElementById("todo-list");
    // Example: Fetch to-do list data from server based on day, month, and year
    // Replace this with your own implementation to fetch or display to-do list
    todoListContainer.innerHTML = `<h3>To-Do List for ${day}/${month}/${year}</h3>
                                   <ul>
                                       <li>Task 1</li>
                                       <li>Task 2</li>
                                       <li>Task 3</li>
                                   </ul>`;
}

// Load calendar when page is ready
document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    generateCalendar(today.getFullYear(), today.getMonth() + 1); // Note: Month is zero-based in JavaScript Date object
});

// Event listener for clicking on a day in the calendar
document.getElementById("calendar").addEventListener("click", function(event) {
    if (event.target.classList.contains("calendar-day")) {
        const day = parseInt(event.target.textContent);
        const month = parseInt(document.getElementById("current-month").textContent);
        const year = parseInt(document.getElementById("current-year").textContent);
        displayToDoList(day, month, year);
    }
});
