// Retrieve user data from the API
axios.get('http://localhost:8080/users/1')
  .then(response => {
    const user = response.data;
    // Update the DOM with user data
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-bio').textContent = user.bio || 'N/A';
    // Retrieve the user's posts from the API
    axios.get(`http://localhost:8080/users/${user.id}/posts`)
      .then(response => {
        const posts = response.data;
        // Update the DOM with the user's posts
        const postList = document.getElementById('post-list');
        posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.textContent = post.content;
          postList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Failed to retrieve user posts:', error);
      });
  })
  .catch(error => {
    console.error('Failed to retrieve user data:', error);
  });
