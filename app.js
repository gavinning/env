const path = require('path')
const lab = require('linco.lab')
const Config = require('vpm-config')
const envFiles = [
    path.join(process.env.HOME, '.env/env.json'),
    path.join(process.env.HOME, 'env/env.json'),
    path.join(process.env.HOME, '.env.json')
]

class Env {
    constructor(src) {
        this.config = new Config
        if (lab.isDir(src)) envFiles.unshift(path.join(src, 'env.json'))
        if (lab.isFile(src)) envFiles.unshift(src)
        this.env = trys().env
        process.env.NODE_ENV = this.env
    }

    isDev() {
        return this.env === 'dev' || this.env === 'development'
    }

    isProd() {
        return this.env === 'prod' || this.env === 'production'
    }

    isTest() {
        return this.env === 'test'
    }

    set(key, value){
        this.config.set(key, value)
    }

    get(key) {
        return this.config.get(`${key}.${this.env}`) ||
        this.config.get(`${key}.all`) ||
        this.config.get(key) ||
        this.config.get(key.replace(/\.all/, ''))
    }

    // setEnv(dirname) {
    //     if(lab.isDir(dirname)) envFiles.unshift(path.join(dirname, '.env.json'))
    //     if(lab.isFile(dirname)) envFiles.unshift(dirname)
    //     this.init()
    // }

    // init() {
    //     this.env = trys().env
    //     process.env.NODE_ENV = env.env
    // }
}

function trys() {
    for(let i=0; i<envFiles.length; i++){
        try{
            return require(envFiles[i])
        }
        catch(err){}
    }
    return {}
}

module.exports = Env
