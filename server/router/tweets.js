const router = require('express').Router();
require('express-async-errors');

const { getAll, getId, add, remove, update } = require('../controller/tweet');

router.get('/', getAll);
router.get('/:id', getId);
router.post('/', add);
router.delete('/:id', remove);
router.put('/:id', update);

module.exports = router;
