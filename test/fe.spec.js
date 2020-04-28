const assert = require('assert')
const fe = require('../fe')

describe('test fe', () => {

    it('test reverse', () => {
        const map1 = fe.reverse({
            dev: 'dev.com',
            testing: 'test.com',
            preview: 'preview.com',
            production: 'production.com',
        })
        const map2 = fe.reverse({
            dev: 'dev.com',
            testing: 'test.com',
            preview: 'preview.com',
            // 支持配置多个域名
            production: ['production1.com', 'production2.com', 'production3.com'],
        })

        assert.deepEqual(map1, {
            'dev.com': 'dev',
            'test.com': 'testing',
            'preview.com': 'preview',
            'production.com': 'production',
        })

        assert.deepEqual(map2, {
            'dev.com': 'dev',
            'test.com': 'testing',
            'preview.com': 'preview',
            'production1.com': 'production',
            'production2.com': 'production',
            'production3.com': 'production',
        })
    })
})
