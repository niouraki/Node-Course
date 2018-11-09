const Joi = require('joi'); // it returns a class
const express = require('express'); //returns a function

// this represents our app and has useful methods
const app = express(); // returns an object of type express
app.use(express.json());

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];
// app.get()
// app.post()
// app.put()
// app.delete()

// takes two arguments, the first is the path of url
// the second argument is a callback function, the function that will be called when we have an http request to this endpoint
// the / represents the root of the website
// this are the routes because they don't have if statements I can move them to another file
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/api/courses', function(req, res) {
  res.send(courses);
});

// to get a single course
// :id is a parameter, I can also have multiple parameters like /api/posts/:year/:month
app.get('/api/courses/:id', function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course was not found'); // 404 doesn't exist
  res.send(course);
  // req.query is for query parameters
});

// to create a course
// first I give an endpoint, I am going to post my new course to the collection of courses
// to check http services I use the extension POSTMAN
app.post('/api/courses', function(req, res) {
  const result = validateCourse(req.body);
  if (result.error) return res.status(400).send(result.error.details[0].message);

  // if (!req.body.name || req.body.name.length < 3) {
    // 400 Bad request
    // res.status(400).send('Name is required and should me minimun 3 characters');
    // return;
  // }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
});

// to update a course
app.put('/api/courses/:id', function(req, res) {
  // look up the course with the id
  // if not existing return 404
  // validate
  // if invalid return 400 Bad request
  // if all ok update and return updated course to client
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course was not found');

  const result = validateCourse(req.body);

  if (result.error) return res.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

// to delete a course
app.delete('/api/courses/:id', function(req, res) {
  // first look up the course
  // if not existing return 404
  // if it exists delete it and return the deleted course
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course was not found');
  // giet the index of the course I want to delete
  const index = courses.indexOf(course);
  // use the splice method to remove it from array
  courses.splice(index, 1);
  res.send(course);
});

// keep the validation logic in one place so I can reuse it
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}
// this callback is optional and it will be called once the app starts listening to the given port
// it is better not to hardcode the port because I don't know if it will be available
// app.listen(3000, function() {
  // console.log('Listening on port 3000');
// });
// we use the process object and its env method, short for environment variable and after that we add the name of the environment variable
const port = process.env.PORT || 3000 // use this or 3000
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
