



// Get the table body element
const userList = document.getElementById("user-list");

// Fetch user data
fetch('http://localhost:8080/users')
  .then(response => response.json())
  .then(users => {
    // Loop through the user data and create a table row for each user
    users.forEach(user => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = user.id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);

      const actionsCell = document.createElement("td");
      const viewBtn = document.createElement("button");
      viewBtn.textContent = "View";
      viewBtn.addEventListener("click", () => {
        // Navigate to the user profile page
        window.location.href = `userProfile.html?id=${user.id}`;
      });
      actionsCell.appendChild(viewBtn);
      row.appendChild(actionsCell);

      // Add the row to the table
      userList.appendChild(row);
    });
  })
  .catch(error => console.error(error));
