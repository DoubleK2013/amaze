import fs from 'fs'
import path from 'path'

import logger from 'mini-logger'

import cfg from '../asset/logger'

const logPath = path.join('.', cfg.dir)

// 创建日志目录
try {
    fs.accessSync(logPath)
}
catch (e) {
    fs.mkdirSync(logPath)
}

// 日志文件系统生成代码
let log = logger({
    dir: path.join('.', cfg.dir),
    categories: cfg.categories,
    format: cfg.format

})

export default log
