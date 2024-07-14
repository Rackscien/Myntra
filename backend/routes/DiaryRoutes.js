const {Router} = require('express');
const { getDiaryData, addDiaryData } = require('../controllers/DiaryController');

const router = Router();


router.post(`/`,getDiaryData);
router.post('/save',addDiaryData);
// router.post('/delete', deleteWishListData );

 module.exports = router;