console.log('Before');

// getUser(1, function(user) { // user is the result of the callback function
//   console.log('User', user);
//
//   // get the repositories
//   getRepositories(user.gitHubUsername, function (repositories) {
//     console.log('repositories', repositories)
//   });
// });

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repositories => console.log('Repos', repositories))
  .catch(err => console.log('Error', err.message));

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
      console.log('Reading a user from a database...');
      // here the operation of reading the database is ready so we are calling the callback and the result will be the object we want to access
      resolve({ id: id, gitHubUsername: 'chara' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
      console.log('Get the repositories');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}
