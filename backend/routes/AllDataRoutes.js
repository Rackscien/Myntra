const {Router} = require('express');
const { getData, getDataById } = require('../controllers/AllDataController');

const router = Router();


router.get(`/`,getData);
router.get(`/id/:id?`,getDataById);


 module.exports = router;