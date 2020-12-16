
var express = require('express');
var router = express.Router();
const booksCtrl = require("../controllers/books");

/* GET users listing. */

router.post('/', booksCtrl.create);
router.get('/', booksCtrl.index);
router.get('/:id', booksCtrl.show);
router.delete('/:id', booksCtrl.delete);
router.put('/:id', booksCtrl.update);

module.exports = router;
