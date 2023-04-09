// Get the form and add an event listener for submit
const form = document.getElementById('#user-form');

form.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault();
    const name = document.querySelector('#name-input').value;
    const email = document.querySelector('#email-input').value;
    const bio = document.querySelector('#bio-input').value;
    // Make a POST request to create a new user
    axios.post('http://localhost:8080/users/', {
      name: name,
      email: email,
      bio: bio
    })
    .then((response) => {
      // Handle success
      console.log(response.data);
      alert('User created successfully!');
      // Redirect to User List page
      window.location.href = 'user-list.html';
    })
    .catch((error) => {
      // Handle error
      console.error(error);
      alert('Error creating user');
    });
  });
  
});
console.log(form)
