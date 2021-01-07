const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id: {type: String},
    name: { type: String },
    age: { type: String },
    email: { type: String },
    mobile: { type: Number }
});

module.exports = { Employee };