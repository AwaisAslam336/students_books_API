const Student = require('../models/studentModel');

const addNewStudent = async (req, res) => {
    try {
        let student_id = req.body.student_id;
        student_id = student_id ? student_id.toLowerCase() : '';
        const studentData = await Student.findOne({ student_id: student_id });
        if (studentData) {
            res.status(409).json({ success: false, message: `student already exists with this ${student_id} student id` });
        }
        else {
            const newStudent = new Student({
                student_id: student_id,
                fname: req.body.fname,
                lname: req.body.lname,
            });
            const studentData = await newStudent.save();
            res.status(201).json({ success: true, message: 'Student Added successfully', Data: studentData });
        }

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const foundStudent = await Student.findOne({ student_id: id });
        if (foundStudent) {
            res.status(200).json({ success: true, message: 'Found student', Data: foundStudent });
        }
        else {
            res.status(200).json({ success: false, message: 'No Student Found with this id' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getAllStudents = async (req, res) => {
    try {
        const foundStudents = await Student.find();
        res.status(200).json({ success: true, message: 'Found students', Data: foundStudents });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const foundStudent = await Student.findOne({ student_id: id });
        if (foundStudent) {
            const data = req.body;
            const updatedStudent = await Student.findOneAndUpdate({ student_id: id }, data, { new: true });
            res.status(200).json({ success: true, message: 'Student Updated', Data: updatedStudent });
        }
        else {
            res.status(200).json({ success: false, message: 'No Student Found with this id' });
        }

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = { getAllStudents, addNewStudent, getStudentById, updateStudent }