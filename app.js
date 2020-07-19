const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const path = require('path');
const config = require(path.resolve('config'));
const log = require(path.resolve('libs/winston'))(module);

const app = express();

app.engine('ejs', require('ejs-mate'));
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(compression());

app.use(serveStatic('public', {
    maxAge: '1d',
    setHeaders(res, path) {
        if (serveStatic.mime.lookup(path) === 'text/html')
            res.setHeader('Cache-Control', 'no-cache, private')
    }
}));

app.get('/', (req, res) => {
    res.render('index', {
        data: {
            h1: 'Hello!',
        }
    });
});

app.get('/contacts', (req, res) => {
    res.render('contacts', {
        data: {
            h1: 'Контакты',
        }
    });
});

app.use((req, res,) => {
    log.error(`${new Date().toLocaleString()}. Error status: 404. URL: ${req.url}`);

    res.status(404).render('errors/404', {
        data: {
            url: req.url
        }
    });
});

app.use((err, req, res, next) => {
    if (res.headersSent)
        return next(err);

    log.error(`${new Date().toLocaleString()}. Error status: ${err.status || 500}. Message: ${err.message}. Stack: ${err.stack}`);

    res.status(err.status || 500).render('errors/500', {err});
});

app.listen(config.get('port'), () => {
    log.info(new Date().toLocaleString() + '. Server listening on port ' + config.get('port'));
});