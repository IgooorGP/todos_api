var express    = require("express"),
    router     = express.Router(),
    models     = require("../models"),
    bodyParser = require("body-parser"); // to access POST body data -> req.body

/* prefix = /api/todos */

// uses bodyParser middleware that parses JSON/URL encoded content in HTTP bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// INDEX route
router.get("/", function(req, res) {
    
    // queries all toDos on the database
    models.Todo.find().then(function(queryData) {
	res.json(queryData);
    }).catch(function(err) {
	res.send(err);
    });
    
});

// CREATE route
router.post("/", function(req, res) {
    
    // inserts the key-value pairs of the HTTP body into the database
    // ignores keys that aren't in the schema
    models.Todo.create(req.body).then(function(newToDo) {
	// sends json to say everything was fine
	// with 201 status: resource was created
	res.status(201).json(newToDo);
    }).catch(function(err) {
	// sends error msg if it fails
	res.send(err);
    });
    
});

// SHOW route 
router.get("/:id", function(req, res) {
    // gets the route variable from the HTTP request header
    var id = req.params.id;

    // queries the DB to find
    models.Todo.findById(id).then(function(toDo) {
	// sends JSON back
	res.json(toDo); 
    }).catch(function(err) {
	// sends error if any
	res.send("Nothing found: " + err);
    });    
});

// UPDATE route
router.put("/:id", function(req, res) {
    // gets the route variable from the HTTP request header
    var id = req.params.id;

    // finds a toDo by its Id and updates it
    // returns the new updated toDo {new: true}
    models.Todo.findByIdAndUpdate(id, req.body, {new: true}).then(function(updatedToDo) {
	// returns the updated toDo as JSON
	res.json(updatedToDo);
    }).catch(function(err) {
	// sends error if any
	res.send(err);	
    });
});

// DELETE route
router.delete("/:id", function(req, res) {
    // gets the route variable from the HTTP request header
    var id = req.params.id;
    
    models.Todo.findByIdAndRemove(id).then(function () {
	res.json({message: "sucessfully deleted toDo!"});
    }).catch(function(error) {
	// sends error if any
	res.send(err);
    });
    
});

// export the todos router
module.exports = router;
