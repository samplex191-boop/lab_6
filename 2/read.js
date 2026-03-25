// READ Operation - fs.readFile()
var fs = require('fs');

fs.readFile('data.txt', 'utf8', function (err, data) {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("✅ READ: Contents of 'data.txt':");
        console.log("-----------------------------");
        console.log(data);
        console.log("-----------------------------");
    }
}); 