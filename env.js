const ENV = require('./environment')

class AppEnv {
    constructor(env) {
        this.env = env || ENV.DEV
    }

    get isDev() {
        return this.env === ENV.DEV
    }

    get isTest() {
        return this.env === ENV.TEST
    }

    get isTesting() {
        return this.env === ENV.TESTING
    }

    get isPreview() {
        return this.env === ENV.PREVIEW
    }

    get isProduction() {
        return this.env === ENV.PRODUCTION
    }

    get isOnline() {
        return this.isPreview || this.isProduction
    }

    dev(callback) {
        !this.isDev || callback()
    }

    test(callback) {
        !this.isTest || callback()
    }

    testing(callback) {
        !this.isTesting || callback()
    }

    preview(callback) {
        !this.isPreview || callback()
    }

    production(callback) {
        !this.isProduction || callback()
    }

    online(callback) {
        !this.isPreview && !this.isProduction || callback()
    }

    get(config) {
        return config[this.env]
    }
}

module.exports = AppEnv
