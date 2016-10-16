'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    port: Number(process.argv[2] || 8080),
    host: 'localhost'
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{controller}/{action}.js',
        handler: function (request, reply) {
            reply.file(request.params.controller+'/'+request.params.action+'.js');
        }
    });
});

server.register(require('vision'), (err) => {

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'        
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('hello?');
        }
    });
    server.route({
        method: 'GET',
        path: '/{controller}/{action}.html',
        handler: function (request, reply) {
            reply.view(request.params.controller+'/'+request.params.action+'.html');
        }
    });
});

server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });