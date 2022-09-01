const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    student_id: {
        type: String,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
