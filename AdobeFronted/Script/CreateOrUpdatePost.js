



let createOrUpdatePost=()=>{

}



let createPost = (title, content) => {
  const url = "http://localhost:8080/posts/"; // replace with your API endpoint

  const data = {
    userId:1,
    content: content,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        // handle successful response
        console.log("New post created!");
      } else {
        // handle error response
        console.error("Error creating new post");
      }
    })
    .catch((error) => {
      // handle fetch error
      console.error("Fetch error:", error);
    });
};




let updatePost=(postId, updatedPostData)=> {
    fetch(`http://localhost:8080/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPostData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error updating post');
      }
    })
    .then(data => {
      console.log('Updated post:', data);
    })
    .catch(error => {
      console.error('Error updating post:', error);
    });
  }
  



