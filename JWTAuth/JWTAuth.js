// const Joi = require('joi');
// const express = require('express');
// const app = express();


// app.use(express.json());


// const courses = [{
//   id: 1,
//   name: "course1"
// }, {
//   id: 2,
//   name: "course2"
// }, {
//   id: 3,
//   name: "course3"
// }];


// app.get('/', (req, res) => {
//   res.send("Hello Sir!!");
// });


// app.get('/api/courses', (req, res) => {
//   res.send(courses);
// });


// app.get('/api/courses/:id', (req, res) => {
//   let course = courses.find(c => c.id === (+req.params.id));
//   if (!course)
//     res.status(404).send("The course with the given ID was not found");
//   else
//     res.send(course);
// });

// app.post('/api/courses', (req, res) => {
//   // PS: Validate the data before inserting it to array 
//   // never trust the client side we can use JOI

//   let schema = {
//     name: Joi.string().min(3).required()
//   };
//   const result = Joi.validate(req.body, schema);

//   if (result.error) {
//     res.status(404).send(result.error.details[0].message);
//     return;
//   }


//   let course = {
//     id: courses.length + 1,
//     name: req.body.name
//   };
//   courses.push(course);
//   res.send(course);
// });


// // If you want to add parameters
// app.get('/api/courses/:year/:month', (req, res) => {
//   // to get the slashed params
//   var response = JSON.stringify(req.query) + JSON.stringify(req.params);
//   res.send(response);
//   // to get params ?abc=123&bcs=234
//   //res.send(req.params);
// });



// // Reading an environment variable which will be dynamically changed.
// // PORT
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`listenting on port ${PORT}`)
// });
// // To set environment variable on windows
// //set PORT = 5000
// // express, mongodb, mongoose, nodemon, joi, jshint







/////////////////////////////////// MY JWT Authentication server APP /////////////////////////////////////////

const Joi = require('joi')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

function validateUser(userObj) {
  const schema = {
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email({
      minDomainAtoms: 2
    }),
    password: Joi.string().min(8).required()
  }
  return Joi.validate(userObj, schema);
}

//mongoose.connect('mongodb://localhost/userdb',{ useNewUrlParser: true });
const User = mongoose.model('User', new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}));




// Login
//app.post();
//Creating a user
app.post('/Users', (req, res) => {

  let validaitonResult = validateUser(req.body);
  if (validaitonResult.error)
    return res.status(400).send(validaitonResult.error.details[0].message);
  else {
    let newUser = new User(req.body);
    newUser.save().then(() => {
      res.send(req.body);
    });
  }
});
// Modify User
//app.put();



// Reading an environment variable which will be dynamically changed.
// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`)
});
// To set environment variable on windows
//set PORT = 5000
// express, mongodb, mongoose, nodemon, joi, jshint
