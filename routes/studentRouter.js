const Student = require('../models/Student')

const express = require('express')
const studentRouter = express.Router()
studentRouter.use(express.urlencoded({extended : true}))

studentRouter.get('/api/students', (req, res) => {
    Student
    .find()
    .then((student) => res.json(student))
    .catch((err) => res.json(err));
})

studentRouter.get('/api/students/:id', (req, res) => {
    Student
    .findById(req.params.id)
    .then(student => res.json(student))
    .catch((err) => res.json(err));})

studentRouter.post('/api/students', (req, res) => {
    Student
     .create(req.body) 
    /* .create({ name: "John", first_name: "Doe", email: "johndoe@gmail.com"}) */
    .then((student) => res.json(student))
    .catch((err) => res.json(err));
})

studentRouter.put('/api/students/:id', (req, res) => {
    Student
    .updateOne({_id : req.params.id}, {$set : {name :  req.body.name, first_name: req.body.first_name, email: req.body.email}})
    .then(student => res.json(student))
    .catch((err) => res.json(err));
})

studentRouter.put('/api/students', (req, res) => {
    Student
    .updateMany({name : 'John'}, {$set : {name : 'Bob'} })
    .then(student => res.json('John has beed updated to Bob'))
    .catch((err) => res.json(err));
})

studentRouter.delete('/api/students/:id', (req, res) => {
    Student
    .deleteOne({ _id : req.params.id})
    .then(() => res.json('Studnet hass been deleted'))
    .catch((err) => res.json(err))
})



module.exports = studentRouter;