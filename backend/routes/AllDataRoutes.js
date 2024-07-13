const {Router} = require('express');
const { getData, getDataById, getDataByGender } = require('../controllers/AllDataController');

const router = Router();


router.get(`/`,getData);
router.get(`/id/:id?`,getDataById);
router.get(`/:gender?`,getDataByGender);


 module.exports = router;