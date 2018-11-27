// this construcror function takes an argument, a function with two parameters
// we use resolve to return the result of the async operation to the client
// we use reject to return an error to the clinet, the best practice is to pass an error object
const p = new Promise(function(resolve, reject) {
  // kick off some async work
  setTimeout(() => {
    resolve(1); // resolved or fulfilled
    reject(new Error('message')); // rejected
  }, 2000);
});

// to get the result we call then
// result is what we resolve above
p
  .then(result => console.log('Result', result))
  .catch(err => console.log('Error', err.message));
