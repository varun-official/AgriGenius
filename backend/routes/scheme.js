var express = require("express");
var router = express.Router();

const {addScheme,getAllScheme} = require("../controllers/scheme")

router.post("/addScheme",addScheme);
router.get("/getAllScheme",getAllScheme);

module.exports = router;