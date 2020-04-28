const AppEnv = require('./env')
const appEnv = new AppEnv(process.env.NODE_ENV)

console.log('app start on', appEnv.env)

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


console.log('env uri:',
    appEnv.get({
        dev: 'http://dev.com',
        testing: 'http://test.com',
        preview: 'http://preview.com',
        production: 'http://production.com',
    })
)

console.log()