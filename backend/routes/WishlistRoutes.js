const {Router} = require('express');
const { getWishListData, addWishListData, deleteWishListData } = require('../controllers/WishListController');

const router = Router();


router.get(`/`,getWishListData);
router.post('/save',addWishListData);
router.post('/delete', deleteWishListData );

 module.exports = router;