const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    if(req.url==='/') {
        fs.readFile('public/index.html','utf-8',(err,data)=>{
            if(err) {
                console.log(err)
            }
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(data)
        })
    } else if(req.url==='/about' || req.url==='/about.html') {
        fs.readFile('public/about.html','utf-8',(err,data)=>{
            if(err) {
                console.log(err)
            }
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(data)
        })
    } else if(req.url==='/contact-me' || req.url === '/contact-me.html') {
        fs.readFile('public/contact-me.html','utf-8',(err,data)=>{
            if(err) {
                console.log(err)
            }
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(data)
        })
    } else {
        fs.readFile('public/404.html','utf-8',(err,data)=>{
            if(err) {
                console.log(err)
            }
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(data)
        })
    }
}).listen(8080)


