const winston = require('winston');

module.exports = function getLogger() {
    return new winston.createLogger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                dirname: 'logs',
                filename: 'error.log',
                level: 'error'
            }),
            new winston.transports.File({
                dirname: 'logs',
                filename: 'app.log'
            })
        ]
    })
};