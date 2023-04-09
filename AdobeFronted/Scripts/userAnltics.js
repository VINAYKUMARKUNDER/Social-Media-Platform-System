// Retrieve total number of users
axios.get('http://localhost:8080/users')
  .then(function (response) {
    const totalUsers = response.data.total_users;
    document.getElementById('totalUsers').textContent = totalUsers;
  })
  .catch(function (error) {
    console.log(error);
  });

// Retrieve top 5 most active users
axios.get('http://localhost:8080/analytics/users/top-active')
  .then(function (response) {
    const topActiveUsers = response.data;
    const topActiveUsersList = document.getElementById('topActiveUsers');
    topActiveUsers.forEach(function(user) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = `${user.name} (${user.post_count} posts)`;
      topActiveUsersList.appendChild(listItem);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
