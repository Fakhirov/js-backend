const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/', auth.verifyAuth, stuffCtrl.createThing);

router.put('/:id', auth.verifyAuth, stuffCtrl.updateThing);

router.delete('/:id', auth.verifyAuth, stuffCtrl.deleteThing);

router.get('/:id', auth.verifyAuth, stuffCtrl.getThings);

router.get('/', auth.verifyAuth, stuffCtrl.getOneThing);

module.exports = router;