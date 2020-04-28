const fe = {}
const ENV = require('./environment')

fe.reverse = (obj) => {
    const tmp = {}
    for (let key in obj) {
        const value = obj[key]
        Array.isArray(value) ? value.map(item => tmp[item] = key) : tmp[value] = key
    }
    return tmp
}

fe.setHostname = (obj) => {
    const map = fe.reverse(obj)
    fe.env = map[window.location.hostname] || ENV.DEV
}

module.exports = fe
