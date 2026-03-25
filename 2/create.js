var fs = require('fs');

var content = "Hello! This file was created using Node.js fs module.\nWelcome to CRUD operations!";

fs.writeFile('data.txt', content, function (err) {
    if (err) {
        console.log("Error creating file:", err);
    } else {
        console.log("CREATE: File 'data.txt' created successfully!");
        console.log("Content written:\n" + content);
    }
});