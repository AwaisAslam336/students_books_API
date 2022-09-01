const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    book_name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    borrowed_status: {
        type: Boolean,
        required: true,
    },
    borrowed_by: {
        type: String
    },
    borrowed_date: {
        type: Date
    },
    return_date: {
        type: Date
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
