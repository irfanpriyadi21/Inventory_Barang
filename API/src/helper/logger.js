const winston = require('winston');
const DailyRotate = require('winston-daily-rotate-file');

const getDailyRotate = (_filename) => {
  return new DailyRotate({
    filename: _filename,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })
}

const infoLogger = winston.createLogger({
  transports : [
    getDailyRotate(__dirname + '../../../log/info/info-%DATE%.log')
  ]
})

const errorLogger = winston.createLogger({
  transports : [
    getDailyRotate(__dirname + '../../../log/error/error-%DATE%.log')
  ]
})

module.exports = {
  'infolog': infoLogger,
  'errorlog': errorLogger
};