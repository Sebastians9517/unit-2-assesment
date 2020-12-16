const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    read: {type: Boolean, default: false}
}, {
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);
