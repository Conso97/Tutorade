const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const accountRoutes = require('./accountRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', accountRoutes);

module.exports = router;
