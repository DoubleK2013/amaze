import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'
import views from 'koa-views'
import mount from 'koa-mount'
import convert from 'koa-convert'
import parser from 'koa-better-body'
import onerror from 'koa-onerror'

import mongoose from 'mongoose'

import fileCfg from '../asset/file'

import log from './logger'
import Mongoose from './mongoose'

import routes from '../../module/server/route'

export default init(new Koa())

function init(app) {
    initViewEngine(app)
    initErrorLogger(app)
    beautifyError(app)
    initDB(app)
    initBodyParser(app)
    initStaticModules(app)
    initServerRouter(app)
    initNotMatchRouter(app)
    return app
}

// 所有路由都不匹配时
function initNotMatchRouter(app) {
    app.use(async (ctx, next) => {
        switch (ctx.status) {
            case 404:
                ctx.redirect('/404')
                break
            case 500:
                ctx.redirect('/500')
                break
            // no default
        }
        next()
    })
}

function initBodyParser(app) {
    app.use(convert(parser({
        uploadDir: fileCfg.tmp
    })))
}

// 初始化后端模板引擎，配置模板存放路径及扩展名
// 模板引擎：swig
// 扩展名： server.view.html
function initViewEngine(app) {
    app.use(views(`${path.resolve('.')}/module/server/view`, {
        extension: 'server.view.html',
        map: {
            'server.view.html': 'swig'
        }
    }))
}

// 静态资源路由
function initStaticModules(app) {
    // 第三方静态资源
    app.use(convert(mount('/static', serve(path.resolve('.', 'public')))))
}

async function initDB(app) {
    await Mongoose.connect()
    app.context.db = mongoose.connection
    log.db(new Date().toLocaleTimeString(), 'Database had connected')
}

function initErrorLogger(app) {
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

