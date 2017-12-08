var mongoose = require("mongoose"),
    Todo     = require("./todo.js");

// debugging purposes
mongoose.set("debug", true);

// localhost DB
mongoose.connect("mongodb://localhost/todos_api");

// allows the usage of JS promises -> avoids callback hell!
mongoose.Promise = Promise;

// exports object with all the models
module.exports = {
    Todo: Todo // todo model
};
