var express = require("express"),
    app     = express(),
    router  = express.Router();

app.use(express.static("./public"));
app.use(require('./routes'));

app.listen(8000, function() {
    console.log("Listening on port 8000...");
});
