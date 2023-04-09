

const searchParams = new URLSearchParams(window.location.search);
const userId = searchParams.get('id');
const name = searchParams.get('name');
const email = searchParams.get('email');
const bio = searchParams.get('bio');
console.log(name,email,bio)


if(name!==null && email!==null) setTimeout(setValue, 1000);

function setValue() {
   document.getElementById("name").value=name;
   const setEmail =document.getElementById("email");
    setEmail.value=email;
   setEmail.disabled = true;
   document.getElementById("bio").value=bio;
  
}

let postOrUpdate=()=>{
  if(name!==null && email!==null){update();}
  else{saveUser();}
}





    let update = () => {
      const user = {
        // The updated user data
        name: document.getElementById('name').value,
        email:document.getElementById('email').value,
        bio: document.getElementById('bio').value,
      };

      // Make a PUT request to update the user
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



    function saveUser() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const bio = document.getElementById('bio').value;
    
      fetch('http://localhost:8080/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          bio: bio
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('User saved successfully:', data);
        // redirect to the user's profile page after saving
        window.location.href = `userProfile.html?id=${data.id}`;
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
    }
    