var fs = require('fs');

var newContent = "\nThis line was ADDED by the update operation!";

fs.appendFile('data.txt', newContent, function (err) {
    if (err) {
        console.log("Error updating file:", err);
    } else{
        fs.readFile('data.txt', 'utf8', function (err, data) {
            if (err) throw err;
            console.log(data);
        });
    }
});