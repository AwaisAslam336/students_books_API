const express = require('express');
const bodyParser = require('body-parser');
const { studentRoutes } = require('./routes/studentRoute');
const { bookRoutes } = require('./routes/bookRoute');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/student', studentRoutes);
app.use('/api/book', bookRoutes);

module.exports = app;