const {Router} = require('express');
const { getQuiz, addQuiz, check } = require('../controllers/QuizController');

const router = Router();


router.get(`/?`,getQuiz);
router.post('/save',addQuiz);
router.get('/check/:id?/:solution?',check);

 module.exports = router;