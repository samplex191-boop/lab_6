var fs = require('fs');

fs.unlink('data.txt', function (err) {
    if (err) {
        console.log("Error deleting file:", err);
    } else {
        console.log("DELETE: File 'data.txt' deleted successfully!");
    }
});