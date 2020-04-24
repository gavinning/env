Env
---
Nodejs App环境变量管理

### Install
```sh
npm i @4a/env
```

### Usage
```js
const appEnv = require('@4a/env')


console.log('app start on', appEnv.env)

appEnv.env
appEnv.isDev
appEnv.isTesting
appEnv.isPreview
appEnv.isProduction
appEnv.isOnline // appEnv.isPreview || appEnv.isProduction


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
```

```js
const host = {
    dev: 'http://dev.com',
    testing: 'http://test.com',
    preview: 'http://preview.com',
    production: 'http://production.com',
}

module.exports = host[appEnv.env]
// Or
module.exports = appEnv.get(host)
```

### Package.json
```json
{
    "scripts": {
        "dev": "NODE_ENV=dev node app",
        "testing": "NODE_ENV=testing node app",
        "preview": "NODE_ENV=preview node app",
        "production": "NODE_ENV=production node app"
    }
}
```