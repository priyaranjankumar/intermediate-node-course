const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
mongoose.connect('mongodb://localhost/userData')
const port = 8000;
const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is listening on port:${port}`)
})

const response = (res, err, data) => {
  if (err) {
    res.json({ success: false, message: err })
  }
  else if (!data) {
    res.json({ success: false, message: "Not Found" })
  }
  else {
    res.json({ success: true, message: data })
  }
}

// CREATE
app.post('/users', (req, res) => {
  // User.create()

  User.create({
    name: req.body.newUser.name,
    email: req.body.newUser.email,
    password: req.body.newUser.password
  }, (err, data) => {
    response(res, err, data)
  }
  )
})

app.route('/users/:id')
  // READ
  .get((req, res) => {
    User.findById(req.params.id, (err, data) => {
      response(res, err, data)
    }
    )
    // User.findById()
  })
  // UPDATE
  .put((req, res) => {
    // User.findByIdAndUpdate()
    User.findByIdAndUpdate(req.params.id, {
      name: req.body.newUser.name,
      email: req.body.newUser.email,
      password: req.body.newUser.password
    }, { new: true }, (err, data) => {
      response(res, err, data)
    }

    )
  })
  // DELETE
  .delete((req, res) => {
    // User.findByIdAndDelete()
    User.findByIdAndDelete(req.params.id, (err, data) => {
      response(res, err, data)
    }

    )
  })