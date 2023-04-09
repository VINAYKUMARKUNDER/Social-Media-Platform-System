const postListContent = document.getElementById("postListContent");

// Fetch all posts
axios.get("http://localhost:8080/posts")
  .then(response => {
    const posts = response.data;

    // Display posts in HTML
    posts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      const title = document.createElement("h3");
      title.textContent = post.content;
      postDiv.appendChild(title);

      const userLink = document.createElement("a");
      userLink.href = `./user.html?id=${post.user_id}`;
      userLink.textContent = `by User ID: ${post.user_id}`;
      postDiv.appendChild(userLink);

      const likeButton = document.createElement("button");
      likeButton.textContent = `Like (${post.likes})`;
      likeButton.addEventListener("click", () => {
        axios.post(`http://localhost:8080/posts/${post.id}/like`)
          .then(response => {
            likeButton.textContent = `Like (${response.data.likes})`;
          })
          .catch(error => console.log(error));
      });
      postDiv.appendChild(likeButton);

      const unlikeButton = document.createElement("button");
      unlikeButton.textContent = `Unlike (${post.likes})`;
      unlikeButton.addEventListener("click", () => {
        axios.post(`http://localhost:8080/posts/${post.id}/unlike`)
          .then(response => {
            unlikeButton.textContent = `Unlike (${response.data.likes})`;
          })
          .catch(error => console.log(error));
      });
      postDiv.appendChild(unlikeButton);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        window.location.href = `./post-form.html?id=${post.id}`;
      });
      postDiv.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        axios.delete(`http://localhost:8080/posts/${post.id}`)
          .then(response => {
            postDiv.remove();
          })
          .catch(error => console.log(error));
      });
      postDiv.appendChild(deleteButton);

      postListContent.appendChild(postDiv);
    });
  })
  .catch(error => console.log(error));
