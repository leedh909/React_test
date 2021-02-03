var Connection = require('tedious').Connection;
// var request = require('tedious').Request;

var config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: 'A!12345',
    },
  },
  options: { database: 'Test' },
};

var connection = new Connection(config);

connection.on('connect', function (err) {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Connected');
  }
});
