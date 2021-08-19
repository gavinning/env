Env
---
环境变量管理

### Install
```sh
npm i @4a/env
yarn add @4a/env
```

### Usage in Nodejs
```js
const { Env } = require('@4a/env')
module.exports = new Env(process.env.NODE_ENV)
```

### Usage in FE
```js
// hostname = 'preview.com'

import Env from '@4a/env'
import fe from '@4a/env/dist/fe'

// 根据hostname发现env
fe.setHostname ({
    dev: 'dev.com',
    test: 'test.com',
    testing: 'test.com',
    preview: 'preview.com',
    // 支持配置多个域名
    production: ['production1.com', 'production2.com'],
})

export default new AppEnv(fe.env)
```

### Example
```js
console.log('app start on', appEnv.env)

appEnv.env          // === 'preview'
appEnv.isDev        // === false
appEnv.isTest       // === false
appEnv.isTesting    // === false
appEnv.isPreview    // === true
appEnv.isProduction // === false
appEnv.isOnline     // === true


appEnv.dev(() => {
    console.log('dev message')
})

appEnv.test(() => {
    console.log('test message')
})

appEnv.testing(() => {
    console.log('testing message')
})

appEnv.preview(() => {
    console.log('preview message')
})

appEnv.production(() => {
    console.log('production message')
})

appEnv.online(() => {
    console.log('online message')
})

appEnv.get({
    dev: 'http://dev.com',
    test: 'http://test.com',
    testing: 'http://test.com',
    preview: 'http://preview.com',
    production: 'http://production.com',
})  // => 'http://preview.com'
```

### ENV Support
无环境变量访问时，默认环境变量为``production``
```yaml
# 
# test和testing推荐只存在一个
# 由于npm test命令被单元测试占用，测试环境比较难达到命名统一
# 为了方便命名统一，推荐使用testing来命名测试环境
# 环境启动命令就可以使用: npm run testing
# 同时也兼容支持test作为环境命名，但不推荐两者同时存在
# 

DEV: dev
DEVELOPMENT: development
TEST: test
TESTING: testing
PREVIEW: preview
PRODUCTION: production
```
