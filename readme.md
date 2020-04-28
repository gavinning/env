Env
---
环境变量管理

### Install
```sh
npm i @4a/env
```

### Usage in Nodejs
```js
// process.env.NODE_ENV = 'preview'

const AppEnv = require('@4a/env')
const appEnv = new AppEnv(process.env.NODE_ENV)

module.exports = appEnv
```

### Usage in FE
```js
// hostname = 'preview.com'

import fe from '@4a/env/fe'
import AppEnv from '@4a/env'

// 根据hostname发现env
fe.setHostname ({
    dev: 'dev.com',
    testing: 'test.com',
    preview: 'preview.com',
    // 支持配置多个域名
    production: ['production1.com', 'production2.com', 'production3.com'],
})

export default new AppEnv(fe.env)
```

### Example
```js
console.log('app start on', appEnv.env)

appEnv.env          // === 'preview'
appEnv.isDev        // === false
appEnv.isTesting    // === false
appEnv.isPreview    // === true
appEnv.isProduction // === false
appEnv.isOnline     // === true


appEnv.dev(() => {
    console.log('dev message')
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
    testing: 'http://test.com',
    preview: 'http://preview.com',
    production: 'http://production.com',
})  // => 'http://preview.com'
```
