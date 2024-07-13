const {Router} = require('express');
const { getContent, deleteContent, saveContent, updateVote, getContentId } = require('../controllers/battleController');
const router = Router();


router.get(`/`,getContent);
router.post('/save',saveContent);
router.post('/updateVote/:id',updateVote);
router.get('/:id',getContentId);
// router.post('/:deviceId/:date/update',updateDevice1);
router.post('/delete', deleteContent );
 

module.exports = router;