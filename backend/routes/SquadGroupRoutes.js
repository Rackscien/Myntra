const {Router} = require('express');
const { getGroup, saveGroup } = require('../controllers/SquadGroupController');


const router = Router();


router.get(`/`,getGroup);
router.post('/save',saveGroup);
// router.post('/:deviceId/:date/update',updateDevice1);
// router.post('/delete', deleteTheme );
 

module.exports = router;