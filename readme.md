Node-Env
---
项目环境变量如果管理不好是一个很头疼的问题，线下开发一帆风顺，一上线各种问题 =。=  
这个东西就是为了解决这种烦恼，让你从此短小轻快

### Install
```sh
npm i global-env --save
```

### Usage
```js
const env = require('global-env')

// 直接输出当前环境变量字符串
console.log(env.env)
// 设置会同步到 process.env.NODE_ENV 方便应用内其他模块访问
console.log(process.env.NODE_ENV)

// 可以方便快捷的检查环境变量
env.isDev()
env.isTest()
env.isProd()
```
但是！红色加粗加厚的但是!  
你要首先做好环境变量的设置，像下面这样，不然上面你什么也拿不到
```sh
# 如果你可以操作服务器，建议在用户目录下建立环境变量文件，
# 这样所有项目都可以访问到，真正做到一次设置多次复用
cd ~
vim .env.json

# 你也可以在创建环境变量在下面的位置，比如说：
# 这些位置都是模块会内置查询的位置，在这些地方设置，模块可以直接读到你的环境变量
# 这样只要你的项目引入的该模块，就可以安全无痛苦的切换开发环境测试环境线上环境等等各种环境了
~/.env/env.json
~/env/env.json
```
输入环境变量，像下面这样，这样``global-env``模块就可以访问到这个json
```json
{
    "env": "development"
}
```
当然了，可能受限于服务器原因，也可能是你有代码洁癖，不想或者不能把环境变量放在预置的位置，也可以自定义位置
```js
// 比如你在项目中这样设置
// 模块即会查询你传入的目录下的.env.json文件，读取里面的环境变量
// 比如你可以传入项目根目录，这样就可以读取项目根目录下的环境变量设置
// 在.gitignore文件中忽略.env.json即可线上线下无痛切换
const env = require('global-env')
env.setEnv(__dirname)
```
如果你还不满意，非要想改个环境变量文件的名字，I服了U  
为什么要否决我的定义 =。= 好吧，虽然我很不爽，但那也不是不可以  
```js
// 呐，像这样就可以自定义文件名字了
// 后缀建议是json格式，如果不是文件内容就需要你自己搞定了
const env = require('global-env')
env.setEnv(path.join(__dirname, 'yourpath/yourenvfilename.json'))
```

### More
想要更多玩法？也不是不可以，看看下面这个例子
```js
// 线上线下配置自动切换
// 你可以这样配置
env.set('db.dev', { password: 'dev'})
env.set('db.test', { password: 'test'})
env.set('db.prod', { password: 'prod'})

// 当然了，如果你觉得上面的方式麻烦可以像下面这么配置也可以
env.set('db', {
    dev: { password: 'dev'},
    test: { password: 'test'},
    prod: { password: 'prod'}
})
```
查询的时候就很方便了  
当然了，如果你要这样配置的话，建议该配置文件也加入的.gitignore忽略列表里，至于为什么？谁特么知道 =。=
```js
// if env.env === 'dev'
env.get('db') //==> { password: 'dev'}
// if env.env === 'test'
env.get('db') //==> { password: 'test'}
// if env.env === 'prod'
env.get('db') //==> { password: 'prod'}
```
看到这里很多骚年可能会有疑问了，那如果想要管理通用配置文件呢？  
就是不管什么环境都通用的配置，虽然我很想说这类配置文件你应该单独管理  
但是看你这么有诚意，我也不能拒绝是吧，所以你可以像下面这样玩
```js
env.set('sms', {password: '123'})
// Or
env.set('sms.all', {password: '123'})
```
查询方式也是两者都可以，满足你骚动的心
```js
env.get('sms')
// Or
env.get('sms.all')
```
---
