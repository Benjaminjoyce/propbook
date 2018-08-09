require('dotenv').config();
//tools
var methodOverride = require("method-override"),
    localStrategy = require("passport-local"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    express = require("express"),
    app = express();

//database



// REQURING ROUTES
var indexRoutes = require("./routes/index"),
    routes1 = require("./routes/routes1"),
    routes2 = require("./routes/routes2");


//APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//USE ROUTES
app.use("/", indexRoutes);
app.use("/routes1", routes1);
app.use("/routes2", routes2);

// app.get("/", function(req, res) {
//     res.render("pages/index")
// })

// SERVER
port = 8080
app.listen(port, function() {
    console.log(port + "s and heart-breaks");
});
//process.env.PORT || 3000, process.env.IP