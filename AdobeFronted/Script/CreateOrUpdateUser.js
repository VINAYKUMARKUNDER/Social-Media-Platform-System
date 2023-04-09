
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
    updateUser();
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
    .then((data) => {
        alert(`${data.name}'s data update successfully!!`);
        window.location.href = `userProfile.html?id=${data.id}`;
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



  
