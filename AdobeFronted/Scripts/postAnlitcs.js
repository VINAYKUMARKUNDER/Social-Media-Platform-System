const API_URL = 'http://localhost:8080/';

// Get total number of posts
axios.get(`${API_URL}/analytics/posts`)
  .then(res => {
    document.getElementById('totalPosts').textContent = res.data.count;
  })
  .catch(err => console.error(err));

// Get top 5 most liked posts
axios.get(`${API_URL}/analytics/posts/top-liked`)
  .then(res => {
    const topLikedPosts = res.data;
    const topLikedPostsList = document.getElementById('topLikedPosts');
    topLikedPostsList.innerHTML = '';
    topLikedPosts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = `${post.content} - ${post.likes} likes`;
      topLikedPostsList.appendChild(li);
    });
  })
  .catch(err => console.error(err));
