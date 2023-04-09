
const searchParams = new URLSearchParams(window.location.search);
const postId = searchParams.get("id");
const userId = searchParams.get("userId");
const content = searchParams.get("content");


if (userId !== null && content !== null) setTimeout(setValue, 1000);

function setValue() {
    const setUser = document.getElementById("userId");
    setUser.value = userId;
    setUser.disabled = true;
    document.getElementById("content").value = content;
  }



let createOrUpdatePost=()=>{
    
    if (userId !== null && content !== null){
     
        const post={
            userId:document.getElementById('userId').value,
            content: document.getElementById('content').value

        }
        updatePost(postId,post);
    }
    else createPost();

}



let createPost = () => {
  const url = "http://localhost:8080/posts/"; // replace with your API endpoint

  const data = {
    userId: document.getElementById('userId').value,
    content: document.getElementById('content').value,
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
        alert("New post created!");
        console.log("New post created!");
      } else {
        // handle error response
        alert("Error creating new post");
      }
    })
    .catch((error) => {
      // handle fetch error
      alert("Fetch error:", error);
    });
};




// Update Post
let updatePost=(postId, post)=> {
    alert('function call')
    fetch(`http://localhost:8080/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => {

        alert(`${data.id} update successfully!!`)})
    .catch(error => alert(`Catch error!!`));
  }
  