import ENV from './environment'

type Callback<T = any> = (...arg: T[]) => void

export class Env {
    env: string

    constructor(env: string) {
        this.env = env || ENV.PRODUCTION
    }

    get isDev() {
        return this.env === ENV.DEV || this.env === ENV.DEVELOPMENT
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

    dev(callback: Callback) {
        !this.isDev || callback()
    }

    test(callback: Callback) {
        !this.isTest || callback()
    }

    testing(callback: Callback) {
        !this.isTesting || callback()
    }

    preview(callback: Callback) {
        !this.isPreview || callback()
    }

    production(callback: Callback) {
        !this.isProduction || callback()
    }

    online(callback: Callback) {
        (!this.isPreview && !this.isProduction) || callback()
    }

    get(config: any) {
        return config[this.env]
    }
}

export default Env
