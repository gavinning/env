const appEnv = require('./app')

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

console.log()
