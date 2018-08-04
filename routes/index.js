var express = require("express"),
    router = express.Router();


router.get("/", function(req, res) {
    res.render("pages/index")
})
router.get("/", function(req, res) {
    res.render("pages/register")
})




module.exports = router;