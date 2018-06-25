// MyGameServer.js
const Server = require('patchwire').Server;
const ClientManager = require('patchwire').ClientManager;

const clientManager = new ClientManager();

clientManager.addCommandListener('pos', function(client, data) {
    clientManager.broadcast('pos', {
        x: data.x,
        y: data.y
    });
});

clientManager.on('clientAdded', function() {
    clientManager.broadcast('chat', {
        message: 'A new player has joined the game.'
    });
});

const server = new Server(function(client) {
    clientManager.addClient(client);
});

server.listen(8080);