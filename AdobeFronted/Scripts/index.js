// Define the function to load the list of users
function loadUsers() {
    axios.get('/api/users')
      .then(response => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
  
        response.data.forEach(user => {
          const userLink = document.createElement('a');
          userLink.href = `user.html?id=${user.id}`;
          userLink.innerText = user.name;
  
          const listItem = document.createElement('li');
          listItem.appendChild(userLink);
  
          userList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error(error);
        alert('Error loading users. Please try again.');
      });
  }
  
  // Define the function to load the list of posts
  function loadPosts() {
    axios.get('/api/posts')
      .then(response => {
        const postList = document.getElementById('postList');
        postList.innerHTML = '';
  
        response.data.forEach(post => {
          const postLink = document.createElement('a');
          postLink.href = `post.html?id=${post.id}`;
          postLink.innerText = post.content;
  
          const listItem = document.createElement('li');
          listItem.appendChild(postLink);
  
          postList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error(error);
        alert('Error loading posts. Please try again.');
      });
  }
  
  // Load the lists of users and posts when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    loadPosts();
  });
  