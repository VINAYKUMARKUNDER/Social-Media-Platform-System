# Social-Media-Platform-System
#  <a href="https://github.com/VINAYKUMARKUNDER/JavaScript-Code/tree/main/AdobeFronted">Fronted Repo link</a>

## Deployment

### To deploy this project fronted run

```bash
  https://adobe-fronted-vinaykumarkunder.vercel.app/
```

### To deploy this project Backend run

```bash
  https://social-media-platform-system-production.up.railway.app
```
This project is a web application that allows users to create and manage posts. It has been built using Java Spring Boot on the backend and HTML, CSS, and JavaScript on the frontend.

## Features
- User registerd himdelf
- Create, edit, and delete posts
- Like and unlike posts
- View a list of all posts
- Search for specific posts
- Responsive design for optimal viewing on desktop and - mobile devices


## Technologies Used
- Java
- Spring Boot
- MySQL
- Hibernate
- Model Mapper
- Validation
- HTML
- CSS
- JavaScript
- Bootstrap

## end Point
###  <a href="https://social-media-platform-system-production.up.railway.app/posts/">API Endpoints Link</a>
###  <a href="https://adobe-fronted-vinaykumarkunder.vercel.app/">Fronted Live Link</a>
The backend of the project was built using Java and the Spring Boot framework. The backend provides RESTful API endpoints for the frontend to communicate with the database. Data is stored in a MySQL database.

- GET /users/ - Returns a list of all users in the system.
- GET /users/{id} - Returns the details of a specific user with the given ID.
- POST /users/ - Creates a new user in the system.
- PUT /users/{id} - Updates the details of a specific user with the given ID.
- DELETE /users/{id} - Deletes the user with the given ID from the system.
- GET /posts/ - Returns a list of all posts in the system.
- GET /analytics/users - Returns a number of all users in the system.
- GET /analytics/users/top-active - Returns a top 5 user who's create max posts users in the system.
- GET /posts/{id} - Returns the details of a specific post with the given ID.
- POST /posts/ - Creates a new post in the system.
- PUT /posts/{id} - Updates the details of a specific post with the given ID.
- DELETE /posts/{id} - Deletes the post with the given ID from the system.
- POST /posts/{id}/like - Likes the post with the given ID.
- POST /posts/{id}/unlike - Removes the like from the post with the given ID.
- GET /posts/analytics/posts - Returns a number of all posts in the system..
- GET /post/analytics/posts/top-liked - Returns a top 5 posts who's liked by max users in the system.

## Database Schema
<img src="https://i.ibb.co/whG2SRt/social-scema.png" alt="Database Schema"  border="0">

## Getting Started
1. To run this application locally, you will need to have Java, MySQL, and any IDE installed on your computer.

2. Clone this repository to your local machine.
3. Create a new MySQL database for this project.
4. Update the application.properties file with your database information.
5. Navigate to the project directory in your terminal and run ./mvnw spring-boot:run to start the Spring Boot server.
6. Open a new terminal window and navigate to the client directory within the project.
7. Run JavaScript code in localhost.
8. Make sure ckeck all endpint in fronted code.
9. Open your web browser and go to http://localhost:5500 or which port your project run to view the application.
## Contributing
Contributions to this project are welcome. Please submit a pull request or create an issue to suggest changes or report bugs.

