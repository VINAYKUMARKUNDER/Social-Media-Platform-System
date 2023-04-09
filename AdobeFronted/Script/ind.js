const show = document.getElementById("show");

fetch("http://localhost:8080/posts/")
  .then((response) => response.json())
  .then((posts) => {
    appendData(posts);
  })
  .catch((error) => console.error(error));

function appendData(data) {
  let postList = document.getElementById("post-list");

  data.forEach(function (el) {
    let id = el.id;
    let userId = el.userId;
    let content = el.content;
    let likes = el.likes;

    let row = document.createElement("tr");

    let idCell = document.createElement("td");
    idCell.innerText = id;
    row.appendChild(idCell);

    let userIdCell = document.createElement("td");
    userIdCell.innerText = userId;
    row.appendChild(userIdCell);

    let contentCell = document.createElement("td");
    contentCell.innerText = content;
    row.appendChild(contentCell);

    let likesCell = document.createElement("td");
    likesCell.innerText = likes;
    row.appendChild(likesCell);

    let actionsCell = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-outline-primary");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click",()=>{
      update(userId);
  });



    actionsCell.appendChild(editBtn);
    row.appendChild(actionsCell);

    postList.appendChild(row);
  });
}

let update = (postId) => {
  // Define the ID of the post to update and the new content
  const newContent = "This is the updated post content.";

  // Define the URL for the POST request to update the post
  const url = `http://localhost:8080/posts/${postId}`;

  // Define the data for the request body
  const data = {
    content: newContent,
  };

  // Define the options for the fetch() call
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // Send the POST request to update the post
  fetch(url, options)
    .then((response) => response.json())
    .then((updatedPost) => {
      console.log(
        `Post ${updatedPost.id} updated with content: ${updatedPost.content}`
      );
      // Do something with the updated post data
    })
    .catch((error) => console.error(error));
};




// create post method

function createPost(title, content) {
  const url = 'http://example.com/posts/';
  const data = { title, content };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // do something with the newly created post data
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

