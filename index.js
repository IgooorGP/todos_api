var express = require("express"),
    app     = express();

app.use(express.static(__dirname + "/public"));  // static folder for static files serving
app.use(require('./routes'));                    // holds all the routes
app.set("view engine", "ejs");                   // ejs as the view engine

app.listen(8000, function() {
    console.log("Listening on port 8000...");
});
