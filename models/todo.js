var mongoose = require("mongoose");

// Schema fields creation
var todoSchema = new mongoose.Schema({
    name: {
	type: String,
	required: "Name cannot be blank!"
    },
    completed: {
	type: Boolean,
	default: false
    },
    created_at: {
	type: Date,
	default: Date.now	
    }
});

// Schema compilation into a model
// Todos is the collection in mongo
var Todo = mongoose.model('Todo', todoSchema);

// exports Todo model
module.exports = Todo;
