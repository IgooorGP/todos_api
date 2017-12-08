var express = require("express"),
    router  = express.Router();

// add home route to the router
router.get("/", function(req, res) {
    res.json({hello: "world"});
});

// export the router to the main index.js
module.exports = router;
