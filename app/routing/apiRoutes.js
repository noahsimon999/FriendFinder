const friendsData = require("../data/friends.js");


app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
    friendsData.push(req.body)
    res.json(true);
});

