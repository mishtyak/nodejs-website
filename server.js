const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const config = require('./config');
// const log = require('./libs/winston')(module);

const server = express();

server.engine('ejs', require('ejs-mate'));
server.set('views', 'views');
server.set('view engine', 'ejs');

server.use(compression());

server.use(serveStatic('public', {
    maxAge: '1d',
    setHeaders(res, path) {
        if (serveStatic.mime.lookup(path) === 'text/html')
            res.setHeader('Cache-Control', 'no-cache, private')
    }
}));

server.get('/', (req, res) => {
    res.render('index.ejs', {
        data: {
            h1: 'Hello!',
        }
    });
});

server.use((req, res,) => {
    // log.error(`${new Date().toLocaleString()}. Error status: 404. URL: ${req.url}`);

    res.status(404).render('errors/404.ejs', {
        data: {
            url: req.url
        }
    });
});

server.use((err, req, res, next) => {
    if (res.headersSent)
        return next(err);

    // log.error(`${new Date().toLocaleString()}. Error status: ${err.status || 500}. Message: ${err.message}. Stack: ${err.stack}`);

    res.status(err.status || 500).render('errors/500.ejs', {err});
});

server.listen(config.get('port'), () => {
    // log.info(new Date().toLocaleString() + '. Server listening on port ' + config.get('port'));
});