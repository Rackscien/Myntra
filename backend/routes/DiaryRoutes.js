const {Router} = require('express');
const { getDiaryData, addDiaryData } = require('../controllers/DiaryController');

const router = Router();


router.get(`/`,getDiaryData);
router.post('/save',addDiaryData);
// router.post('/delete', deleteWishListData );

 module.exports = router;