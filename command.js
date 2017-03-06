/*eslint-disable */
var fs = require('fs');
module.exports = {
    pwd: function() {
        return process.cwd();
    },
    date: function() {
        var date = new Date();
        return date.toUTCString();
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                console.log(file.toString());
            })
        });
        return ""
    },
    echo: function(str) {
        return str;
    },
    cat: function(filename) {
        fs.readFile(filename, "UTF8", function(err, data) {
            if (err) {
                throw err
            };
            var fileContent = data;
            console.log(fileContent);
        });
        return ""
    },
    head: function(filename) {
    	 
        fs.readFile(filename, "UTF8", function(err, data) {
            if (err) {
                throw err
            };
            var fileContent = data;
            fileContent.split('\n');
            console.log(fileContent.split('\n').slice(0,5).join("\n"));
        });
        return ""
    },
    tail: function(filename) {
    	
        fs.readFile(filename, "UTF8", function(err, data) {
            if (err) {
                throw err
            };
            var fileContent = data;
            var difference = fileContent.split('\n').length - 5;
            console.log(fileContent.split('\n').slice(difference ,fileContent.length).join("\n"));
        });
        return ""
    }
}