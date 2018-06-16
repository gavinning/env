const Env = require('./app')
const env = new Env

console.log('env.env:', env.env)
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)


// env.set('db.dev', { password: 'dev'})
// env.set('db.test', { password: 'test'})
// env.set('db.prod', { password: 'prod'})
env.set('db', {
    dev: { password: 'dev'},
    test: { password: 'test'},
    prod: { password: 'prod'}
})
console.log('db:', env.get('db'))


env.set('sms', {username: 'gavinning'})
console.log('sms:', env.get('sms'))
console.log('sms:', env.get('sms.all'))
