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
                console.log( file.toString());
            })
        });
        return ""
    },
    echo:function(str){
    	return str;
    }
}