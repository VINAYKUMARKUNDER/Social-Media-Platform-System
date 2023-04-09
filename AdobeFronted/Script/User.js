const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get("id");
const name = searchParams.get("name");
const email = searchParams.get("email");
const bio = searchParams.get("bio");
console.log(name, email, bio);

if (name !== null && email !== null) setTimeout(setValue, 1000);

function setValue() {
  document.getElementById("name").value = name;
  const setEmail = document.getElementById("email");
  setEmail.value = email;
  setEmail.disabled = true;
  document.getElementById("bio").value = bio;
}

// call this method in save button
let postOrUpdate = () => {
  if (name !== null && email !== null) {
    update();
  } else {
    saveUser();
  }
};

// update user data
let updateUser = () => {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    bio: document.getElementById("bio").value,
  };

  fetch(`http://localhost:8080/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((updatedUser) => {
      window.location.href = `userProfile.html?id=${userId}`;
    })
    .catch((error) => console.error(error));
};

// create new user method
let saveUser = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;

  fetch("http://localhost:8080/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      bio: bio,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`${data.name}'s data  saved successfully, Thanks for registring`);
      window.location.href = `userProfile.html?id=${data.id}`;
    })
    .catch((error) => {
      alert("Error saving user:", error);
    });
};

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






