var express = require("express"),
    app     = express();

app.use(express.static("./public"));
app.use(require('./routes')); // holds all the routes

app.listen(8000, function() {
    console.log("Listening on port 8000...");
});
