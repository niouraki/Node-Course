const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' }
];

router.get('/', function(req, res) {
  res.send(courses);
});

// to get a single course
// :id is a parameter, I can also have multiple parameters like /api/posts/:year/:month
router.get('/:id', function(req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course was not found'); // 404 doesn't exist
  res.send(course);
  // req.query is for query parameters
});

// to create a course
// first I give an endpoint, I am going to post my new course to the collection of courses
// to check http services I use the extension POSTMAN
router.post('/', function(req, res) {
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
router.put('/:id', function(req, res) {
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
router.delete('/:id', function(req, res) {
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

module.exports = router;
