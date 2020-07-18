const express = require('express');
const path = require('path');
const config = require(path.resolve('config'));
const log = require(path.resolve('libs/winston'))(module);

const app = express();

app.engine('ejs', require('ejs-mate'));
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve('public')));

app.get('/', (req, res, next) => {
    res.render('index', {
        data: {
            h1: 'Hello!',
        }
    });
});

app.listen(config.get('port'), () => {
    log.info(new Date().toLocaleString() + ': Server listening on port ' + config.get('port'));
});