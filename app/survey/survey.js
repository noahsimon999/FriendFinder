const friendsArray = require("../data/friends.js");
var choicesArray = [];

$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    for (let i = 1; i <= 10; i++) {
        choicesArray.push($("#inputGroupSelect" + i).val())
    };
    console.log(choicesArray);

    for (i in friendsArray) {
        for (a in friendsArray[i].scores) {
            var test = Math.abs(friendsArray[i].scores[a] + choicesArray[a]);


        }
        console.log (test);

    }

    var profile = {
        name: $("#inputName").val().trim(),
        photo: $("#picture").val(),
        scores: choicesArray,
        total: test
    };








    $.post("/api/friends", profile, function(data) {

    // If a table is available... tell user they are booked.
    if (data) {
        alert("Yay! You are officially booked!");
    }

    // If a table is available... tell user they on the waiting list.
    else {
        alert("Sorry you are on the wait list");
    }

    });


});