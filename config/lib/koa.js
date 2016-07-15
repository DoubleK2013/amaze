import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'
import views from 'koa-views'
import mount from 'koa-mount'
import convert from 'koa-convert'
import parser from 'koa-better-body'
import onerror from 'koa-onerror'

import mongoose from 'mongoose'

import log from './logger'
import Mongoose from './mongoose'

import routes from './route'

function init(app) {
    initViewEngine(app)
    initLogger(app)
    beautifyError(app)
    initDB(app)
    initBodyParser(app)
    initStaticModules(app)
    initServerRouter(app)
    return app
}

function initBodyParser(app) {
    app.use(convert(parser()))
}

// 初始化后端模板引擎，配置模板存放路径及扩展名
// 模板引擎：swig
// 扩展名： server.view.html
function initViewEngine(app) {
    app.use(views(`${__dirname}/module/server/view`, {
        extension: 'server.view.html',
        map: {
            'server.view.html': 'swig'
        }
    }))
}

// 静态资源路由
function initStaticModules(app) {
    // 第三方静态资源
    app.use(mount('/static', serve(path.resolve('.', 'public'))))
}

async function initDB(app) {
    await Mongoose.connect()
    app.context.db = mongoose.connection
    log.db(new Date().toLocaleTimeString(), 'connected')
}

function initLogger(app) {
    app.on('error', (err) => {
        log.error(err)
    })
}

function beautifyError(app) {
    onerror(app)
}

// 服务端路由
function initServerRouter(app) {
    for (let name in routes) {
        app.use(routes[name].routes())
    }
}

export default init(new Koa())