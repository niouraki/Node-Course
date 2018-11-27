// use async and await to modify code of index.js
// we use the try catch block to get any errors
async function displayRepos() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    console.log(repos);
  }
  catch(err) {
    console.log('Error', err.message);
  }
}
displayRepos();

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
