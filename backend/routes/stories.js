var express = require("express");
var router = express.Router();

const {addStories,getStoriesByType} = require("../controllers/stories")

router.post("/addStories",addStories);
router.get("/get/:type",getStoriesByType);

module.exports = router;