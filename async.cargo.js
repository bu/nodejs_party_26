var async = require("async");

var cargo = async.cargo(function (task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);

// add some items

cargo.push({name: 'foo'}, function (err) {
    console.log('finished processing foo');
});
cargo.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});

cargo.push({name: 'baz'}, function (err) {
    console.log('finished processing baz');
});
