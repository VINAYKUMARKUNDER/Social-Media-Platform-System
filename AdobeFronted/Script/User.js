

// delete user data
let deleteUser = (userId) => {
  const url = `http://localhost:8080/users/${userId}`;

  fetch(url, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Delete successful, do something here if necessary
    console.log('User deleted successfully');
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

  // Get the table body element
  const userList = document.getElementById("user-list");

  // Fetch user data
  fetch("http://localhost:8080/users/")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
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
          window.location.href = `userProfile.html?id=${user.id}`;
        });

        const deleteCell = document.createElement("td");
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete";
        dltBtn.addEventListener("click", (id) => {
          deleteUser(id);
          alert("User delete successfully");
        });
        actionsCell.appendChild(viewBtn);
        deleteCell.appendChild(dltBtn);
        row.appendChild(actionsCell);
        row.appendChild(deleteCell);
        userList.appendChild(row);
      });
    })
    .catch((error) => console.error(error));






