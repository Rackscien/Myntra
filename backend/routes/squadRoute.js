const {Router} = require('express');
const { getSquadData, addSqadData } = require('../controllers/SquadController');

const router = Router();


router.get(`/`,getSquadData);
router.post('/save',addSqadData);
// router.post('/delete', deleteWishListData );

 module.exports = router;