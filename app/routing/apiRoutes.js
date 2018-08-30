const path = require('path');
const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        var userResponses = userInput.scores;
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        for (i in friends) {
            var diff = 0; 
            for (j in userResponses) {
                diff =+ Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        friends.push(userInput);
        res.json({
            status: 'OK', 
            matchName: matchName,
            matchImage: matchImage
        });
    });
};