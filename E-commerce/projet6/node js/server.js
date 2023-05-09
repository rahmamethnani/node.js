var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/type'});
    res.end("hello world");})
    .listen(8080);
    console.log(" http://localhost:8080")


