var express = require('express');
var app = express();

//로그인할 DB 계정 정보
var config = {
  user: 'sa',
  password: 'A!12345',
  server: 'localhost',
  database: 'Test',
};

app.get('http://localhost:9999/bb', function (req, res) {
  // res.send('recordset');

  var sql = require('mssql');

  //DB연결
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(config);
    }

    // Request객체 생성
    var request = new sql.Request();

    // Query 작성
    request.query(
      'select Firstname from person.person',
      function (err, recordset) {
        if (err) console.log(err);

        // Query 결과 값 보내기
        res.send(recordset);
      }
    );
  });
});

// var server = app.listen(5000, function () {
//   console.log('Server is running..');
// });
