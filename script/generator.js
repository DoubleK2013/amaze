require('shelljs/global')
const argv = require('argv')
const cfg = require('../config/dev/generator')
//console.log(argv)
//console.log(cfg.dir)

argv.help()

argv.option({
    name: 'file',
    short: 'f',
    type: 'string'
})
