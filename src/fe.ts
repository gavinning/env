import ENV from './environment'

interface StringObject {
    [key: string]: string
}

interface EnvMapObject {
    [key: string]: string | Array<string>
}

class Env {
    env: string

    constructor() {
        // 默认为生产环境
        this.env = ENV.PRODUCTION
    }

    setHostname(obj: EnvMapObject) {
        const map = this.reverse(obj)
        // 默认为生产环境
        this.env = map[window.location.hostname] || ENV.PRODUCTION
    }

    private reverse(obj: EnvMapObject) {
        const map: StringObject = {}
        for (let key in obj) {
            let value = obj[key]
            Array.isArray(value)
                ? value.map((item: string) => (map[item] = key))
                : (map[value] = key)
        }
        return map
    }
}

export default new Env
