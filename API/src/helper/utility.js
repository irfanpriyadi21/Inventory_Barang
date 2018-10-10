const uuid  = require('uuid/v4')

const getId = () => {
    let id = uuid()
    return id.replace(/-/g,'')
}

const toCurrency = (currency) => {
    return parseInt(currency.replace(/,.*|[^0-9]/g, ''), 10)
}

module.exports = {
    'getIdV4' :  getId,
    'numberConverter' : toCurrency
}