var Hapi = require('hapi');
var Inert = require('inert');
var H2o2 = require('h2o2');
var server = new Hapi.Server();

server.connection({
  port: 8085
});

server.register([{ register: Inert }, { register: H2o2 }], function (err) {
  if (err) {
      throw err;
    }       
   
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: './dist',
              listing: true,
              index:['index.html']
          }
      }
  });
});

  server.start(function (err) {
    if (err) {
      throw err;
    }
    console.log('Server started at: ' + server.info.uri);
  });

module.exports = server;