
var http = require('http');

var server = http.createServer(function (req, res) {

        res.writeHead(200);
        res.write('heroku rocks!');
        res.end();

    });

server.listen(process.env.PORT || 5000);

/*
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/
