const show = document.getElementById("show");

fetch("http://localhost:8080/posts/")
  .then((response) => response.json())
  .then((posts) => {
    appendData(posts);
  })
  .catch((error) => console.error(error));

function appendData(data) {
  let postList = document.getElementById("post-list");

  data.forEach((el)=> {
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
    editBtn.addEventListener("click", () => {
      updatePost(el);

  
    });



    actionsCell.appendChild(editBtn);
    row.appendChild(actionsCell);

    postList.appendChild(row);
  });
}


let updatePost=(post)=>{
  console.log(post)


  const searchParams = new URLSearchParams(post);
  const queryString = searchParams.toString();

  window.location.href = `createNewPost.html?${queryString}`;
}