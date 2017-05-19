const env = require('./app')

env.setEnv(__dirname)

console.log('env.env:', env.env)
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)

env.set('db.dev', { password: ''})
env.set('db.test', { password: '123'})
env.set('db.prod', { password: '456'})

console.log('db:', env.get('db'))
