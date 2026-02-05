const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController');
const auth = require('../middleware/authMiddleware');

const { menuValidation } = require('../validators/menuValidator');
const { validationResult } = require('express-validator');

router.get('/', menuController.getAll);

router.post(
  '/',
  auth,
  menuValidation,
  (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json(errors);

    next();
  },
  menuController.createItem
);

router.put('/:id', auth, menuController.updateItem);
router.delete('/:id', auth, menuController.deleteItem);

module.exports = router;
