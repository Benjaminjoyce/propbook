var express = require("express"),
    router = express.Router();


router.get("/", function(req, res) {
    res.render("pages/index")
})


module.exports = router;



// function high(x) {

//     var score = x.split("")
//     var hScore = 0;
//     return score.forEach(function(val) {
//         var alpha = ("abcdefghijklmnopqrstuvwxyz")
//         if (aplha.indexOf(val) > aplph.indexOf(hScore)) {
//             return hScore = aplha.indexOf(val);
//         }

//     });
// }