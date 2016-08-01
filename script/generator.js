require('shelljs/global')
const argv = require('argv')
const cfg = require('../config/dev/generator')

const tmpl = require('../config/dev/tmpl/controller')('price')

//console.log(argv)
//console.log(cfg.dir)
console.log(cfg)
console.log(tmpl)



argv.option({
    name: 'file',
    short: 'f',
    type: 'string'
})
argv.help()