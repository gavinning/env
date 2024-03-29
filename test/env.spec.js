const assert = require('assert')
const { Env } = require('..')

describe('class Env test', () => {

    function envMessage(env) {
        switch(env) {
            case 'dev': return 'dev.result'
            case 'testing': return 'testing.result'
            case 'preview': return 'preview.result'
            case 'production': return 'production.result'
        }
    }

    it('test dev', () => {
        const appEnv = new Env('dev')
        assert.equal(true, appEnv.isDev)
        assert.equal('dev.result', envMessage(appEnv.env))

        assert.notEqual(true, appEnv.isTesting)
        assert.notEqual(true, appEnv.isPreview)
        assert.notEqual(true, appEnv.isProduction)
        assert.notEqual(true, appEnv.isOnline)
    })

    it('test testing', () => {
        const appEnv = new Env('testing')
        assert.equal(true, appEnv.isTesting)
        assert.equal('testing.result', envMessage(appEnv.env))

        assert.notEqual(true, appEnv.isDev)
        assert.notEqual(true, appEnv.isPreview)
        assert.notEqual(true, appEnv.isProduction)
        assert.notEqual(true, appEnv.isOnline)
    })

    it('test online, preview', () => {
        const appEnv = new Env('preview')
        assert.equal(true, appEnv.isPreview)
        assert.equal(true, appEnv.isOnline)
        assert.equal('preview.result', envMessage(appEnv.env))

        assert.notEqual(true, appEnv.isDev)
        assert.notEqual(true, appEnv.isTesting)
        assert.notEqual(true, appEnv.isProduction)
    })

    it('test online, production', () => {
        const appEnv = new Env('production')
        assert.equal(true, appEnv.isProduction)
        assert.equal(true, appEnv.isOnline)
        assert.equal('production.result', envMessage(appEnv.env))

        assert.notEqual(true, appEnv.isDev)
        assert.notEqual(true, appEnv.isTesting)
        assert.notEqual(true, appEnv.isPreview)
    })
})
