var async = require("async");

var queue = async.queue(function(job, callback) {
    console.log(job);

    setTimeout(callback, 500);

}, 2);

var index = 0;

console.log("Start work" + index);

for(var index = 0; index< 100; index++) {

    console.log("ing" + index);
    queue.push(index);
}
