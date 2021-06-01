const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema( {
    name : String,
    first_name : {
        type: String, required: true
    },
    email : String
})

module.exports = mongoose.model('Student', Student);