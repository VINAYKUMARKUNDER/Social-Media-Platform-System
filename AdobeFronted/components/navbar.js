function navbar(){
    return ` 
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="index.html">My Social Media Platform</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link text-white" href="index.html">Home</a>
				</li>
                                
                <li class="nav-item"> 
                 <a class="nav-link text-white" href="createNewUser.html">New User</a>
                 </li>

                <li class="nav-item">
                <a class="nav-link text-white" href="createNewPost.html">New Post</a>
                </li>

				<li class="nav-item">
					<a class="nav-link text-white" href="User.html">User</a>
				</li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="post.html">Post</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="UserAnalytics.html">User Analytics</a>
                </li>
				<li class="nav-item">
					<a class="nav-link text-white" href="PostAnalytics.html">Post Analytics</a>
				</li>
			</ul>
		</div>
	</nav>

`
}

export default navbar()