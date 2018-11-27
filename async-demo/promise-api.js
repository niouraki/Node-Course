// this returns a promise already resolved
// here we optionally pass a value or object
// to create a promise already rejected, instead of using resolve I use reject
const p = Promise.resolve({ id: 1 });
p.then(result => console.log('Result', result));

const pr = Promise.reject(new Error('Reason for rejection'));
pr.catch(error => console.log(error));
