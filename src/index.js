var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  const url= req.url
  if(url==="/welcome"){
      res.writeHead(200, {'Content-Type':"text/plain"})
      res.write("Welcome to Dominos");
      res.end()
  }else if(url==="/contact"){
    res.writeHead(200, {"Content-Type": "text/json"})
    res.write(JSON.stringify({
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com'   
    }))
    res.end()
  }else{
    res.writeHead(404, {"Content-Type":"text/html"})
    res.write("<h1>404 error</h1>")
    res.end();
  }
//   console.log(url)
}

httpServer.listen(8081, ()=>console.log("App running on server 8081"))
// module.exports = httpServer;