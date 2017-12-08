var express    = require("express"),
    router     = express.Router(),
    models     = require("../models"),
    bodyParser = require("body-parser"), // to access POST body data -> req.body
    helpers    = require("../helpers/todos.js") // helper functions

/* prefix = /api/todos */

// uses bodyParser middleware that parses JSON/URL encoded content in HTTP bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// INDEX route
router.get("/", helpers.queryAllTodos);

// CREATE route
router.post("/", helpers.createTodo);

// SHOW route 
router.get("/:id", helpers.showTodo);

// UPDATE route
router.put("/:id", helpers.updateTodo);

// DELETE route
router.delete("/:id", helpers.deleteTodo);

// export the todos router
module.exports = router;
