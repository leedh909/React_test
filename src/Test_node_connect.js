const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

const axios = require('axios');

// ID로 사용자 요청
axios
  .post('http://127.0.0.1:3000/')
  // 응답(성공)
  .then(function (response) {
    // console.log(response);
    console.log('데이터데이터:', response.data);
  })
  // 응답(실패)
  .catch(function (error) {
    console.log(error);
  });
// 응답(항상 실행)
//   .then(function () {
//     // ...
//   });
