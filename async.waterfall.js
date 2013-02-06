var async = require("async");

async.waterfall([
    function buySomething(callback) {
        return callback();
    },

    function payTheBill(callback) {
        return callback(true);
    }
], function (err, result) {
    console.log(err, result);

   // result now equals 'done'    
});
