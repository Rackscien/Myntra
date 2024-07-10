const {Router} = require('express');
const { getContent, deleteContent, saveContent } = require('../controllers/battleController');
const router = Router();


router.get(`/:theme?`,getContent);
router.post('/save',saveContent);
// router.post('/:deviceId/:date/update',updateDevice1);
router.post('/delete', deleteContent );
 

module.exports = router;