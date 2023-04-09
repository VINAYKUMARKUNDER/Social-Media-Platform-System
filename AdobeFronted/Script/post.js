const show = document.getElementById("show");

fetch("http://localhost:8080/posts/")
  .then((response) => response.json())
  .then((posts) => {
    appendData(posts);
  })
  .catch((error) => console.error(error));

let appendData=(data)=> {
  let postList = document.getElementById("card");

  data.forEach((el)=> {

    let id = el.id;
    let userId = el.userId;
    let content = el.content;
    let likes = el.likes;

    
    let post = document.createElement('h6');
    post.classList.add("card-header")
    post.innerText="Post Id: "+(id);

    let cardBody = document.createElement('div');
      let user = document.createElement('h4');
      user.classList.add("card-title")
      user.innerText="User Id: "+(userId);

      let text = document.createElement('p');
      text.classList.add("card-text");
      text.innerText=content;

      
    
    let editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-outline-primary");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => {
      updatePost(el);

  
    });

    cardBody.append(user,text,editBtn);



      let like = document.createElement('div');
      like.classList.add("card-footer", "text-muted", "d-flex", "justify-content-around");

      let likeCount = document.createElement('h3');
      likeCount.setAttribute('id','like')
      likeCount.innerText="likes: "+(likes);

      let unLikeBtn = document.createElement("button");
      unLikeBtn.setAttribute('id','unLikeBtn');
      unLikeBtn.classList.add("btn", "btn-outline-success");
      unLikeBtn.innerText = "Unlike";
      unLikeBtn.addEventListener("click", () => {
        // console.log(el.id)
      unlikePost(el);
    });

    let LikeBtn = document.createElement("button");
    LikeBtn.setAttribute('id','LikeBtn');
    LikeBtn.classList.add("btn", "btn-outline-success");
    LikeBtn.innerText = "like";
    LikeBtn.addEventListener("click", () => {
        // console.log(el.id)
      likePost(el);
    });

    like.append(unLikeBtn,likeCount, LikeBtn);


      let mainDiv = document.createElement('div');
      mainDiv.classList.add("card", "text-center");

      mainDiv.append(post,cardBody,like)
      mainDiv.style.margin="20px";
    postList.appendChild(mainDiv);
  });
}


let updatePost=(post)=>{
  


  const searchParams = new URLSearchParams(post);
  const queryString = searchParams.toString();

  window.location.href = `createNewPost.html?${queryString}`;
}



let unlikePost=(el)=> {
  fetch(`http://localhost:8080/posts/${el.id}/unlike`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
  })
  .then(response => {
    if (!response.ok) {
      alert('Failed to unlike post');
      throw new Error('Failed to unlike post');
    }
    let like = document.getElementById('like');
    like.innerText="likes: "+(el.likes-1);
    let unLikeBtn = document.getElementById('unLikeBtn');
    unLikeBtn.disabled=true;
  })
  .catch(error => {
    alert('Error unliking post:', error);
  });
}




let likePost=(el)=> {
  fetch(`http://localhost:8080/posts/${el.id}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
  })
  .then(response => {
    if (!response.ok) {
      alert('Failed to like post');
      throw new Error('Failed to unlike post');
    }
    let like = document.getElementById('like');
    like.innerText="likes: "+(el.likes+1);
    let LikeBtn = document.getElementById('LikeBtn');
    LikeBtn.disabled=true;
  })
  .catch(error => {
    alert('Error unliking post:', error);
  });
}
