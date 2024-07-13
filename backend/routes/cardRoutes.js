const { Router } = require("express");
const {
  getCartData,
  addCartData,
  deleteCartData,
} = require("../controllers/CartController");

const router = Router();

router.get(`/`, getCartData);
router.post("/save", addCartData);

router.post("/delete", deleteCartData);
module.exports = router;
