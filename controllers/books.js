const Book = require("../models/book");

module.exports = {
    create,
    index,
    show,
    delete: deleteBook,
    update
};


function create(req, res){
    req.body.read = req.body.read === 'on' ? true : false
    Book.create(req.body)
    .then(()=> {
        res.redirect('/books')
    });
};

function index(req, res) {
    Book.find({}, (err, books) => {
        res.render("books/index", {books});
    });
};

function show(req, res) {
    Book.findById(req.params.id, (err, book) => {
        res.render("books/show", {book});
    });
};

function deleteBook(req, res) {
    Book.findByIdAndDelete(req.params.id, (err, book) => {
        res.redirect("/books")
    })
};

function update(req, res) {
    req.body.read = !!req.body.read
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => {
        res.redirect(`/books/${book._id}`)
    })
};
