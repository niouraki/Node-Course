// create two async operations (two parallel promises) and when both finish do sth

// I don't use reject here because I want only to resolve
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1...')
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2...')
    resolve(2);
  }, 2000);
});

// when they all complete we want to do sth
// we give it an array of promises
// this returns a new promise that will be resolved when all the promises in the array are resolved
// the result I get will be in an array
// if I want to catch error I add the reject above and hehere when I run I get the error not the array
// Promise.all([p1, p2])
//   .then(result => console.log(result));

// in case I want to wait until the first completed and then do something
// as soon as one of the promises in this array is fulfilled the promise is considered fulfilled
// in this case the result is not an array but the value of the first fulfilled promise
Promise.race([p1, p2])
  .then(result => console.log(result));
