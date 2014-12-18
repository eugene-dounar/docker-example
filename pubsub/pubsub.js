#!/usr/bin/env node

var io = require('socket.io')();
var sock = require('zmq').socket('pull');

//sock.on('message', function(buffer) { });
//io.on('connection', function(socket) { });

io.listen(process.env.SOCKETIO_PORT || 80);
sock.bindSync(process.env.ZMQ_SOCKET || 'tcp://0.0.0.0:3317');
