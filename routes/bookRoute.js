const express = require('express');
const { getAllBooks, addNewBook, getBookById, updateBook } = require('../controllers/bookController');

const bookRoutes = express();

bookRoutes.get('/', getAllBooks);
bookRoutes.get('/:id', getBookById);
bookRoutes.post('/', addNewBook);
bookRoutes.put('/update/:id', updateBook);

module.exports = { bookRoutes }