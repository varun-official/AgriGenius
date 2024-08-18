var express = require("express");
var router = express.Router();
const {addCrop,getAllCrop,getCropByName} = require("../controllers/crop")

router.post("/addcrop",addCrop);
router.get("/getAllCrop",getAllCrop);
router.get("/getCrop/:cropname",getCropByName);


module.exports = router;

