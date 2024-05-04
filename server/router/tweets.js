const router = require('express').Router();
require('express-async-errors');
const { validate } = require('../middleware/validator');
const { body } = require('express-validator');
const { getAll, getId, add, remove, update } = require('../controller/tweet');

//validation
//sanitization
//Contract Testing: Client-Server => 추가 공부 필요
//Proto-base => 추가 공부 필요

const validateTwet = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('text를 세글자 이상 입력해주세요'),
  validate,
];

//router
router.get('/', getAll);
router.get('/:id', getId);
router.post('/', validateTwet, add);
router.delete('/:id', remove);
router.put('/:id', validateTwet, update);

module.exports = router;
