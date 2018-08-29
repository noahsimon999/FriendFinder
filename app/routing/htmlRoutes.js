var path = require("path");

// Sets up the Express App
// =============================================================

module.exports = function(app) {
    //recognizes a path and returns an html page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });
};