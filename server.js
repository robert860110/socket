var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    console.log('User connected via socket.io');

    socket.on('message', function(data) {
        console.log('Message received + ' + data.text);
        io.emit('message', data);
    });

    socket.emit('message', {
        text: 'welcome to the chat application!'
    });
});

http.listen(PORT, function() {
    console.log('Server started!');
});
