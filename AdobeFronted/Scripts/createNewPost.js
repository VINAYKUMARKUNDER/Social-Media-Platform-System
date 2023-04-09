const API_URL = "http://localhost:8080";

const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", (event) => {
  console.log(event)
  event.preventDefault();
  const userId = document.getElementById("user-id").value;
  const content = document.getElementById("content").value;

  axios.post(`${API_URL}/posts`, {
    user_id: userId,
    content: content,
  })
  .then(response => {
    console.log(response.data);
    alert("Post created successfully!");
  })
  .catch(error => {
    console.error(error);
    alert("Failed to create post.");
  });
});
