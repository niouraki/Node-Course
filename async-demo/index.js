console.log('Before');

// getUser(1, function(user) { // user is the result of the callback function
  // console.log('User', user);

  // get the repositories
  // getRepositories(user.gitHubUsername, function (repositories) {
    // console.log('repositories', repositories)
  // });
// });

// How to solve callback hell
getUser(1, displayUser);

console.log('After');

function displayUser(user){
  console.log('User', user);
  // get the repositories
  getRepositories(user.gitHubUsername, displayRepos)
}

function displayRepos(repositories) {
  console.log('repositories', repositories);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    // here the operation of reading the database is ready so we are calling the callback and the result will be the object we want to access
    callback({ id: id, gitHubUsername: 'chara' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Get the repositories');

    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
