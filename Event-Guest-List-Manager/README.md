# Code--challenge-2
Event Guest List Manager
Overview
The Event Guest List Manager is a web application built with HTML, CSS, and JavaScript. It allows users to manage a guest list for an event by adding, editing, and removing guests, with a limit of 10 guests. Guests can be categorized (Friend, Family, Colleague), marked as attending or not attending, and each entry includes a timestamp. The app features a clean, responsive design and dynamic updates without page refreshes.
Features

Add Guests: Enter a guest's name and category via a form.

Guest List Display: View guests with their name, category, RSVP status, and timestamp.
Remove Guests: Delete a guest using a "Remove" button.

Guest Limit: Alerts when attempting to add more than 10 guests.
Toggle RSVP: Switch a guest's status between "Attending" and "Not Attending" with visual feedback.

Categorization: Tag guests as Friend (green), Family (red), or Colleague (yellow).
Edit Guests: Update a guest's name using an "Edit" button.
Guest Count: Displays the total number of guests, updated dynamically.

Project Structure
├── index.html       # HTML structure for the app
├── style.css        # CSS for styling the app
├── event.js          # JavaScript logic for functionality
└── README.md        # Project documentation

Setup Instructions

Clone: Cloned the repository on Code-challange-2
Directory Setup: Ensured all files (index.html, style.css, event.js) are in the same directory.

Run the App: Opened index.html in a web browser (e.g., Chrome). 


Usage

Add a Guest:
Enter a guest's name in the input field.
Select a category (Friend, Family, Colleague) from the dropdown.
Click the "Add Guest" button.
The guest will appear in the list with their category, timestamp, and RSVP status.


Manage Guests:
Click the "Attending"/"Not Attending" button to toggle RSVP status.
Click "Edit" to update a guest's name via a prompt.
Click "Remove" to delete a guest from the list.


Guest Limit: An alert will appear if you try to add more than 10 guests.
Guest Count: The total guest count updates automatically at the top.

Testing
To verify functionality:

Add guests and check if they appear with correct category colors and timestamps.
Try adding more than 10 guests to confirm the alert.
Toggle RSVP status and observe background color changes (green for attending, red for not attending).
Edit a guest's name and verify the update.
Remove a guest and ensure the guest count updates.
Test responsiveness by resizing the browser window.


