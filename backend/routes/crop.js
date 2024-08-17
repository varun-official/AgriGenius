var express = require("express");
var router = express.Router();
const {addCrop,getAllCrop} = require("../controllers/crop")

router.post("/addcrop",addCrop);
router.get("/getAllCrop",getAllCrop);

module.exports = router;

