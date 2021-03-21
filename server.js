const compression = require('compression');
const config = require('./config');
const server = require('express')();
const fs = require('fs');
const log = require('./libs/winston')(module);
const path = require('path');
const serve_static = require('serve-static');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(compression());

server.use(serve_static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    setHeaders(res, path) {
        if (serve_static.mime.lookup(path) === 'text/html')
            res.setHeader('Cache-Control', 'no-cache, private')
    }
}));

server.get('/', (req, res) => {
    res.render('index', {
        data: {
            h1: 'Hello!'
        }
    });
});

server.get('/fm', ((req, res, next) => {
    fs.readFile('assets/json/products.json', 'utf-8', ((err, data) => {
        if (err) {
            next();
            return;
        }

        res.render('fm', {
            products: JSON.parse(data)
        });
    }));
}));

server.get('/fm/vue', ((req, res, next) => {
    fs.readFile('assets/json/products.json', 'utf-8', ((err, data) => {
        if (err) {
            next();
            return;
        }

        res.render('fm/vue', {
            products: JSON.parse(data)
        });
    }));
}));

server.get('/fm/vue-components', ((req, res, next) => {
    fs.readFile('assets/json/products.json', 'utf-8', ((err, data) => {
        if (err) {
            next();
            return;
        }

        res.render('fm/vue-components', {
            products: JSON.parse(data)
        });
    }));
}));

server.get('/fm/vue-ajax', ((req, res, next) => {
    res.render('fm/vue-ajax');
}));

server.get('/api/products', ((req, res, next) => {
    fs.readFile('assets/json/products.json', 'utf-8', ((err, data) => {
        if (err) {
            next();
            return;
        }

        res.jsonp(JSON.parse(data));
    }));
}));

server.use((req, res) => {
    log.error(`${new Date().toLocaleString()}. Error status: 404. URL: ${req.url}`);

    res.status(404).render('errors/404', {
        data: {
            url: req.url
        }
    });
});

server.use((err, req, res, next) => {
    log.error(`${new Date().toLocaleString()}. Error status: ${err.status || 500}. Message: ${err.message}. Stack: ${err.stack}`);

    if (res.headersSent)
        return next(err);

    res.status(err.status || 500).render('errors/500', {err});
});

server.listen(config.get('port'), () => {
    log.info(new Date().toLocaleString() + '. Server listening on port ' + config.get('port'));
});