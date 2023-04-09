const apiUrl = 'http://localhost:8080/posts';

// Function to fetch all posts from API and display them on the page
function getAllPosts() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
      const postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = '';
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <div class="actions">
            <button onclick="likePost(${post.id})">Like</button>
            <button onclick="unlikePost(${post.id})">Unlike</button>
          </div>
        `;
        postsDiv.appendChild(postDiv);
      });
    })
    .catch(error => console.error(error));
}

// Function to like a post
function likePost(postId) {
  // Send a request to the API to like the post with the given ID
  fetch(`${apiUrl}/${postId}/like`, { method: 'PUT' })
    .then(response => {
      if (response.ok) {
        // If the request was successful, update the post on the page to show that it has been liked
        const postDiv = document.querySelector(`.post h2:contains('${postId}')`).parentNode;
        postDiv.innerHTML += '<p>Liked!</p>';
      } else {
        throw new Error('Failed to like post');
      }
    })
    .catch(error => console.error(error));
}

// Function to unlike a post
function unlikePost(postId) {
  // Send a request to the API to unlike the post with the given ID
  fetch(`${apiUrl}/${postId}/unlike`, { method: 'PUT' })
    .then(response => {
      if (response.ok) {
        // If the request was successful, update the post on the page to show that it has been unliked
        const postDiv = document.querySelector(`.post h2:contains('${postId}')`).parentNode;
        postDiv.innerHTML += '<p>Unliked!</p>';
      } else {
        throw new Error('Failed to unlike post');
      }
    })
    .catch(error => console.error(error));
}

// Call getAllPosts function when the page loads
getAllPosts();
