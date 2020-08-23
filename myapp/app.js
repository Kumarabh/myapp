var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('./template/index.html')
  res.write(req.url);
  res.end();
}).listen(3000);

console.log('server listening at port 3000 !!!');