const {Router} = require('express');
const { getDocumentary, addDocumentary } = require('../controllers/DocumentaryController');

const router = Router();


router.get(`/`,getDocumentary);
router.post('/save',addDocumentary);

 module.exports = router;