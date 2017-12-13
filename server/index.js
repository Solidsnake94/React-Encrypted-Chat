const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval');
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

const port = 8000;
io.listen(8000);

// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

