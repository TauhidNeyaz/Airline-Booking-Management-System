const exprees = require('express');

const router = exprees.Router();

const {InfoController} = require('../../controller');

router.get('/info', InfoController.info);

module.exports = router;