    var socket = io();

    socket.on('connect', function() {
        console.log('Connected to socket.io server');
    });

    socket.on('message', function(data) {
        console.log('new message');
        console.log(data.text);
        jQuery('.messages').append('<p>' + data.text + '</p>');
    });

    // handles submitting of new message
    var $form = jQuery('#message-form');

    $form.on('submit', function(event) {
        event.preventDefault();

        var $message = $form.find('input[name=message]');

        socket.emit('message', { text: $message.val() });
        $message.val('');
    });
