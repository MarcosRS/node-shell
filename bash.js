var commands = require('./command.js')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim().split(' '); // remove the newline

    process.stdout.write(commands[cmd[0]](cmd.slice(1).join(" ")));
    ;
    setTimeout(function() {
        process.stdout.write('\nprompt >');
    }, 1000);

});