document.addEventListener('DOMContentLoaded', () => {
  const guestForm = document.getElementById('guest-form');
  const guestList = document.getElementById('guest-list');
  const guestCountDisplay = document.getElementById('guest-count');
  let guests = [];

  // Update guest count display
  const updateGuestCount = () => {
    guestCountDisplay.textContent = `Total Guests: ${guests.length}`;
  };

  // Render guest list
  const renderGuestList = () => {
    guestList.innerHTML = '';
    guests.forEach((guest, index) => {
      const li = document.createElement('li');
      li.className = `guest-item ${guest.rsvp ? 'attending' : 'not-attending'}`;
      li.innerHTML = `
        <span>${guest.name} <span class="category ${guest.category}">${guest.category}</span></span>
        <span class="timestamp">Added: ${guest.timestamp}</span>
        <button class="rsvp-button">${guest.rsvp ? 'Not Attending' : 'Attending'}</button>
        <button class="edit-button">Edit</button>
        <button class="remove-button">Remove</button>
      `;
      guestList.appendChild(li);

      // Toggle RSVP
      li.querySelector('.rsvp-button').addEventListener('click', () => {
        guests[index].rsvp = !guests[index].rsvp;
        renderGuestList();
      });

      // Edit guest
      li.querySelector('.edit-button').addEventListener('click', () => {
        const newName = prompt('Enter new guest name:', guest.name);
        if (newName && newName.trim()) {
          guests[index].name = newName.trim();
          renderGuestList();
        }
      });

      // Remove guest
      li.querySelector('.remove-button').addEventListener('click', () => {
        guests.splice(index, 1);
        renderGuestList();
        updateGuestCount();
      });
    });
  };

  // Handle form submission
  guestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const guestNameInput = document.getElementById('guest-name');
    const guestCategorySelect = document.getElementById('guest-category');

    if (guests.length >= 10) {
      alert('Guest list is full! Maximum 10 guests allowed.');
      return;
    }

    const guest = {
      name: guestNameInput.value.trim(),
      category: guestCategorySelect.value,
      rsvp: true,
      timestamp: new Date().toLocaleString(),
    };

    guests.push(guest);
    guestNameInput.value = '';
    guestCategorySelect.value = '';
    renderGuestList();
    updateGuestCount();
  });
});