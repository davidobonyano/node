const http = require("http")

const server = http.createServer ((req,res) => {
     if(req.url === "/"){
       res.end('1am him')
     }
      if(req.url === "/about"){
    res.end( '1amhim')
     }
    res.end(`<h1> oops </h1>   
        <p> The page you are looking for doesnt exist</p>
        <a href="/"> home </a>`)
})

server.listen(4000)