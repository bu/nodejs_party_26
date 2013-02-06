var q = require("q");
var fs = require("fs");

q.fcall(cleanupRoom)
    .then(buySomthing)
    .then(payTheBill, function(err) {
        console.log(err);
    })
    .then(function() {
        console.log("Yeah!");
    });

function cleanupRoom() {
    console.log("1");
    return true;
}

function buySomthing(cleanup_Result) {
    console.log(cleanup_Result);

    var deferred = q.defer();

    fs.writeFile("bu.txt", "bu", function(err) {
        if(err) {
            return deferred.reject(err);
        }
        console.log("2");
        deferred.resolve(true);
    });

    return deferred.promise;
}

function payTheBill() {
    console.log("3");
    return true;
}
