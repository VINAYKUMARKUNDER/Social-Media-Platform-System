
function getTotalUsers() {
    fetch('http://localhost:8080/analytics/users')
      .then(response => response.json())
      .then(users => {

        console.log(`Total number of users: ${users}`);
        let totalUsers = document.getElementById('totalUsers').innerText=users;
      })
      .catch(error => console.error(error));
  }

  getTotalUsers();

  const userList = document.getElementById("user-list");
  fetch("http://localhost:8080/analytics/users/top-active")
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

        const bioCell = document.createElement("td");
       
        bioCell.textContent = user.bio;
        row.appendChild(bioCell);

        const actionsCell = document.createElement("td");
        const viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.classList.add("btn", "btn-outline-primary");
        viewBtn.addEventListener("click", () => {
          window.location.href = `userProfile.html?id=${user.id}`;
        });

        const deleteCell = document.createElement("td");
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete";
        dltBtn.classList.add("btn", "btn-outline-danger");
        dltBtn.addEventListener("click", () => {
          deleteUser(user.id);
          // alert("User delete successfully");
        });
        actionsCell.appendChild(viewBtn);
        deleteCell.appendChild(dltBtn);
        row.appendChild(actionsCell);
        row.appendChild(deleteCell);
        userList.appendChild(row);
      });
    })
    .catch((error) => console.error(error));






