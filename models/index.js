var mongoose  = require("mongoose"),
    TodoModel = require("./todo.js");

// debugging purposes
mongoose.set("debug", true);

// localhost DB connection
// defines the db name: todos_api
mongoose.connect("mongodb://localhost/todos_api");

// allows the usage of JS promises -> avoids callback hell!
mongoose.Promise = Promise;

// exports object with all the models
module.exports = {
    Todo: TodoModel // todo model
};
