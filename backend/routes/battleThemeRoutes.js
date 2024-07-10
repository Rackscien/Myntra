const {Router} = require('express');
const { getTheme, saveTheme, deleteTheme } = require('../controllers/battleThemeController');

const router = Router();


router.get(`/`,getTheme);
router.post('/save',saveTheme);
// router.post('/:deviceId/:date/update',updateDevice1);
router.post('/delete', deleteTheme );
 

module.exports = router;