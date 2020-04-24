class AppEnv {

    get env() {
        return this.nodeEnv
    }

    get nodeEnv() {
        return process.env.NODE_ENV || 'dev'
    }

    get isLocal() {
        return 'local' === this.nodeEnv
    }

    get isDev() {
        return ['dev', 'local', 'mock'].includes(this.nodeEnv)
    }

    get isTesting() {
        return 'testing' === this.nodeEnv
    }

    get isPreview() {
        return 'preview' === this.nodeEnv
    }

    get isProduction() {
        return 'production' === this.nodeEnv
    }

    get isOnline() {
        return this.isPreview || this.isProduction
    }

    dev(callback) {
        !this.isDev || callback()
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
        return config[this.nodeEnv]
    }
}

module.exports = new AppEnv
