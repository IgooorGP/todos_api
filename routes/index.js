// file must initialize all the routes with their prefixes (if necessary)
var express = require("express"),
    router  = express.Router();

/* PREFIXED ROUTES */
router.use("/api/todos", require("./todos.js"));

/* UNPREFIXED ROUTES */
// root route
router.get("/", function(req, res) {
    //res.sendFile("index2.html", {root: "views"});

    res.render("index.ejs");
});

module.exports = router;



