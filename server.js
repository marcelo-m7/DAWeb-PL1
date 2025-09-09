import http from 'http';

var server = http.createServer(
    function(
        req, res
    ) {
        if (req.url == "/") {
            res.writeHead(
                200, 
                { 'Content-Type' : 'text/html' }
            );

            res.write(
                '<html><head> <meta charset="UTF-8"> </head> <h1> Olá mundo! <br> by Marcelo Satos <\h1> <\html>'
            );
            res.end();

        }
        if (req.url == "/professor") {
            res.writeHead(
                200, 
                { 'Content-Type' : 'text/html' }
            );

            res.write(
                '<html><head> <meta charset="UTF-8"> </head> <h1> Olá professor!<\h1> <\html>'
            );
            res.end();

        }
        if (req.url == "/estudantes") {
            res.writeHead(
                200, 
                { 'Content-Type' : 'text/html' }
            );

            res.write(
                '<html><head> <meta charset="UTF-8"> </head> <h1> Olá estudantes!<\h1> <\html>'
            );
            res.end();

        }
    }
);

server.listen(5000);
