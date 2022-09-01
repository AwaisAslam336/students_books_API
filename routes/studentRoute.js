const express = require('express');
const { getAllStudents , addNewStudent, getStudentById, updateStudent } = require('../controllers/studentController');

const studentRoutes = express();

studentRoutes.get('/', getAllStudents);
studentRoutes.get('/:id', getStudentById);
studentRoutes.post('/', addNewStudent);
studentRoutes.put('/update/:id', updateStudent);

module.exports = { studentRoutes }