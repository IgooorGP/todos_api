var express = require("express"),
    router  = express.Router(),
    models  =  require("../models") ;

/* prefix = /api/todos */

// INDEX route
router.get("/", function(req, res) {
    
    // queries all todos on the database
    models.Todo.find().then(function(queryData) {
	res.json(queryData);	
    }).catch(function(err) {
	res.send(err);
    });
    
});

// CREATE route
router.post("/", function(req, res) {
    res.send("hi");
});


// export the todos router
module.exports = router;
