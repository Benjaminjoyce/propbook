var express = require("express"),
    router = express.Router();


router.get("/", function(req, res) {
    res.render("pages/index")
})
router.get("/", function(req, res) {
    res.render("pages/register")
})



// router.put("/client", function(req, res){
//     var newUser = new Client({name: req.body.name});
//     User.client(client, req.body.email, function(err, user){
//         if(err){
//             req.flash("error", err.message);
//             return res.render("/");
//         }
//         res.console.log(name + " : " + email)
//        res.redirect("/")
//     });
// });



module.exports = router;