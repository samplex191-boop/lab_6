var fs = require('fs');

var newContent = "\nThis line was ADDED by the update operation!";

fs.appendFile('data.txt', newContent, function (err) {
    if (err) {
        console.log("Error updating file:", err);
    } else {
        console.log("✅ UPDATE: New content appended to 'data.txt'!");

        // Read and display the updated content
        fs.readFile('data.txt', 'utf8', function (err, data) {
            if (err) throw err;
            console.log("\n📄 Updated File Contents:");
            console.log("-----------------------------");
            console.log(data);
            console.log("-----------------------------");
        });
    }
});