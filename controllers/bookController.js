const Book = require('../models/bookModel');
const Student = require('../models/studentModel');
const addNewBook = async (req, res) => {
    try {
        const borrowed_status = req.body.borrowed_status;
        const borrowed_by = req.body.borrowed_by;
        if (borrowed_status && (!borrowed_by || !req.body.borrowed_date || !req.body.return_date)) {
            res.status(200).json({ success: false, message: 'borrowed_by, borrowed_date and return_date is required' });
            return;
        }
        else if (borrowed_status) {
            const student = await Student.findOne({ student_id: borrowed_by });
            if (!student) {
                res.status(200).json({ success: false, message: 'Student ID is invalid to borrow book' });
                return;
            }
        }
        const newBook = new Book({
            book_name: req.body.book_name,
            author: req.body.author,
            borrowed_status: req.body.borrowed_status,
            borrowed_by: req.body.borrowed_by,
            borrowed_date: req.body.borrowed_date,
            return_date: req.body.return_date,
        });
        const bookData = await newBook.save();
        res.status(201).json({ success: true, message: 'Book Added successfully', Data: bookData });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const foundBook = await Book.findOne({ _id: id });
        if (foundBook) {

            const borrowed_status = req.body.borrowed_status;
            const borrowed_by = req.body.borrowed_by;
            if (borrowed_status && (!borrowed_by || !req.body.borrowed_date || !req.body.return_date)) {
                res.status(200).json({ success: false, message: 'borrowed_by, borrowed_date and return_date is required' });
                return;
            }
            else if (borrowed_status) {
                const student = await Student.findOne({ student_id: borrowed_by });
                if (!student) {
                    res.status(200).json({ success: false, message: 'Student ID is invalid to borrow book' });
                    return;
                }
            }

            const data = req.body;
            const updatedBook = await Book.findOneAndUpdate({ _id: id }, data, { new: true });
            res.status(200).json({ success: true, message: 'Book Updated', Data: updatedBook });
        }
        else {
            res.status(200).json({ success: false, message: 'No Book Found with this id' });
        }

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const foundBook = await Book.findOne({ _id: id });
        if (foundBook) {
            res.status(200).json({ success: true, message: 'Found Book', Data: foundBook });
        }
        else {
            res.status(200).json({ success: false, message: 'No Book Found with this id' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

const getAllBooks = async (req, res) => {
    try {
        const foundBooks = await Book.find();
        res.status(200).json({ success: true, message: 'Found Books', Data: foundBooks });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = { getAllBooks, addNewBook, getBookById, updateBook }